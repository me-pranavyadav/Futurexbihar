/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FutureOfBihar } from './components/FutureOfBihar';
import { MoreThanASummit } from './components/MoreThanASummit';
import { Flywheel } from './components/Flywheel';
import { Summit2026 } from './components/Summit2026';
import { WhoIsFutureXFor } from './components/WhoIsFutureXFor';
import { JoinTheMovement } from './components/JoinTheMovement';
import { OrganisingStructure } from './components/OrganisingStructure';
import { Footer } from './components/Footer';
import { SheetsDashboardModal } from './components/SheetsDashboardModal';

import {
  StartupPitchSubmission,
  MentorApplication,
  InvestorApplication,
  PartnershipInquiry,
  ContactMessage,
} from './types';

export default function App() {
  // Modal state for Google Sheets Hub & Submissions
  const [sheetsModalOpen, setSheetsModalOpen] = useState(false);

  // Summit Records for Google Sheets & Dashboard
  const [pitches, setPitches] = useState<StartupPitchSubmission[]>([
    {
      id: 'p-init-1',
      founderName: 'Deepak Kumar & Team',
      startupName: 'EduiQo Technologies',
      email: 'founders@eduiqo.com',
      phone: '+91 9311224572',
      website: 'https://eduiqo.com/',
      location: 'Patna, Bihar',
      industry: 'EdTech / Institutional Tech',
      stage: 'Early Traction',
      problemStatement: 'Fragmentation in university administration, manual NAAC/NIRF reporting, and disconnected ERPs.',
      solution: 'Unified campus cloud operating system with automated compliance audits and real-time student lifecycle monitoring.',
      businessModel: 'Annual SaaS subscription per enrolled student + institutional modules.',
      fundingRequirement: '₹1 Crore – ₹3 Crores',
      pitchDeckFileName: 'EduiQo_Institutional_Series_Deck.pdf',
      submittedAt: '30/09/2026, 10:15:00',
    },
    {
      id: 'p-init-2',
      founderName: 'Saurav Jha & Team',
      startupName: 'ScoutEdge',
      email: 'connect@scoutedge.in',
      phone: '+91 80922 25251',
      website: 'https://scoutedge.in/',
      location: 'Patna, Bihar',
      industry: 'SportsTech & Analytics',
      stage: 'MVP / Prototype',
      problemStatement: 'Grassroots athletes in Tier-2/3 India lack objective video-based performance metrics and scouting visibility.',
      solution: 'Mobile-first computer vision biomechanics analysis and verified athletic talent discovery pipeline.',
      businessModel: 'B2B subscription for sports academies & state associations + talent scouts.',
      fundingRequirement: '₹50 Lakhs – ₹1 Crore',
      pitchDeckFileName: 'ScoutEdge_SportsTech_Pitch.pdf',
      submittedAt: '30/09/2026, 11:30:00',
    },
    {
      id: 'p-init-3',
      founderName: 'Ananya Sinha',
      startupName: 'Mithila AgroGrid',
      email: 'ananya@mithilaagro.in',
      phone: '+91 98350 11223',
      website: 'https://mithilaagro.in',
      location: 'Darbhanga, Bihar',
      industry: 'AgriTech & Supply Chain',
      stage: 'Early Traction',
      problemStatement: 'High post-harvest perishability of Makhana and regional horticulture with predatory middleman margins.',
      solution: 'Decentralized solar cold storage micro-hubs combined with direct-to-enterprise logistics.',
      businessModel: 'Cold storage storage-as-a-service fee + 6% supply aggregation margin.',
      fundingRequirement: '₹75 Lakhs – ₹1.5 Crores',
      pitchDeckFileName: 'MithilaAgroGrid_Seed_Deck.pdf',
      submittedAt: '30/09/2026, 12:45:00',
    },
  ]);

  const [mentors, setMentors] = useState<MentorApplication[]>([
    {
      id: 'm-init-1',
      name: 'Prof. Alok Nath',
      designation: 'Chairperson, Incubation Centre',
      organisation: 'CIMP Patna',
      experience: '15+ Years',
      areaOfExpertise: 'Business Feasibility, Policy Architecture & Incubation',
      linkedIn: 'https://linkedin.com/in/cimp-iiie-lead',
      email: 'alok.nath@cimp.ac.in',
      phone: '+91 94310 12345',
      submittedAt: '30/09/2026, 09:00:00',
    },
    {
      id: 'm-init-2',
      name: 'Dr. Rajiv Ranjan',
      designation: 'Principal Scientist & Tech Advisor',
      organisation: 'IIT Patna IC',
      experience: '8+ Years',
      areaOfExpertise: 'DeepTech, Computer Vision & Patent Commercialization',
      linkedIn: 'https://linkedin.com/in/rajiv-iitp',
      email: 'rajiv@iitp.ac.in',
      phone: '+91 94700 98765',
      submittedAt: '30/09/2026, 09:30:00',
    },
  ]);

  const [investors, setInvestors] = useState<InvestorApplication[]>([
    {
      id: 'i-init-1',
      name: 'Aditya Kashyap',
      designation: 'Partner',
      organisation: 'Eastern Bharat Angels & Seed Fund',
      investorType: 'Angel Investor',
      ticketSize: '₹25L – ₹75L',
      preferredSectors: 'EdTech, SaaS, AgriTech',
      email: 'aditya@easternbharat.vc',
      phone: '+91 99341 55667',
      linkedIn: 'https://linkedin.com/in/adityakashyap-vc',
      submittedAt: '30/09/2026, 10:00:00',
    },
  ]);

  const [partners, setPartners] = useState<PartnershipInquiry[]>([
    {
      id: 'pt-init-1',
      name: 'Startup Bihar Directorate',
      organisation: 'Department of Industries, Govt. of Bihar',
      category: 'Institutional Partner',
      email: 'startup@bihar.gov.in',
      phone: '+91 612 2215432',
      message: 'Co-sponsoring the seed grant disbursement track and incubation facilities announcement.',
      submittedAt: '30/09/2026, 08:30:00',
    },
  ]);

  const [contacts, setContacts] = useState<ContactMessage[]>([]);

  // Handlers for receiving submissions from forms
  const handleAddMentor = (app: MentorApplication) => {
    setMentors((prev) => [app, ...prev]);
  };

  const handleAddInvestor = (app: InvestorApplication) => {
    setInvestors((prev) => [app, ...prev]);
  };

  const handleAddPartner = (inquiry: PartnershipInquiry) => {
    setPartners((prev) => [inquiry, ...prev]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalSubmissions =
    pitches.length + mentors.length + investors.length + partners.length + contacts.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Sticky Header with Streamlined Navigation & Google Sheets Hub */}
      <Header
        onOpenPitchModal={() => scrollToSection('join-movement')}
        onOpenSheetsModal={() => setSheetsModalOpen(true)}
        sheetsCount={totalSubmissions}
      />

      <main className="flex-1">
        {/* 1. Hero: FUTUREX BIHAR 2026 */}
        <Hero
          onOpenPitchModal={() => scrollToSection('join-movement')}
          onScrollToEcosystem={() => scrollToSection('future-of-bihar')}
        />

        {/* 2. The Future of Entrepreneurship in Bihar (4 Grounded Pillars) */}
        <FutureOfBihar />

        {/* 3. More Than a Summit. Building an Ecosystem. */}
        <MoreThanASummit />

        {/* 4. FutureX Flywheel: Startups → Mentors → Investors → Industry → Institutions → Impact */}
        <Flywheel />

        {/* 5. 2-Day Summit: What Is Happening in FutureX Bihar 2026 & Featured Product Showcases */}
        <Summit2026 onOpenPitchModal={() => scrollToSection('join-movement')} />

        {/* 6. Who Is FutureX Bihar For: Clear Pathways (Startup / Investor / Mentor / Partner / Community) */}
        <WhoIsFutureXFor onSelectPathway={() => scrollToSection('join-movement')} />

        {/* 7. Join the Movement: Apply for FutureX Bihar 2026, WhatsApp Community, Investor/Mentor/Partner Engagement */}
        <JoinTheMovement
          onApplyMentor={handleAddMentor}
          onJoinInvestor={handleAddInvestor}
          onPartnerInquiry={handleAddPartner}
        />

        {/* 8. Organising Structure: Hosted by ScoutEdge • EduiQo / Organised by IIT Patna • Startup Bihar • CIMP Patna */}
        <OrganisingStructure />
      </main>

      {/* 9. Footer: WhatsApp Community, LinkedIn + Instagram, futurexbihar.org */}
      <Footer />

      {/* Google Sheets Hub & Submissions Management Modal */}
      <SheetsDashboardModal
        isOpen={sheetsModalOpen}
        onClose={() => setSheetsModalOpen(false)}
        pitches={pitches}
        mentors={mentors}
        investors={investors}
        partners={partners}
        contacts={contacts}
      />
    </div>
  );
}
