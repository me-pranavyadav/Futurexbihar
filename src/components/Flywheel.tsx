import React, { useState } from 'react';
import { Rocket, UserCheck, Coins, Building2, GraduationCap, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { FLYWHEEL_STEPS } from '../data/summitData';

export const Flywheel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap: Record<string, any> = {
    Rocket,
    UserCheck,
    Coins,
    Building2,
    GraduationCap,
    Trophy,
  };

  return (
    <section id="flywheel" className="py-20 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Sustainable Momentum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            THE FUTUREX <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              ECOSYSTEM FLYWHEEL
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Startups → Mentors → Investors → Industry → Institutions → Impact. <br />
            Each element reinforces the next, creating a self-sustaining innovation cycle for Bihar.
          </p>
        </div>

        {/* The 6 Flywheel Nodes in Interactive Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {FLYWHEEL_STEPS.map((s, idx) => {
            const Icon = iconMap[s.icon] || Rocket;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-blue-500 shadow-md shadow-blue-500/10 scale-102 ring-2 ring-blue-500/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-700' : 'text-slate-400'}`}>
                    {s.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-slate-900 tracking-wide">
                    {s.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                    {s.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold font-mono uppercase">
              <span>Node {FLYWHEEL_STEPS[activeStep].step} of 06</span>
              <span>•</span>
              <span>{FLYWHEEL_STEPS[activeStep].subtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              {FLYWHEEL_STEPS[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {FLYWHEEL_STEPS[activeStep].description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 self-end md:self-center">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : FLYWHEEL_STEPS.length - 1))}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-bold cursor-pointer"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev < FLYWHEEL_STEPS.length - 1 ? prev + 1 : 0))}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/20"
            >
              <span>Next Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
