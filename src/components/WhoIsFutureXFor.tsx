import React from 'react';
import { Rocket, Coins, UserCheck, Building2, Users, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SUMMIT_DETAILS } from '../data/summitData';

interface WhoIsFutureXForProps {
  onSelectPathway?: (pathway: string) => void;
}

export const WhoIsFutureXFor: React.FC<WhoIsFutureXForProps> = ({ onSelectPathway }) => {
  const pathways = [
    {
      id: 'startups',
      title: 'Startups & Founders',
      subtitle: 'From Idea to Seed & Beyond',
      icon: Rocket,
      badge: 'Pitch & Scale',
      color: 'blue',
      description: 'For early-stage and seed-stage founders building scalable products who want stage visibility, constructive feedback, and investor access.',
      benefits: [
        'Dedicated stage time in the Pitch Arena',
        'Direct engagement with active seed investors & angels',
        'Access to IIT Patna & CIMP incubation resources',
      ],
      ctaText: 'Apply for FutureX Bihar 2026',
      ctaHref: SUMMIT_DETAILS.pitchFormUrl,
      isExternal: true,
      isPrimary: true,
    },
    {
      id: 'investors',
      title: 'Investors & Angels',
      subtitle: 'Catalytic Capital & Dealflow',
      icon: Coins,
      badge: 'Curated Access',
      color: 'emerald',
      description: 'For angel investors, family offices, and seed funds seeking capital-efficient founders and high-retention ventures emerging from Eastern India.',
      benefits: [
        'Curated cohort of vetted regional startups',
        'Direct founder dialogues without middlemen',
        'Co-investment opportunities with institutional partners',
      ],
      ctaText: 'Connect as an Investor',
      ctaHref: '#join-movement',
      isExternal: false,
      isPrimary: false,
    },
    {
      id: 'mentors',
      title: 'Mentors & Operators',
      subtitle: 'Domain Expertise & Direction',
      icon: UserCheck,
      badge: 'Guidance',
      color: 'amber',
      description: 'For experienced operators, tech leaders, and seasoned entrepreneurs willing to give back and mentor high-potential regional builders.',
      benefits: [
        'Lead masterclasses, pitch teardowns, and clinics',
        'Direct 1:1 advisory relationships with rising founders',
        'Join the permanent FutureX advisory council',
      ],
      ctaText: 'Join Advisory Network',
      ctaHref: '#join-movement',
      isExternal: false,
      isPrimary: false,
    },
    {
      id: 'partners',
      title: 'Industry & Institutions',
      subtitle: 'Strategic Collaboration',
      icon: Building2,
      badge: 'Ecosystem Alliance',
      color: 'indigo',
      description: 'For corporate enterprises, research centers, and policy enablers eager to support pilot programs, technology adoption, and ecosystem building.',
      benefits: [
        'Corporate challenge tracks & pilot problem statements',
        'Academic incubation collaboration & research commercialization',
        'Institutional branding across ecosystem touchpoints',
      ],
      ctaText: 'Partner with FutureX',
      ctaHref: '#join-movement',
      isExternal: false,
      isPrimary: false,
    },
    {
      id: 'community',
      title: 'Students & Builders',
      subtitle: 'Future Tech Talent',
      icon: Users,
      badge: 'Open Community',
      color: 'cyan',
      description: 'For student innovators, developers, designers, and future entrepreneurs looking to participate, learn, and grow alongside Bihar’s top talent.',
      benefits: [
        'Access to tactical workshops, demos, and masterclasses',
        'Real-time updates via official community channels',
        'Internship & team-building opportunities with startups',
      ],
      ctaText: 'Join WhatsApp Community',
      ctaHref: SUMMIT_DETAILS.whatsappCommunityUrl,
      isExternal: true,
      isPrimary: false,
    },
  ];

  return (
    <section id="pathways" className="py-20 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Audiences & Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            WHO IS <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              FUTUREX BIHAR FOR?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are building from scratch, allocating capital, advising teams, or fostering regional policy, FutureX provides a dedicated institutional pathway.
          </p>
        </div>

        {/* 5 Distinct Cards in Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`p-7 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                  p.isPrimary
                    ? 'border-blue-300 ring-2 ring-blue-500/10 hover:border-blue-500'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {p.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mt-0.5">
                    {p.subtitle}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {p.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100">
                  {p.isExternal ? (
                    <a
                      href={p.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        p.isPrimary
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 text-white hover:opacity-95 shadow-md shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      <span>{p.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={p.ctaHref}
                      onClick={() => onSelectPathway && onSelectPathway(p.id)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
                    >
                      <span>{p.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
