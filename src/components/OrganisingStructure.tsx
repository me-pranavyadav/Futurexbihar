import React from 'react';
import { Building2, GraduationCap, Award, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { EduiQoLogo } from './brand/EduiQoLogo';
import { ScoutEdgeLogo } from './brand/ScoutEdgeLogo';

export const OrganisingStructure: React.FC = () => {
  return (
    <section id="organising-structure" className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Institutional Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            ORGANISING <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              STRUCTURE & ANCHORS
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A collaborative alliance bridging frontline homegrown technology enterprises with premier academic incubation centers and state entrepreneurial infrastructure.
          </p>
        </div>

        {/* 2-Tier Institutional Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tier 1: Hosted by (ScoutEdge & EduiQo) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Host Conveners
                </span>
                <span className="text-xs font-bold text-blue-700">Homegrown Enterprise</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Hosted By
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Initiated by pioneering technology ventures founded and built in Bihar, committed to creating an institutional platform for the next generation of builders.
              </p>

              {/* Host Logos & Details */}
              <div className="mt-8 space-y-6">
                {/* ScoutEdge */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all">
                  <div className="flex items-center justify-between">
                    <ScoutEdgeLogo height={38} layout="horizontal" />
                    <a
                      href="https://scoutedge.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1 font-semibold"
                    >
                      <span>scoutedge.in</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Sports intelligence, biomechanical talent scouting, and performance analytics infrastructure for grassroots sports.
                  </p>
                </div>

                {/* EduiQo */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all">
                  <div className="flex items-center justify-between">
                    <EduiQoLogo height={36} layout="horizontal" />
                    <a
                      href="https://eduiqo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-blue-700 flex items-center gap-1 font-semibold"
                    >
                      <span>eduiqo.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Institutional campus operating system, higher education compliance digitization, and automated administrative intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
              Co-founding hosts dedicated to permanent Bihar ecosystem development.
            </div>
          </div>

          {/* Tier 2: Organised by (IIT Patna, Startup Bihar, CIMP Patna) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Institutional Anchors
                </span>
                <span className="text-xs font-bold text-amber-700">Academic & Policy Pillars</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Organised By
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Anchored by Eastern India’s foremost academic research institution, the state startup enablement initiative, and premier management incubation center.
              </p>

              {/* 3 Organising Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* IIT Patna */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-400 hover:shadow-sm transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono font-bold text-blue-700 uppercase">
                      Technology Anchor
                    </div>
                    <div className="text-base font-black text-slate-900 mt-1 leading-tight">
                      IIT Patna
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      DeepTech research commercialization, patent guidance, and engineering incubation facilities.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                    Institute of National Importance
                  </div>
                </div>

                {/* Startup Bihar */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-amber-400 hover:shadow-sm transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                      State Policy Anchor
                    </div>
                    <div className="text-base font-black text-slate-900 mt-1 leading-tight">
                      Startup Bihar
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Department of Industries initiative supporting seed grant disbursements and incubation infrastructure.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                    Govt. of Bihar Initiative
                  </div>
                </div>

                {/* CIMP Patna */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-indigo-400 hover:shadow-sm transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono font-bold text-indigo-700 uppercase">
                      Incubation Anchor
                    </div>
                    <div className="text-base font-black text-slate-900 mt-1 leading-tight">
                      CIMP Patna
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Centre for Innovation, Incubation & Entrepreneurship providing business feasibility and market linkages.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                    Premier Management Institute
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-600">
              <span>Framework: Hosted by ScoutEdge • EduiQo</span>
              <span className="text-slate-400">•</span>
              <span>Organised by IIT Patna • Startup Bihar • CIMP Patna</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
