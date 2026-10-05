import { getAccessToken } from './auth';
import {
  StartupPitchSubmission,
  MentorApplication,
  InvestorApplication,
  PartnershipInquiry,
  ContactMessage
} from '../types';

export interface CreateSpreadsheetResult {
  spreadsheetId: string;
  spreadsheetUrl: string;
  title: string;
}

/**
 * Creates a dedicated FutureX Bihar Google Spreadsheet with pre-formatted tabs
 */
export async function createFutureXSpreadsheet(
  title = 'FutureX Bihar 2026 - Summit Registrations & Submissions'
): Promise<CreateSpreadsheetResult> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Not authenticated. Please sign in with Google first.');
  }

  const payload = {
    properties: {
      title,
    },
    sheets: [
      {
        properties: {
          title: 'Startup Pitches',
          gridProperties: { rowCount: 100, columnCount: 15, frozenRowCount: 1 },
        },
      },
      {
        properties: {
          title: 'Mentors',
          gridProperties: { rowCount: 100, columnCount: 10, frozenRowCount: 1 },
        },
      },
      {
        properties: {
          title: 'Investors',
          gridProperties: { rowCount: 100, columnCount: 10, frozenRowCount: 1 },
        },
      },
      {
        properties: {
          title: 'Partners & Enquiries',
          gridProperties: { rowCount: 100, columnCount: 10, frozenRowCount: 1 },
        },
      },
    ],
  };

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData?.error?.message || `Failed to create Google Spreadsheet (HTTP ${response.status})`
    );
  }

  const result = await response.json();
  const spreadsheetId = result.spreadsheetId;
  const spreadsheetUrl = result.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Seed Header Rows
  await seedHeaderRows(spreadsheetId, token);

  return {
    spreadsheetId,
    spreadsheetUrl,
    title,
  };
}

async function seedHeaderRows(spreadsheetId: string, token: string) {
  const headers = [
    {
      range: 'Startup Pitches!A1:N1',
      values: [[
        'Timestamp',
        'Founder Name',
        'Startup Name',
        'Email',
        'Phone',
        'Website',
        'Location',
        'Industry / Sector',
        'Stage',
        'Problem Statement',
        'Solution',
        'Business Model',
        'Funding Requirement',
        'Pitch Deck'
      ]],
    },
    {
      range: 'Mentors!A1:H1',
      values: [[
        'Timestamp',
        'Mentor Name',
        'Designation',
        'Organisation',
        'Experience',
        'Area of Expertise',
        'LinkedIn',
        'Email / Phone'
      ]],
    },
    {
      range: 'Investors!A1:H1',
      values: [[
        'Timestamp',
        'Investor Name',
        'Designation',
        'Organisation',
        'Investor Category',
        'Ticket Size',
        'Preferred Sectors',
        'Contact / LinkedIn'
      ]],
    },
    {
      range: 'Partners & Enquiries!A1:G1',
      values: [[
        'Timestamp',
        'Contact Name',
        'Organisation',
        'Category / Subject',
        'Email',
        'Phone',
        'Message'
      ]],
    }
  ];

  for (const item of headers) {
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(item.range)}?valueInputOption=USER_ENTERED`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: item.values }),
      }
    );
  }
}

/**
 * Appends batches of records into the Google Sheet
 */
export async function syncAllRecordsToSpreadsheet(
  spreadsheetId: string,
  data: {
    pitches: StartupPitchSubmission[];
    mentors: MentorApplication[];
    investors: InvestorApplication[];
    partners: PartnershipInquiry[];
    contacts: ContactMessage[];
  }
): Promise<{ success: boolean; rowsAppended: number }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Not authenticated. Please sign in with Google first.');
  }

  let totalRows = 0;

  // 1. Pitches
  if (data.pitches.length > 0) {
    const pitchValues = data.pitches.map((p) => [
      p.submittedAt,
      p.founderName,
      p.startupName,
      p.email,
      p.phone,
      p.website || 'N/A',
      p.location,
      p.industry,
      p.stage,
      p.problemStatement,
      p.solution,
      p.businessModel,
      p.fundingRequirement,
      p.pitchDeckFileName || p.pitchDeckUrl || 'Attached'
    ]);
    await appendToSheet(spreadsheetId, 'Startup Pitches!A:N', pitchValues, token);
    totalRows += pitchValues.length;
  }

  // 2. Mentors
  if (data.mentors.length > 0) {
    const mentorValues = data.mentors.map((m) => [
      m.submittedAt,
      m.name,
      m.designation,
      m.organisation,
      m.experience,
      m.areaOfExpertise,
      m.linkedIn,
      `${m.email} | ${m.phone}`
    ]);
    await appendToSheet(spreadsheetId, 'Mentors!A:H', mentorValues, token);
    totalRows += mentorValues.length;
  }

  // 3. Investors
  if (data.investors.length > 0) {
    const investorValues = data.investors.map((i) => [
      i.submittedAt,
      i.name,
      i.designation,
      i.organisation,
      i.investorType,
      i.ticketSize,
      i.preferredSectors,
      `${i.email} | ${i.phone} | ${i.linkedIn}`
    ]);
    await appendToSheet(spreadsheetId, 'Investors!A:H', investorValues, token);
    totalRows += investorValues.length;
  }

  // 4. Partners & Contacts
  const combinedInquiries = [
    ...data.partners.map((p) => [
      p.submittedAt,
      p.name,
      p.organisation,
      `[Partner] ${p.category}`,
      p.email,
      p.phone,
      p.message
    ]),
    ...data.contacts.map((c) => [
      c.submittedAt,
      c.name,
      c.organisation || 'Independent',
      `[Enquiry] ${c.interest}`,
      c.email,
      c.phone,
      c.message
    ])
  ];

  if (combinedInquiries.length > 0) {
    await appendToSheet(spreadsheetId, 'Partners & Enquiries!A:G', combinedInquiries, token);
    totalRows += combinedInquiries.length;
  }

  return { success: true, rowsAppended: totalRows };
}

async function appendToSheet(
  spreadsheetId: string,
  range: string,
  values: string[][],
  token: string
) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Failed to append rows (HTTP ${response.status})`);
  }
}
