import React from 'react';
import { FutureXLogo } from './brand/FutureXLogo';
import { SUMMIT_DETAILS } from '../data/summitData';
import {
  ArrowUp,
  MapPin,
  Phone,
  Globe,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pathways = [
    { name: 'Startup Pathway', href: SUMMIT_DETAILS.pitchFormUrl, isExternal: true },
    { name: 'Investor Pathway', href: '#join-movement', isExternal: false },
    { name: 'Mentor Pathway', href: '#join-movement', isExternal: false },
    { name: 'Partner Pathway', href: '#join-movement', isExternal: false },
    { name: 'Community Pathway', href: SUMMIT_DETAILS.whatsappCommunityUrl, isExternal: true },
  ];

  const quickNav = [
    { name: 'Vision', href: '#hero' },
    { name: 'Future of Bihar', href: '#future-of-bihar' },
    { name: 'More Than a Summit', href: '#about' },
    { name: 'Ecosystem Flywheel', href: '#flywheel' },
    { name: '2-Day Summit 2026', href: '#summit' },
    { name: 'Who Is FutureX For', href: '#pathways' },
    { name: 'Join the Movement', href: '#join-movement' },
    { name: 'Organising Structure', href: '#organising-structure' },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden text-slate-600">
      {/* Background Subtle Ambient */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Community Callout Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Official WhatsApp Community</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
              Join Bihar’s Flagship Builder Community
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect with fellow founders, engineers, researchers, and early-stage operators building from Bihar.
            </p>
          </div>

          <a
            href={SUMMIT_DETAILS.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join WhatsApp Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <FutureXLogo height={48} variant="full" />

            <div className="text-sm font-extrabold text-slate-900 tracking-wide uppercase">
              {SUMMIT_DETAILS.tagline}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              FutureX Bihar is a permanent institutional platform for entrepreneurship, technology innovation, and startup ecosystem acceleration across Bihar.
            </p>

            {/* Social Channels: LinkedIn, Instagram, YouTube */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SUMMIT_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:shadow-sm transition-all"
                aria-label="FutureX Bihar on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={SUMMIT_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:shadow-sm transition-all"
                aria-label="FutureX Bihar on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={SUMMIT_DETAILS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-red-600 hover:border-red-300 hover:shadow-sm transition-all"
                aria-label="FutureX Bihar on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pathways Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Clear Pathways
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {pathways.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target={p.isExternal ? '_blank' : undefined}
                    rel={p.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-400">›</span>
                    <span>{p.name}</span>
                    {p.isExternal && <ArrowUpRight className="w-3 h-3 text-slate-400" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {quickNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-400">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Destination & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Official Hub
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-bold text-slate-900">{SUMMIT_DETAILS.website}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <a href={`mailto:${SUMMIT_DETAILS.email}`} className="hover:text-blue-600">
                  {SUMMIT_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{SUMMIT_DETAILS.contactPrimary}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Patna, Bihar (Venue to be announced)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <div className="text-[11px] text-slate-500 font-medium">
                Hosted by ScoutEdge • EduiQo
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                Organised by IIT Patna • Startup Bihar • CIMP Patna
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Return to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {SUMMIT_DETAILS.year} FutureX Bihar. All rights reserved. Bihar’s Flagship AI, Startup & Innovation Summit.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono text-[11px]">
              Patna, Bihar
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
