import React from 'react';
import { Layers, Network, Target, Users, Zap } from 'lucide-react';

export const MoreThanASummit: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Thesis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Platform Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
              MORE THAN A SUMMIT. <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                BUILDING AN ECOSYSTEM.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              FutureX Bihar is envisioned as a permanent, year-round entrepreneurship and innovation platform connecting founders, mentors, investors, industry leaders, incubators, and policymakers.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              While <strong>FutureX Bihar 2026</strong> serves as our flagship gathering in Patna, the broader initiative operates continuously to discover high-conviction founders, provide real-world mentorship, and unlock institutional collaboration across the state.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">FutureX Bihar</div>
                <div className="text-sm font-extrabold text-slate-900 mt-1">Long-Term Community</div>
                <p className="text-xs text-slate-500 mt-1">Continuous discovery, talent pipeline & ecosystem networking.</p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">FutureX 2026</div>
                <div className="text-sm font-extrabold text-slate-900 mt-1">Flagship Summit</div>
                <p className="text-xs text-slate-600 mt-1">2-day flagship arena in Patna convening Bihar’s ecosystem.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Diagram */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Institutional Platform Architecture</h3>
                    <p className="text-xs text-slate-500">Bridging talent, capital, and academic rigor</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full border border-blue-200">
                  Permanent Network
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Founders & Innovators</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Grassroots student innovators, early-stage operators, and growth-stage tech teams from every district of Bihar.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Academic & Institutional Backbone</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      IIT Patna, Startup Bihar, and CIMP Patna providing technology transfer, incubation labs, policy incentives, and research support.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Capital & Commercial Pathways</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Angel networks, venture capital syndicates, and enterprise partners offering strategic pilots and growth capital.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
