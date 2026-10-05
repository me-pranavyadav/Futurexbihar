import React, { useState, useEffect } from 'react';
import { FutureXLogo } from './brand/FutureXLogo';
import { Menu, X, ArrowUpRight, Table, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenPitchModal: () => void;
  onOpenSheetsModal: () => void;
  sheetsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPitchModal,
  onOpenSheetsModal,
  sheetsCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#hero' },
    { name: 'Future of Bihar', href: '#future-of-bihar' },
    { name: 'Ecosystem', href: '#about' },
    { name: 'Flywheel', href: '#flywheel' },
    { name: 'Summit 2026', href: '#summit' },
    { name: 'Pathways', href: '#pathways' },
    { name: 'Join Us', href: '#join-movement' },
    { name: 'Organisers', href: '#organising-structure' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group transition-transform focus:outline-none"
              aria-label="FutureX Bihar Home"
            >
              <FutureXLogo height={44} variant="full" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-white hover:shadow-xs"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Google Sheets Hub / Sync Button */}
              <button
                type="button"
                onClick={onOpenSheetsModal}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all shadow-xs group cursor-pointer"
                title="Manage Summit Submissions & Sync with Google Sheets"
              >
                <Table className="w-3.5 h-3.5 text-emerald-600 group-hover:rotate-6 transition-transform" />
                <span className="hidden md:inline">Google Sheets Hub</span>
                {sheetsCount > 0 && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold bg-emerald-200/70 text-emerald-900 rounded-full">
                    {sheetsCount}
                  </span>
                )}
              </button>

              {/* Primary Pitch CTA - Official Google Form */}
              <a
                href="https://forms.gle/K427gdu4ugSPyjZh9"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Apply for FutureX Bihar 2026</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={onOpenSheetsModal}
                className="sm:hidden p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
                title="Google Sheets"
              >
                <Table className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 max-h-[85vh] overflow-y-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSheetsModal();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <Table className="w-4 h-4 text-emerald-600" />
                <span>Google Sheets Submissions ({sheetsCount})</span>
              </button>

              <a
                href="https://forms.gle/K427gdu4ugSPyjZh9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 flex items-center justify-center gap-2 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 shadow-lg shadow-blue-500/25"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Apply for FutureX Bihar 2026</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
