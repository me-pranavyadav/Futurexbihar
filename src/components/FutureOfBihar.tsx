import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { FUTURE_OF_BIHAR_PILLARS } from '../data/summitData';

export const FutureOfBihar: React.FC = () => {
  return (
    <section id="future-of-bihar" className="py-20 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Strategic Direction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            THE FUTURE OF <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              ENTREPRENEURSHIP IN BIHAR
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bihar possesses deep technical talent, operational resilience, and immense problem-solving grit. FutureX exists to channel this energy into scalable, defensible technology enterprises.
          </p>
        </div>

        {/* 4 Grounded Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_OF_BIHAR_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-blue-700">
                    {pillar.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
