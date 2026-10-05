import React, { useState } from 'react';
import {
  Sparkles,
  Rocket,
  MessageSquare,
  Coins,
  UserCheck,
  Building2,
  ArrowUpRight,
  Send,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { SUMMIT_DETAILS } from '../data/summitData';
import {
  MentorApplication,
  InvestorApplication,
  PartnershipInquiry,
} from '../types';

interface JoinTheMovementProps {
  onApplyMentor: (app: MentorApplication) => void;
  onJoinInvestor: (app: InvestorApplication) => void;
  onPartnerInquiry: (inquiry: PartnershipInquiry) => void;
  defaultTab?: 'investor' | 'mentor' | 'partner';
}

export const JoinTheMovement: React.FC<JoinTheMovementProps> = ({
  onApplyMentor,
  onJoinInvestor,
  onPartnerInquiry,
  defaultTab = 'investor',
}) => {
  const [activeTab, setActiveTab] = useState<'investor' | 'mentor' | 'partner'>(defaultTab);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Investor form state
  const [investorForm, setInvestorForm] = useState({
    name: '',
    designation: '',
    organisation: '',
    investorType: 'Angel Investor' as InvestorApplication['investorType'],
    ticketSize: '₹10L – ₹25L',
    preferredSectors: '',
    email: '',
    phone: '',
    linkedIn: '',
  });

  // Mentor form state
  const [mentorForm, setMentorForm] = useState({
    name: '',
    designation: '',
    organisation: '',
    experience: '5+ Years',
    areaOfExpertise: '',
    linkedIn: '',
    email: '',
    phone: '',
  });

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    organisation: '',
    category: 'Institutional Partner' as PartnershipInquiry['category'],
    email: '',
    phone: '',
    message: '',
  });

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app: InvestorApplication = {
      id: `inv-${Date.now()}`,
      ...investorForm,
      submittedAt: new Date().toLocaleString('en-IN'),
    };
    onJoinInvestor(app);
    setSubmittedMessage('Thank you for registering your interest as an investor. Our institutional team will connect with you.');
    setInvestorForm({
      name: '',
      designation: '',
      organisation: '',
      investorType: 'Angel Investor',
      ticketSize: '₹10L – ₹25L',
      preferredSectors: '',
      email: '',
      phone: '',
      linkedIn: '',
    });
  };

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app: MentorApplication = {
      id: `men-${Date.now()}`,
      ...mentorForm,
      submittedAt: new Date().toLocaleString('en-IN'),
    };
    onApplyMentor(app);
    setSubmittedMessage('Thank you for joining the FutureX mentor network. We look forward to collaborating.');
    setMentorForm({
      name: '',
      designation: '',
      organisation: '',
      experience: '5+ Years',
      areaOfExpertise: '',
      linkedIn: '',
      email: '',
      phone: '',
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiry: PartnershipInquiry = {
      id: `part-${Date.now()}`,
      ...partnerForm,
      submittedAt: new Date().toLocaleString('en-IN'),
    };
    onPartnerInquiry(inquiry);
    setSubmittedMessage('Your partnership inquiry has been received. Our leadership secretariat will review and reach out.');
    setPartnerForm({
      name: '',
      organisation: '',
      category: 'Institutional Partner',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="join-movement" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Engage With FutureX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            JOIN THE <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              FUTUREX BIHAR MOVEMENT
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Select your pathway below to participate in the flagship summit and permanent ecosystem platform.
          </p>
        </div>

        {/* Primary 2 Callout Cards: Startup Application + WhatsApp Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Startup Pitch Application Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  Applications Open
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Apply for FutureX Bihar 2026
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Founders building in AI, SaaS, DeepTech, AgriTech, FinTech, and hardware: pitch your venture to active angel investors, venture partners, and institutional leaders.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Direct founder screening by institutional jury</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Mentorship clinics with IIT Patna & CIMP incubation leads</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={SUMMIT_DETAILS.pitchFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply for FutureX Bihar 2026</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Official Google Form • Estimated completion: 4-6 minutes
              </p>
            </div>
          </div>

          {/* WhatsApp Community Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Open Platform
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Join the WhatsApp Community
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Connect directly with Bihar’s fastest-growing network of builders, engineers, student innovators, and startup operators. Stay updated on offline meetups, clinics, and summit announcements.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Ecosystem announcements & workshop access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Peer-to-peer founder support & co-founder discovery</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={SUMMIT_DETAILS.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Official WhatsApp Community</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Direct moderator access: {SUMMIT_DETAILS.contactPrimary}
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Stakeholder Engagement Tab (Investors, Mentors, Partners) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Institutional & Ecosystem Channels
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-3">
                Register Institutional Interest
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                For investors, seasoned mentors, and institutional partners seeking direct collaboration.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('investor');
                  setSubmittedMessage(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'investor'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Coins className="w-4 h-4" />
                <span>Investors</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('mentor');
                  setSubmittedMessage(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'mentor'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Mentors</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('partner');
                  setSubmittedMessage(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'partner'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Partners</span>
              </button>
            </div>

            {/* Success Message Banner */}
            {submittedMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{submittedMessage}</span>
              </div>
            )}

            {/* Investor Interest Form */}
            {activeTab === 'investor' && (
              <form onSubmit={handleInvestorSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditya Kashyap"
                      value={investorForm.name}
                      onChange={(e) => setInvestorForm({ ...investorForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Designation & Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Partner, Seed Fund"
                      value={investorForm.organisation}
                      onChange={(e) => setInvestorForm({ ...investorForm, organisation: e.target.value, designation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aditya@seedfund.com"
                      value={investorForm.email}
                      onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={investorForm.phone}
                      onChange={(e) => setInvestorForm({ ...investorForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Typical Cheque Size
                    </label>
                    <select
                      value={investorForm.ticketSize}
                      onChange={(e) => setInvestorForm({ ...investorForm, ticketSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    >
                      <option value="₹10L – ₹25L">₹10L – ₹25L</option>
                      <option value="₹25L – ₹50L">₹25L – ₹50L</option>
                      <option value="₹50L – ₹1 Crore">₹50L – ₹1 Crore</option>
                      <option value="₹1 Crore+">₹1 Crore+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Sectors of Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI, SaaS, AgriTech, DeepTech"
                      value={investorForm.preferredSectors}
                      onChange={(e) => setInvestorForm({ ...investorForm, preferredSectors: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Investor Expression of Interest</span>
                </button>
              </form>
            )}

            {/* Mentor Application Form */}
            {activeTab === 'mentor' && (
              <form onSubmit={handleMentorSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Verma"
                      value={mentorForm.name}
                      onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Designation & Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CTO / Product Leader"
                      value={mentorForm.organisation}
                      onChange={(e) => setMentorForm({ ...mentorForm, organisation: e.target.value, designation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@enterprise.com"
                      value={mentorForm.email}
                      onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94310 12345"
                      value={mentorForm.phone}
                      onChange={(e) => setMentorForm({ ...mentorForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Core Area of Expertise
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI Engineering, GTM Architecture, B2B SaaS, Seed Fundraising"
                    value={mentorForm.areaOfExpertise}
                    onChange={(e) => setMentorForm({ ...mentorForm, areaOfExpertise: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-amber-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Join FutureX Advisory Mentors</span>
                </button>
              </form>
            )}

            {/* Strategic Partner Form */}
            {activeTab === 'partner' && (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sneha Patel"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Institution / Corporate Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Enterprise / Academic Incubation Center"
                      value={partnerForm.organisation}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organisation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="partnerships@organisation.com"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Category
                    </label>
                    <select
                      value={partnerForm.category}
                      onChange={(e) => setPartnerForm({ ...partnerForm, category: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-indigo-600 focus:outline-none"
                    >
                      <option value="Institutional Partner">Institutional Partner</option>
                      <option value="Corporate Partner">Corporate Partner</option>
                      <option value="Knowledge Partner">Knowledge Partner</option>
                      <option value="Technology Partner">Technology Partner</option>
                      <option value="Community Partner">Community Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Collaboration Scope / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe how your institution would like to collaborate with FutureX Bihar..."
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
