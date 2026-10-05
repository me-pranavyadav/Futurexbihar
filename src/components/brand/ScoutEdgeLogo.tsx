import React from 'react';

interface ScoutEdgeLogoProps {
  className?: string;
  height?: number;
  theme?: 'dark' | 'light';
  layout?: 'stacked' | 'horizontal' | 'emblem-only';
  showLinkBadge?: boolean;
}

export const SCOUTEDGE_BRAND = {
  name: 'ScoutEdge',
  website: 'https://scoutedge.in/',
  imageSource: 'https://ibb.co/v4tbdq8c',
  imageUrl: 'https://i.ibb.co/fdcbNF7X/photo-6206124535115879082-x.jpg',
  localUrl: '/scoutedge-logo.jpg',
};

export const ScoutEdgeLogo: React.FC<ScoutEdgeLogoProps> = ({
  className = '',
  height = 48,
  theme = 'light',
  layout = 'horizontal',
  showLinkBadge = false,
}) => {
  const isLight = theme === 'light';

  // Exact Brand Logo from user provided link https://ibb.co/v4tbdq8c
  const logoImage = (
    <div
      className="relative shrink-0 rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-white flex items-center justify-center p-0.5 group"
      style={{ height: `${height}px`, width: `${height}px` }}
    >
      <img
        src={SCOUTEDGE_BRAND.localUrl}
        onError={(e) => {
          // Fallback to direct ImgBB CDN URL if local asset isn't resolved
          (e.currentTarget as HTMLImageElement).src = SCOUTEDGE_BRAND.imageUrl;
        }}
        alt="ScoutEdge Official Logo"
        className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );

  if (layout === 'emblem-only') {
    return (
      <div className={`inline-flex items-center ${className} select-none`}>
        {logoImage}
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className} select-none`}>
        {logoImage}
        <div className="flex flex-col items-center text-center">
          <span
            className={`font-black tracking-tight leading-none ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
            style={{ fontSize: `${Math.max(16, height * 0.44)}px` }}
          >
            ScoutEdge
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 mt-1">
            Sports Intelligence
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout
  return (
    <div
      className={`inline-flex items-center gap-3 ${className} select-none`}
      style={{ minHeight: `${height}px` }}
    >
      {logoImage}

      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-black tracking-tight leading-none ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
          style={{ fontSize: `${Math.max(17, height * 0.46)}px` }}
        >
          Scout<span className="text-slate-900">Edge</span>
        </span>
        <span
          className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${
            isLight ? 'text-slate-500' : 'text-emerald-400'
          }`}
        >
          Sports Intelligence
        </span>
      </div>

      {showLinkBadge && (
        <a
          href={SCOUTEDGE_BRAND.imageSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-emerald-600 underline font-mono ml-1 hover:text-emerald-700"
          title="View Original Logo on ImgBB"
        >
          [source]
        </a>
      )}
    </div>
  );
};
