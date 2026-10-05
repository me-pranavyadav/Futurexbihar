import React from 'react';
import { Calendar, Mic, BookOpen, ExternalLink, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FEATURED_SHOWCASES, SUMMIT_DETAILS } from '../data/summitData';
import { EduiQoLogo } from './brand/EduiQoLogo';
import { ScoutEdgeLogo } from './brand/ScoutEdgeLogo';

interface Summit2026Props {
  onOpenPitchModal: () => void;
}

export const Summit2026: React.FC<Summit2026Props> = ({ onOpenPitchModal }) => {
  return (
    <section id="summit" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>The 2026 Summit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            WHAT IS HAPPENING IN <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              FUTUREX BIHAR 2026
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A focused 2-day flagship convening in Patna, bringing together ambitious founders, academic research leaders, mentors, and investors.
          </p>
        </div>

        {/* 3 Summit Anchor Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
              <Mic className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              Track 01
            </span>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mt-3">
              Startup Pitch Arena
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Curated early-stage and seed-stage startups get focused stage time to present their products and traction to a panel of mentors and active investors.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200">
              <a
                href={SUMMIT_DETAILS.pitchFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
              >
                <span>Pitch Application Open</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-amber-400 hover:bg-white hover:shadow-xl hover:shadow-amber-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Track 02
            </span>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mt-3">
              Masterclasses & Clinics
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Tactical workshops led by experienced operators on go-to-market architecture, fundraising readiness, institutional governance, and building with frontier AI.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500">
                Led by Seasoned Operators & Researchers
              </span>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-emerald-400 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Track 03
            </span>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mt-3">
              Institutional Convergence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Strategic deliberations between academic incubation centers (IIT Patna, CIMP) and Startup Bihar to accelerate deeptech commercialization and policy support.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500">
                IIT Patna • Startup Bihar • CIMP Patna
              </span>
            </div>
          </div>
        </div>

        {/* Featured Product Showcases (ScoutEdge & EduiQo) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Built in Bihar
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
              Featured Product Showcases
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Spotlighting homegrown technology ventures engineering defensible platforms from Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* EduiQo Technologies Showcase */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Product Showcase #01
                  </span>
                  <a
                    href="https://eduiqo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    <span>eduiqo.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mb-4">
                  <EduiQoLogo height={44} layout="horizontal" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                  {FEATURED_SHOWCASES[0].description}
                </p>

                <div className="mt-5 space-y-2">
                  {FEATURED_SHOWCASES[0].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Institutional Tech</span>
                <a
                  href="https://eduiqo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Visit Platform
                </a>
              </div>
            </div>

            {/* ScoutEdge Showcase */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-400 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Product Showcase #02
                  </span>
                  <a
                    href="https://scoutedge.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    <span>scoutedge.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mb-4">
                  <ScoutEdgeLogo height={44} layout="horizontal" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                  {FEATURED_SHOWCASES[1].description}
                </p>

                <div className="mt-5 space-y-2">
                  {FEATURED_SHOWCASES[1].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Sports Intelligence</span>
                <a
                  href="https://scoutedge.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
