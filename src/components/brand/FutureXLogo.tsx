import React from 'react';

interface FutureXLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon-only' | 'light-text';
  height?: number;
}

export const FutureXLogo: React.FC<FutureXLogoProps> = ({
  className = '',
  variant = 'full',
  height = 56,
}) => {
  if (variant === 'icon-only') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        style={{ height: `${height}px`, width: 'auto' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="FutureX Bihar Icon"
      >
        <defs>
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="navyArm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B2545" />
            <stop offset="100%" stopColor="#021226" />
          </linearGradient>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="sunGrad" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Top-Left to Bottom-Right Base Arm */}
        <path
          d="M35 30 L80 30 L165 170 L120 170 Z"
          fill="url(#navyArm)"
        />

        {/* Bottom-Left Arm with Digha Bridge Silhouette & River */}
        <path
          d="M10 170 L55 170 L105 95 L65 95 Z"
          fill="url(#blueGlow)"
        />

        {/* Rising Sun over Ganga */}
        <circle cx="95" cy="115" r="24" fill="url(#sunGrad)" opacity="0.9" />

        {/* Cable Bridge Graphic (Digha Sonpur Ganga Bridge) */}
        <g stroke="#E0F2FE" strokeWidth="1.5" opacity="0.8">
          <line x1="20" y1="165" x2="35" y2="105" />
          <line x1="25" y1="165" x2="35" y2="105" />
          <line x1="30" y1="165" x2="35" y2="105" />
          <line x1="40" y1="165" x2="35" y2="105" />
          <line x1="45" y1="165" x2="35" y2="105" />
          <line x1="12" y1="166" x2="60" y2="166" strokeWidth="2.5" />
        </g>

        {/* Golghar Dome Silhouette */}
        <path
          d="M95 125 A16 16 0 0 1 127 125 L127 140 L95 140 Z"
          fill="#0B2545"
          opacity="0.95"
        />

        {/* Mahabodhi / Stupa Tower Silhouette */}
        <path
          d="M130 140 L135 90 L139 90 L144 140 Z"
          fill="#071930"
        />
        <circle cx="137" cy="85" r="2.5" fill="#F59E0B" />

        {/* River Wave Cut */}
        <path
          d="M40 160 C 60 145, 90 150, 115 135 C 130 125, 140 120, 155 130 L160 145 C 135 140, 110 160, 50 170 Z"
          fill="url(#riverGrad)"
          opacity="0.9"
        />

        {/* The Soaring Orange Growth Arrow */}
        <path
          d="M85 120 L130 50 L115 45 L175 25 L165 85 L148 70 L105 135 Z"
          fill="url(#arrowGrad)"
          filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.3))"
        />
      </svg>
    );
  }

  const isLight = variant === 'light-text';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Brand Icon Component */}
      <div className="shrink-0 transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 200 180"
          style={{ height: `${height}px`, width: 'auto' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arrowGradLg" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="60%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="navyArmLg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2545" />
              <stop offset="100%" stopColor="#021226" />
            </linearGradient>
            <linearGradient id="blueGlowLg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="riverGradLg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="sunGradLg" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Right Lower Arm */}
          <path d="M75 75 L160 165 L115 165 L45 90 Z" fill="url(#navyArmLg)" />

          {/* Left Upper Arm */}
          <path d="M40 25 L85 25 L105 60 L60 60 Z" fill="url(#navyArmLg)" />

          {/* Bridge & River Pod */}
          <path d="M12 165 L60 165 L105 95 L55 95 Z" fill="url(#blueGlowLg)" />

          {/* Golden Rising Sun */}
          <circle cx="95" cy="112" r="22" fill="url(#sunGradLg)" />

          {/* Digha Cable Stayed Bridge */}
          <g stroke="#E0F2FE" strokeWidth="1.6" opacity="0.9">
            <line x1="22" y1="162" x2="38" y2="102" />
            <line x1="28" y1="162" x2="38" y2="102" />
            <line x1="34" y1="162" x2="38" y2="102" />
            <line x1="44" y1="162" x2="38" y2="102" />
            <line x1="50" y1="162" x2="38" y2="102" />
            <line x1="14" y1="163" x2="65" y2="163" strokeWidth="3" />
          </g>

          {/* Patna Golghar Silhouette */}
          <path d="M96 122 A15 15 0 0 1 126 122 L126 138 L96 138 Z" fill="#0B2545" />

          {/* Ancient Stupa / Mahabodhi Temple Silhouette */}
          <path d="M130 138 L135 88 L140 88 L145 138 Z" fill="#071930" />
          <circle cx="137.5" cy="84" r="2.5" fill="#F59E0B" />

          {/* River Stream */}
          <path
            d="M38 156 C 58 140, 85 146, 110 132 C 126 122, 138 118, 152 128 L156 142 C 130 136, 106 156, 48 166 Z"
            fill="url(#riverGradLg)"
          />

          {/* Upward Dynamic Growth Arrow */}
          <path
            d="M82 118 L132 46 L116 40 L180 18 L170 82 L152 66 L104 136 Z"
            fill="url(#arrowGradLg)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black tracking-tight ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: `${Math.max(20, height * 0.42)}px`, lineHeight: 1.05 }}
          >
            Future<span className="text-blue-600">X</span>
          </span>
        </div>

        {/* Bihar separator bar */}
        <div className="flex items-center gap-1.5 my-0.5">
          <div className="h-[1.5px] w-4 bg-gradient-to-r from-transparent to-amber-500"></div>
          <span
            className="font-extrabold tracking-[0.22em] text-amber-600 uppercase"
            style={{ fontSize: `${Math.max(10, height * 0.2)}px`, lineHeight: 1 }}
          >
            BIHAR
          </span>
          <div className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-amber-500"></div>
        </div>

        {variant !== 'compact' && (
          <>
            <span
              className="font-bold text-slate-700 tracking-wider uppercase whitespace-nowrap"
              style={{ fontSize: `${Math.max(7.5, height * 0.135)}px`, lineHeight: 1.15 }}
            >
              Bihar’s Flagship AI, Startup & Innovation Summit
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="h-[1px] w-5 bg-slate-300"></div>
              <span
                className="font-black text-amber-600 tracking-widest"
                style={{ fontSize: `${Math.max(8, height * 0.17)}px`, lineHeight: 1 }}
              >
                2026
              </span>
              <div className="h-[1px] flex-1 max-w-[40px] bg-slate-300"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
