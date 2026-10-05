import React from 'react';

interface EduiQoLogoProps {
  className?: string;
  height?: number;
  theme?: 'dark' | 'light';
  layout?: 'horizontal' | 'stacked' | 'emblem-only';
  showLinkBadge?: boolean;
}

export const EDUIQO_BRAND = {
  name: 'EduiQo Technologies',
  website: 'https://eduiqo.com/',
  imageSource: 'https://ibb.co/4Zb0WkNV',
  imageUrl: 'https://i.ibb.co/HDc97ZgH/photo-6206124535115879084-y.jpg',
  localUrl: '/eduiqo-logo.jpg',
};

export const EduiQoLogo: React.FC<EduiQoLogoProps> = ({
  className = '',
  height = 48,
  theme = 'light',
  layout = 'horizontal',
  showLinkBadge = false,
}) => {
  const isLightBackground = theme === 'light';

  // Exact Brand Logo from user provided link https://ibb.co/4Zb0WkNV
  const logoImage = (
    <div
      className="relative shrink-0 rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-white flex items-center justify-center p-0.5 group"
      style={{ height: `${height}px`, width: `${height}px` }}
    >
      <img
        src={EDUIQO_BRAND.localUrl}
        onError={(e) => {
          // Fallback to direct ImgBB CDN URL if local asset isn't resolved
          (e.currentTarget as HTMLImageElement).src = EDUIQO_BRAND.imageUrl;
        }}
        alt="EduiQo Technologies Official Logo"
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
              isLightBackground ? 'text-slate-900' : 'text-white'
            }`}
            style={{ fontSize: `${Math.max(16, height * 0.44)}px` }}
          >
            Edui<span className="text-blue-600">Q</span>o
          </span>
          <span
            className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1"
          >
            Technologies
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
            isLightBackground ? 'text-slate-900' : 'text-white'
          }`}
          style={{ fontSize: `${Math.max(17, height * 0.46)}px` }}
        >
          Edui<span className="text-blue-600">Q</span>o
        </span>
        <span
          className={`font-bold tracking-wider uppercase mt-1 ${
            isLightBackground ? 'text-slate-500' : 'text-slate-400'
          }`}
          style={{ fontSize: `${Math.max(9, height * 0.22)}px` }}
        >
          Technologies
        </span>
      </div>

      {showLinkBadge && (
        <a
          href={EDUIQO_BRAND.imageSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-blue-600 underline font-mono ml-1 hover:text-blue-700"
          title="View Original Logo on ImgBB"
        >
          [source]
        </a>
      )}
    </div>
  );
};
