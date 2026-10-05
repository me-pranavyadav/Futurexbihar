import React, { useState, useEffect } from 'react';
import {
  Table,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  LogIn,
  LogOut,
  RefreshCw,
  FileSpreadsheet,
  Download,
  ShieldCheck,
  User as UserIcon,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { googleSignIn, logout, initAuth } from '../services/auth';
import { createFutureXSpreadsheet, syncAllRecordsToSpreadsheet } from '../services/sheets';
import {
  StartupPitchSubmission,
  MentorApplication,
  InvestorApplication,
  PartnershipInquiry,
  ContactMessage,
} from '../types';

interface SheetsDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  pitches: StartupPitchSubmission[];
  mentors: MentorApplication[];
  investors: InvestorApplication[];
  partners: PartnershipInquiry[];
  contacts: ContactMessage[];
}

export const SheetsDashboardModal: React.FC<SheetsDashboardModalProps> = ({
  isOpen,
  onClose,
  pitches,
  mentors,
  investors,
  partners,
  contacts,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'pitches' | 'mentors' | 'investors' | 'partners'>('pitches');

  // Google Sheets state
  const [spreadsheetUrl, setSpreadsheetUrl] = useState<string | null>(null);
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Mandatory confirmation dialog for mutating/creating spreadsheets
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<'create' | 'sync' | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
      },
      () => {
        setCurrentUser(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  if (!isOpen) return null;

  const totalRecords =
    pitches.length + mentors.length + investors.length + partners.length + contacts.length;

  const handleGoogleSignIn = async () => {
    setIsLoggingIn(true);
    setErrorMessage(null);
    try {
      const res = await googleSignIn();
      if (res?.user) {
        setCurrentUser(res.user);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'Failed to authenticate with Google.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleSignOut = async () => {
    await logout();
    setCurrentUser(null);
    setSpreadsheetUrl(null);
    setSpreadsheetId(null);
    setSyncStatus(null);
  };

  const triggerCreateSpreadsheet = () => {
    if (!currentUser) {
      handleGoogleSignIn();
      return;
    }
    setPendingAction('create');
    setConfirmModalOpen(true);
  };

  const triggerSyncData = () => {
    if (!currentUser) {
      handleGoogleSignIn();
      return;
    }
    setPendingAction('sync');
    setConfirmModalOpen(true);
  };

  const executeConfirmedAction = async () => {
    setConfirmModalOpen(false);
    setErrorMessage(null);
    setIsSyncing(true);

    try {
      let targetId = spreadsheetId;
      let targetUrl = spreadsheetUrl;

      if (!targetId || pendingAction === 'create') {
        setSyncStatus('Provisioning FutureX Bihar Google Spreadsheet...');
        const sheetRes = await createFutureXSpreadsheet(
          `FutureX Bihar 2026 - Summit Applications (${new Date().toLocaleDateString()})`
        );
        targetId = sheetRes.spreadsheetId;
        targetUrl = sheetRes.spreadsheetUrl;
        setSpreadsheetId(targetId);
        setSpreadsheetUrl(targetUrl);
      }

      setSyncStatus('Writing records into separate tabs...');
      const syncRes = await syncAllRecordsToSpreadsheet(targetId, {
        pitches,
        mentors,
        investors,
        partners,
        contacts,
      });

      setSyncStatus(`Successfully synchronized ${syncRes.rowsAppended} records to your Google Sheet!`);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'Error communicating with Google Sheets API.');
      setSyncStatus(null);
    } finally {
      setIsSyncing(false);
    }
  };

  // CSV Fallback export
  const exportCsv = (tab: 'pitches' | 'mentors' | 'investors' | 'partners') => {
    let rows: string[][] = [];
    let filename = `futurex_bihar_${tab}.csv`;

    if (tab === 'pitches') {
      rows = [
        ['Timestamp', 'Founder', 'Startup', 'Email', 'Phone', 'Stage', 'Industry', 'Funding Requirement', 'Deck'],
        ...pitches.map((p) => [
          p.submittedAt,
          p.founderName,
          p.startupName,
          p.email,
          p.phone,
          p.stage,
          p.industry,
          p.fundingRequirement,
          p.pitchDeckFileName || 'Deck',
        ]),
      ];
    } else if (tab === 'mentors') {
      rows = [
        ['Timestamp', 'Name', 'Designation', 'Organisation', 'Experience', 'Expertise', 'Email', 'Phone', 'LinkedIn'],
        ...mentors.map((m) => [
          m.submittedAt,
          m.name,
          m.designation,
          m.organisation,
          m.experience,
          m.areaOfExpertise,
          m.email,
          m.phone,
          m.linkedIn,
        ]),
      ];
    } else if (tab === 'investors') {
      rows = [
        ['Timestamp', 'Name', 'Designation', 'Organisation', 'Type', 'Ticket Size', 'Sectors', 'Email', 'Phone'],
        ...investors.map((i) => [
          i.submittedAt,
          i.name,
          i.designation,
          i.organisation,
          i.investorType,
          i.ticketSize,
          i.preferredSectors,
          i.email,
          i.phone,
        ]),
      ];
    } else {
      rows = [
        ['Timestamp', 'Name', 'Organisation', 'Category', 'Email', 'Phone', 'Message'],
        ...partners.map((p) => [
          p.submittedAt,
          p.name,
          p.organisation,
          `Partner - ${p.category}`,
          p.email,
          p.phone,
          p.message,
        ]),
        ...contacts.map((c) => [
          c.submittedAt,
          c.name,
          c.organisation || 'N/A',
          `Contact - ${c.interest}`,
          c.email,
          c.phone,
          c.message,
        ]),
      ];
    }

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      rows.map((e) => e.map((val) => `"${(val || '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Table className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  Google Sheets Hub & Submissions
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  {totalRecords} Total Records
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Synchronize FutureX Bihar summit applications directly with your Google Workspace Sheets
              </p>
            </div>
          </div>

          {/* User Sign-In Badge / Action */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || 'Google User'}
                    className="w-6 h-6 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <UserIcon className="w-4 h-4 text-slate-500" />
                )}
                <div className="text-left text-xs">
                  <div className="font-bold text-slate-900 leading-none">
                    {currentUser.displayName || currentUser.email?.split('@')[0]}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-mono">Connected</div>
                </div>
                <button
                  type="button"
                  onClick={handleGoogleSignOut}
                  className="p-1 text-slate-400 hover:text-red-500 ml-1 cursor-pointer"
                  title="Sign out from Google"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoggingIn}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <span>{isLoggingIn ? 'Connecting...' : 'Sign in with Google'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-4 sm:p-6 bg-slate-50/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={triggerCreateSpreadsheet}
              disabled={isSyncing}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Create / Export to Google Sheet</span>
            </button>

            {spreadsheetId && (
              <button
                type="button"
                onClick={triggerSyncData}
                disabled={isSyncing}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>Sync Latest Updates</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => exportCsv(activeTab)}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold shadow-xs cursor-pointer"
              title="Download CSV for current tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          {spreadsheetUrl && (
            <a
              href={spreadsheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-colors"
            >
              <span>Open in Google Sheets</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Sync Status / Error Banner */}
        {syncStatus && (
          <div className="px-6 py-2.5 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{syncStatus}</span>
          </div>
        )}

        {errorMessage && (
          <div className="px-6 py-2.5 bg-red-50 border-b border-red-200 text-xs text-red-800 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Tab Selector */}
        <div className="px-6 pt-4 border-b border-slate-200 flex items-center gap-2 overflow-x-auto bg-slate-50">
          {[
            { id: 'pitches', label: 'Startup Pitches', count: pitches.length },
            { id: 'mentors', label: 'Mentors', count: mentors.length },
            { id: 'investors', label: 'Investors', count: investors.length },
            { id: 'partners', label: 'Partners & Enquiries', count: partners.length + contacts.length },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === tab.id ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-600'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {activeTab === 'pitches' && (
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              {pitches.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  No startup applications submitted yet. Click "Apply to Pitch" on the website to submit.
                </div>
              ) : (
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-3">Startup</th>
                      <th className="py-3 px-3">Founder</th>
                      <th className="py-3 px-3">Sector</th>
                      <th className="py-3 px-3">Stage</th>
                      <th className="py-3 px-3">Funding Ask</th>
                      <th className="py-3 px-3">Contact</th>
                      <th className="py-3 px-3">Deck</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {pitches.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3 font-bold text-slate-900">{p.startupName}</td>
                        <td className="py-3 px-3">{p.founderName}</td>
                        <td className="py-3 px-3 text-blue-700 font-medium">{p.industry}</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-semibold">
                            {p.stage}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-emerald-700">{p.fundingRequirement}</td>
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                          {p.email} <br /> {p.phone}
                        </td>
                        <td className="py-3 px-3 text-slate-500">{p.pitchDeckFileName || 'Attached'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'mentors' && (
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              {mentors.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  No mentor applications submitted yet.
                </div>
              ) : (
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-3">Name</th>
                      <th className="py-3 px-3">Designation & Org</th>
                      <th className="py-3 px-3">Experience</th>
                      <th className="py-3 px-3">Expertise</th>
                      <th className="py-3 px-3">Email & Phone</th>
                      <th className="py-3 px-3">LinkedIn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mentors.map((m) => (
                      <tr key={m.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3 font-bold text-slate-900">{m.name}</td>
                        <td className="py-3 px-3">
                          {m.designation} <br />
                          <span className="text-slate-500">{m.organisation}</span>
                        </td>
                        <td className="py-3 px-3">{m.experience}</td>
                        <td className="py-3 px-3 text-amber-700 font-medium">{m.areaOfExpertise}</td>
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                          {m.email} <br /> {m.phone}
                        </td>
                        <td className="py-3 px-3 text-blue-600 truncate max-w-[150px]">
                          {m.linkedIn ? (
                            <a href={m.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                              LinkedIn Profile
                            </a>
                          ) : (
                            'N/A'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              {investors.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  No investor registrations recorded yet.
                </div>
              ) : (
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-3">Name</th>
                      <th className="py-3 px-3">Designation & Fund</th>
                      <th className="py-3 px-3">Investor Type</th>
                      <th className="py-3 px-3">Ticket Size</th>
                      <th className="py-3 px-3">Target Sectors</th>
                      <th className="py-3 px-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {investors.map((i) => (
                      <tr key={i.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3 font-bold text-slate-900">{i.name}</td>
                        <td className="py-3 px-3">
                          {i.designation} <br />
                          <span className="text-slate-500">{i.organisation}</span>
                        </td>
                        <td className="py-3 px-3 text-emerald-700 font-semibold">{i.investorType}</td>
                        <td className="py-3 px-3 font-mono font-medium">{i.ticketSize}</td>
                        <td className="py-3 px-3 text-slate-600">{i.preferredSectors}</td>
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                          {i.email} <br /> {i.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="space-y-6">
              {/* Partners Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-3 bg-slate-100 border-b border-slate-200">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                    Partnership Proposals ({partners.length})
                  </h4>
                </div>
                {partners.length === 0 ? (
                  <p className="p-6 text-xs text-slate-500 text-center">No partnership inquiries yet.</p>
                ) : (
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Name</th>
                        <th className="py-2.5 px-3">Organisation</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Message</th>
                        <th className="py-2.5 px-3">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {partners.map((pr) => (
                        <tr key={pr.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-3 font-bold text-slate-900">{pr.name}</td>
                          <td className="py-3 px-3">{pr.organisation}</td>
                          <td className="py-3 px-3 text-blue-700 font-medium">{pr.category}</td>
                          <td className="py-3 px-3 max-w-xs text-slate-600 leading-snug">{pr.message}</td>
                          <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                            {pr.email} <br /> {pr.phone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* General Inquiries */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-3 bg-slate-100 border-b border-slate-200">
                  <h4 className="text-xs font-bold text-blue-800 uppercase tracking-widest">
                    General Contact Enquiries ({contacts.length})
                  </h4>
                </div>
                {contacts.length === 0 ? (
                  <p className="p-6 text-xs text-slate-500 text-center">No general messages yet.</p>
                ) : (
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Sender</th>
                        <th className="py-2.5 px-3">Interest Subject</th>
                        <th className="py-2.5 px-3">Message</th>
                        <th className="py-2.5 px-3">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {contacts.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-3 font-bold text-slate-900">
                            {c.name} <br />
                            <span className="text-[10px] text-slate-500">{c.organisation || 'Individual'}</span>
                          </td>
                          <td className="py-3 px-3 text-amber-700 font-medium">{c.interest}</td>
                          <td className="py-3 px-3 max-w-sm text-slate-600 leading-snug">{c.message}</td>
                          <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                            {c.email} <br /> {c.phone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mandatory User Confirmation Modal for Destructive/Mutating Google Workspace Actions */}
      {confirmModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setConfirmModalOpen(false)} />
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-20 animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 mx-auto border border-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-black text-slate-900 text-center uppercase tracking-tight">
              Confirm Google Sheets Operation
            </h4>

            <p className="mt-2 text-xs text-slate-600 text-center leading-relaxed">
              {pendingAction === 'create'
                ? `Create a dedicated "FutureX Bihar 2026 - Summit Applications" Google Spreadsheet in your Google Drive and populate all ${totalRecords} submissions across organized tabs?`
                : `Append ${totalRecords} summit records directly to your active Google Spreadsheet?`}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setConfirmModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={executeConfirmedAction}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                Confirm & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
