import React from 'react';
import { MapPin, Calendar, Building, Sparkles, ArrowRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SUMMIT_DETAILS } from '../data/summitData';
import { EduiQoLogo } from './brand/EduiQoLogo';
import { ScoutEdgeLogo } from './brand/ScoutEdgeLogo';

interface HeroProps {
  onOpenPitchModal: () => void;
  onScrollToEcosystem: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPitchModal,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-32 pb-16 md:pt-36 md:pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern bg-[#F8FAFC]"
    >
      {/* Dynamic Background Light Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-amber-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[350px] bg-indigo-300/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Vision & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Startup Pitch Applications Open</span>
            </div>

            {/* Primary Hero Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.04] uppercase">
              FUTURE<span className="text-blue-600">X</span> <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                BIHAR 2026
              </span>
            </h1>

            {/* Descriptor */}
            <div className="mt-3 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-800">
              {SUMMIT_DETAILS.descriptor}
            </div>

            {/* Supporting Statement */}
            <div className="mt-2 text-sm sm:text-base font-extrabold tracking-widest text-amber-600 uppercase">
              {SUMMIT_DETAILS.tagline}
            </div>

            {/* Core Message */}
            <p className="mt-2 text-sm sm:text-base font-medium text-slate-600 italic">
              "{SUMMIT_DETAILS.coreMessage}"
            </p>

            {/* Institutional Framework Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-2xl w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">
                    Hosted By
                  </span>
                  <div className="font-extrabold text-slate-900 mt-0.5 flex items-center gap-2">
                    <span>ScoutEdge</span>
                    <span className="text-slate-300">•</span>
                    <span>EduiQo</span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">
                    Organised By
                  </span>
                  <div className="font-extrabold text-blue-900 mt-0.5 flex items-center gap-1.5 flex-wrap">
                    <span>IIT Patna</span>
                    <span className="text-slate-300">•</span>
                    <span>Startup Bihar</span>
                    <span className="text-slate-300">•</span>
                    <span>CIMP Patna</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Meta Pills */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs font-black text-slate-900">{SUMMIT_DETAILS.venue}</div>
                  <div className="text-[10px] text-slate-500">{SUMMIT_DETAILS.venueNote}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Summit Edition</div>
                  <div className="text-xs font-black text-slate-900">Flagship 2026</div>
                  <div className="text-[10px] text-slate-500">2-Day Summit</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Anchors</div>
                  <div className="text-xs font-black text-slate-900">IITP • Startup Bihar • CIMP</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Pitch Registration CTA */}
              <a
                href={SUMMIT_DETAILS.pitchFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Apply for FutureX Bihar 2026</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary WhatsApp Community CTA */}
              <a
                href={SUMMIT_DETAILS.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Join WhatsApp Community</span>
              </a>

              {/* In-App Quick View Button */}
              <button
                type="button"
                onClick={onOpenPitchModal}
                className="hidden md:inline-flex text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-4 cursor-pointer"
              >
                or submit details in-app
              </button>
            </div>
          </div>

          {/* Right Column: Visual Artwork & Host Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Visual Hero Image Container */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-2 group hover:shadow-blue-500/10 transition-all">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/futurex_hero_visual_1790771624692.jpg"
                  alt="FutureX Bihar 2026 - Innovation Matrix"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        Long-Term Platform & Flagship Summit
                      </div>
                      <div className="text-sm font-black text-slate-900">
                        FutureX Bihar 2026
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      Patna, Bihar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Host & Featured Tech Brands */}
            <div className="w-full mt-4 p-4 rounded-2xl bg-white/95 border border-slate-200 shadow-sm flex items-center justify-around gap-4">
              <a
                href="https://scoutedge.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left group/host hover:opacity-90 transition-opacity"
              >
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Hosted by</span>
                <div className="flex items-center gap-3 mt-1.5">
                  <ScoutEdgeLogo height={36} layout="emblem-only" />
                  <div>
                    <span className="text-xs font-black text-slate-900 block group-hover/host:text-emerald-700 transition-colors">ScoutEdge</span>
                    <span className="text-[10px] text-slate-500 font-medium">Sports Intelligence</span>
                  </div>
                </div>
              </a>
              <div className="h-10 w-[1px] bg-slate-200" />
              <a
                href="https://eduiqo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left group/host hover:opacity-90 transition-opacity"
              >
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Hosted by</span>
                <div className="flex items-center gap-3 mt-1.5">
                  <EduiQoLogo height={36} layout="emblem-only" />
                  <div>
                    <span className="text-xs font-black text-slate-900 block group-hover/host:text-blue-700 transition-colors">EduiQo</span>
                    <span className="text-[10px] text-slate-500 font-medium">Institutional Tech</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
