import React from 'react';

export default function EvercrestLogo({ variant = 'light', size = 'normal', className = '' }) {
  const isDark = variant === 'dark';
  const mainNavyColor = isDark ? '#FFFFFF' : '#0F2942';
  const steelBlueColor = '#3B6991';
  const rooferColor = isDark ? '#FFFFFF' : '#0F2942';

  const isSmall = size === 'small';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Recreated Vector SVG Logo Emblem matching Navy Blue uploaded graphic */}
      <svg 
          className={`${isSmall ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'} shrink-0 overflow-visible`} 
        viewBox="0 0 200 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun in background */}
        <circle cx="120" cy="55" r="28" fill={isDark ? "#1E344A" : "#DDE5ED"} />

        {/* Navy & Steel Blue Mountain Peaks */}
        <path d="M90 75L135 25L180 75H90Z" fill={steelBlueColor} />
        <path d="M125 75L160 38L195 75H125Z" fill="#0A1E30" />

        {/* Roof Peak Structure */}
        <path d="M40 90L115 35L190 90" stroke={mainNavyColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 90L115 38L185 90" stroke={steelBlueColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Roof Tiles texture on right slope */}
        <path d="M125 50L170 82" stroke={isDark ? "#8AA0B8" : "#5A708A"} strokeWidth="3" strokeDasharray="6 4" />
        <path d="M135 43L180 75" stroke={isDark ? "#8AA0B8" : "#5A708A"} strokeWidth="3" strokeDasharray="6 4" />

        {/* 4-Pane Window inside gable */}
        <rect x="105" y="65" width="20" height="20" rx="2" fill={mainNavyColor} />
        <line x1="115" y1="65" x2="115" y2="85" stroke={isDark ? "#0A1E30" : "#FFFFFF"} strokeWidth="2" />
        <line x1="105" y1="75" x2="125" y2="75" stroke={isDark ? "#0A1E30" : "#FFFFFF"} strokeWidth="2" />

        {/* Silhouetted Roofer Working on Left Slope */}
        <circle cx="78" cy="38" r="6" fill={rooferColor} />
        <path d="M72 36C72 33 84 33 84 36Z" fill={steelBlueColor} />
        <path d="M68 55L78 42L90 48L78 62Z" fill={rooferColor} />
        <path d="M86 46L98 52L94 56" stroke={rooferColor} strokeWidth="3" strokeLinecap="round" />
        <rect x="94" y="52" width="6" height="4" fill={steelBlueColor} />
        <path d="M68 55L58 68L70 72" stroke={rooferColor} strokeWidth="4" strokeLinecap="round" />

        {/* Ground / Roof Base Line */}
        <line x1="20" y1="95" x2="195" y2="95" stroke={steelBlueColor} strokeWidth="4" />
      </svg>

      {/* Brand Typography in Deep Navy & Steel Blue */}
      <div className="flex flex-col">
        <span className={`${isSmall ? 'text-[1.15rem] sm:text-xl' : 'text-xl sm:text-2xl'} font-extrabold tracking-[-0.03em] uppercase font-heading leading-none`} style={{ color: mainNavyColor }}>
          EVERCREST
        </span>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-px w-5 bg-[#3B6991]"></div>
          <span className={`${isSmall ? 'text-[9px] sm:text-xs' : 'text-[10px] sm:text-xs'} font-black tracking-widest uppercase font-heading`} style={{ color: isDark ? '#A0C4E4' : '#0F2942' }}>
            ROOFING
          </span>
          <div className="h-px w-5 bg-[#3B6991]"></div>
        </div>
      </div>
    </div>
  );
}
