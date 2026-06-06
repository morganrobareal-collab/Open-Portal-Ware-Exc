// Windows XP style pixel icons as inline SVG components

export function IconShield({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <path d="M8 1 L14 3 L14 9 C14 12 11 14.5 8 15.5 C5 14.5 2 12 2 9 L2 3 Z" fill="#1a7fcc" stroke="#0a4f8a" strokeWidth="0.5"/>
      <path d="M8 2.5 L13 4 L13 9 C13 11.5 10.5 13.5 8 14.5 C5.5 13.5 3 11.5 3 9 L3 4 Z" fill="#4ab0ff"/>
      <path d="M8 3.5 L12 5 L12 9 C12 11 10 12.5 8 13.5 C6 12.5 4 11 4 9 L4 5 Z" fill="#7dcfff"/>
      <polyline points="6,8 7.5,10 10.5,6.5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBrowser({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="2" width="14" height="12" rx="1" fill="#e8f4ff" stroke="#336699" strokeWidth="1"/>
      <rect x="1" y="2" width="14" height="3" rx="1" fill="#4488cc"/>
      <rect x="2" y="6" width="3" height="1" fill="#99bbdd"/>
      <rect x="2" y="8" width="5" height="1" fill="#99bbdd"/>
      <rect x="2" y="10" width="4" height="1" fill="#99bbdd"/>
      <circle cx="12" cy="9" r="3" fill="#4488cc" stroke="#1a5599" strokeWidth="0.5"/>
      <ellipse cx="12" cy="9" rx="1.5" ry="3" fill="none" stroke="#88ccff" strokeWidth="0.5"/>
      <line x1="9" y1="9" x2="15" y2="9" stroke="#88ccff" strokeWidth="0.5"/>
      <line x1="12" y1="6" x2="12" y2="12" stroke="#88ccff" strokeWidth="0.5"/>
    </svg>
  );
}

export function IconArchive({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="2" y="1" width="9" height="11" rx="0.5" fill="#f5e87a" stroke="#c8a800" strokeWidth="0.8"/>
      <polygon points="11,1 14,4 11,4" fill="#e8d000" stroke="#c8a800" strokeWidth="0.5"/>
      <rect x="11" y="4" width="3" height="8" rx="0.5" fill="#f5e87a" stroke="#c8a800" strokeWidth="0.8"/>
      <rect x="4" y="3" width="6" height="1" fill="#c8a800" opacity="0.4"/>
      <rect x="4" y="5" width="6" height="1" fill="#c8a800" opacity="0.4"/>
      <rect x="4" y="7" width="6" height="1" fill="#c8a800" opacity="0.4"/>
      <rect x="6" y="4" width="2" height="5" fill="#e8d000" stroke="#c8a800" strokeWidth="0.5"/>
      <text x="7" y="9" fontSize="4" fill="#664400" textAnchor="middle" fontFamily="Arial" fontWeight="bold">Z</text>
      <rect x="2" y="12" width="12" height="3" rx="0.5" fill="#5588cc" stroke="#2244aa" strokeWidth="0.5"/>
      <text x="8" y="14.5" fontSize="4" fill="#fff" textAnchor="middle" fontFamily="Arial" fontWeight="bold">ZIP</text>
    </svg>
  );
}

export function IconMedia({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="8" cy="8" r="7" fill="#333" stroke="#111" strokeWidth="0.5"/>
      <circle cx="8" cy="8" r="5" fill="#4a4a4a"/>
      <circle cx="8" cy="8" r="3" fill="#999"/>
      <circle cx="8" cy="8" r="1.5" fill="#ccc"/>
      <circle cx="8" cy="8" r="0.8" fill="#333"/>
      <ellipse cx="5" cy="4" rx="1" ry="0.5" fill="#cc4444" opacity="0.8" transform="rotate(-30 5 4)"/>
      <ellipse cx="11" cy="4" rx="1" ry="0.5" fill="#4488cc" opacity="0.8" transform="rotate(30 11 4)"/>
      <polygon points="5.5,6.5 5.5,9.5 9,8" fill="#ffcc00"/>
    </svg>
  );
}

export function IconTools({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="2" y="1" width="12" height="9" rx="1" fill="#c8d8e8" stroke="#6688aa" strokeWidth="0.8"/>
      <rect x="3" y="2" width="10" height="7" fill="#e8f0f8"/>
      <rect x="4" y="3" width="4" height="1" fill="#3366cc"/>
      <rect x="4" y="5" width="6" height="1" fill="#3366cc"/>
      <rect x="4" y="7" width="3" height="1" fill="#3366cc"/>
      <rect x="3" y="10" width="10" height="1" fill="#aabbcc"/>
      <rect x="1" y="11" width="14" height="4" rx="1" fill="#8899bb" stroke="#4466aa" strokeWidth="0.5"/>
      <rect x="6" y="11" width="4" height="1" fill="#6677aa"/>
      <circle cx="3" cy="13" r="1" fill="#cc4444"/>
      <circle cx="13" cy="13" r="1" fill="#44aa44"/>
    </svg>
  );
}

export function IconOffice({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="2" y="1" width="9" height="12" rx="0.5" fill="#ffffff" stroke="#aaaaaa" strokeWidth="0.8"/>
      <polygon points="11,1 14,4 11,4" fill="#dddddd" stroke="#aaaaaa" strokeWidth="0.5"/>
      <rect x="11" y="4" width="3" height="9" rx="0.5" fill="#ffffff" stroke="#aaaaaa" strokeWidth="0.8"/>
      <rect x="3" y="3" width="7" height="1" fill="#2244cc"/>
      <rect x="3" y="5" width="7" height="0.8" fill="#555"/>
      <rect x="3" y="6.5" width="6" height="0.8" fill="#555"/>
      <rect x="3" y="8" width="7" height="0.8" fill="#555"/>
      <rect x="3" y="9.5" width="5" height="0.8" fill="#555"/>
      <rect x="3" y="11" width="6" height="0.8" fill="#555"/>
    </svg>
  );
}

export function IconImage({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="2" width="14" height="12" rx="1" fill="#fff8ee" stroke="#cc9944" strokeWidth="0.8"/>
      <rect x="2" y="3" width="12" height="10" fill="#fff"/>
      <circle cx="5" cy="6" r="1.5" fill="#ffcc44"/>
      <polygon points="2,13 6,8 9,11 11,9 14,13" fill="#44aa44"/>
      <polygon points="9,11 11,9 14,13 9,13" fill="#228822"/>
    </svg>
  );
}

export function IconNetwork({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="5" y="1" width="6" height="4" rx="0.5" fill="#c8d8f0" stroke="#336699" strokeWidth="0.8"/>
      <rect x="1" y="7" width="5" height="3" rx="0.5" fill="#c8d8f0" stroke="#336699" strokeWidth="0.8"/>
      <rect x="10" y="7" width="5" height="3" rx="0.5" fill="#c8d8f0" stroke="#336699" strokeWidth="0.8"/>
      <rect x="1" y="12" width="5" height="3" rx="0.5" fill="#c8d8f0" stroke="#336699" strokeWidth="0.8"/>
      <rect x="10" y="12" width="5" height="3" rx="0.5" fill="#c8d8f0" stroke="#336699" strokeWidth="0.8"/>
      <line x1="8" y1="5" x2="8" y2="7" stroke="#336699" strokeWidth="0.8"/>
      <line x1="3.5" y1="7" x2="8" y2="6" stroke="#336699" strokeWidth="0.8"/>
      <line x1="12.5" y1="7" x2="8" y2="6" stroke="#336699" strokeWidth="0.8"/>
      <line x1="3.5" y1="10" x2="3.5" y2="12" stroke="#336699" strokeWidth="0.8"/>
      <line x1="12.5" y1="10" x2="12.5" y2="12" stroke="#336699" strokeWidth="0.8"/>
    </svg>
  );
}

export function IconFolder({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <path d="M1 5 L1 14 L15 14 L15 5 Z" fill="#f0c040" stroke="#c8a000" strokeWidth="0.8"/>
      <path d="M1 5 L6 5 L7 3 L1 3 Z" fill="#f8d860" stroke="#c8a000" strokeWidth="0.8"/>
      <path d="M1 5 L15 5 L15 6 L1 6 Z" fill="#fce880"/>
      <path d="M1 6 L1 14 L15 14 L15 6 Z" fill="#f5cc44"/>
      <rect x="2" y="7" width="12" height="6" fill="#f8d860" opacity="0.4"/>
    </svg>
  );
}

export function IconHome({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <polygon points="8,1 15,8 1,8" fill="#cc4444" stroke="#882222" strokeWidth="0.5"/>
      <polygon points="8,2 14,8 2,8" fill="#ee6666"/>
      <rect x="3" y="8" width="10" height="7" fill="#c8aa77" stroke="#886644" strokeWidth="0.5"/>
      <rect x="6" y="10" width="4" height="5" fill="#7aafcc" stroke="#336699" strokeWidth="0.5"/>
      <rect x="3" y="8" width="4" height="3" fill="#c8aa77"/>
      <rect x="4" y="8.5" width="2.5" height="2" fill="#88bbdd" stroke="#336699" strokeWidth="0.3"/>
    </svg>
  );
}

export function IconInfo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="8" cy="8" r="7" fill="#3a7fd4" stroke="#1a5599" strokeWidth="0.8"/>
      <circle cx="8" cy="8" r="6" fill="#5599ee"/>
      <circle cx="8" cy="4.5" r="1" fill="#fff"/>
      <rect x="7" y="6.5" width="2" height="5" rx="0.5" fill="#fff"/>
    </svg>
  );
}

export function IconAdd({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="2" width="9" height="11" rx="0.5" fill="#ffffff" stroke="#aaaaaa" strokeWidth="0.8"/>
      <polygon points="10,2 13,5 10,5" fill="#dddddd" stroke="#aaaaaa" strokeWidth="0.5"/>
      <rect x="10" y="5" width="3" height="8" rx="0.5" fill="#ffffff" stroke="#aaaaaa" strokeWidth="0.8"/>
      <circle cx="12.5" cy="12.5" r="3" fill="#44aa44" stroke="#228800" strokeWidth="0.5"/>
      <rect x="11.5" y="12" width="2" height="1" fill="#fff"/>
      <rect x="12" y="11.5" width="1" height="2" fill="#fff"/>
    </svg>
  );
}

export function IconForum({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="1" width="10" height="7" rx="1" fill="#d8eeff" stroke="#336699" strokeWidth="0.8"/>
      <polygon points="2,8 2,10 5,8" fill="#336699"/>
      <rect x="2" y="2.5" width="8" height="1" fill="#336699" opacity="0.6"/>
      <rect x="2" y="4.5" width="6" height="1" fill="#336699" opacity="0.6"/>
      <rect x="5" y="8" width="10" height="7" rx="1" fill="#ffe8d8" stroke="#996633" strokeWidth="0.8"/>
      <polygon points="14,15 14,13 11,15" fill="#996633"/>
      <rect x="6" y="9.5" width="8" height="1" fill="#996633" opacity="0.6"/>
      <rect x="6" y="11.5" width="6" height="1" fill="#996633" opacity="0.6"/>
    </svg>
  );
}

export function IconSearch({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="6.5" cy="6.5" r="5" fill="#d8e8ff" stroke="#336699" strokeWidth="1.2"/>
      <circle cx="6.5" cy="6.5" r="3.5" fill="#eef4ff"/>
      <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="#336699" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconStar({ size = 14, filled = true }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <polygon
        points="8,1 10,6 15,6 11,9.5 12.5,14.5 8,11.5 3.5,14.5 5,9.5 1,6 6,6"
        fill={filled ? "#ffaa00" : "none"}
        stroke="#cc8800"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function IconDownload({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="11" width="14" height="4" rx="0.5" fill="#3366cc" stroke="#1a3d99" strokeWidth="0.5"/>
      <rect x="2" y="12" width="6" height="2" rx="0.5" fill="#88aaff"/>
      <circle cx="12" cy="13" r="1" fill="#ffcc00"/>
      <rect x="7" y="1" width="2" height="8" fill="#33aa33" stroke="#228822" strokeWidth="0.3"/>
      <polygon points="4,7 8,12 12,7" fill="#33aa33" stroke="#228822" strokeWidth="0.3"/>
    </svg>
  );
}

export function IconStats({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="1" width="14" height="14" rx="1" fill="#e8f0f8" stroke="#336699" strokeWidth="0.8"/>
      <rect x="3" y="8" width="2" height="6" fill="#3366cc"/>
      <rect x="7" y="5" width="2" height="9" fill="#5588ee"/>
      <rect x="11" y="3" width="2" height="11" fill="#4477dd"/>
      <line x1="1" y1="14" x2="15" y2="14" stroke="#336699" strokeWidth="0.5"/>
    </svg>
  );
}

export function IconWarning({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <polygon points="8,1 15,14 1,14" fill="#ffcc00" stroke="#cc8800" strokeWidth="0.8"/>
      <polygon points="8,2.5 14,13 2,13" fill="#ffee44"/>
      <rect x="7.2" y="5.5" width="1.6" height="4.5" rx="0.3" fill="#663300"/>
      <circle cx="8" cy="11.5" r="0.9" fill="#663300"/>
    </svg>
  );
}

export function IconTip({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="8" cy="6" r="5" fill="#ffee44" stroke="#ccaa00" strokeWidth="0.8"/>
      <path d="M6,10 C6,12 10,12 10,10" fill="#ffee44" stroke="#ccaa00" strokeWidth="0.8"/>
      <rect x="6.5" y="12" width="3" height="1.5" rx="0.3" fill="#888"/>
      <rect x="7" y="13.5" width="2" height="1" rx="0.3" fill="#666"/>
      <circle cx="8" cy="5.5" r="1" fill="#ffd700"/>
      <line x1="8" y1="3" x2="8" y2="3.5" stroke="#ccaa00" strokeWidth="0.8"/>
      <line x1="5.5" y1="3.5" x2="6" y2="4" stroke="#ccaa00" strokeWidth="0.8"/>
      <line x1="10.5" y1="3.5" x2="10" y2="4" stroke="#ccaa00" strokeWidth="0.8"/>
    </svg>
  );
}

export function IconComputer({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="1" width="14" height="10" rx="1" fill="#c8d8e8" stroke="#6688aa" strokeWidth="0.8"/>
      <rect x="2" y="2" width="12" height="8" fill="#001166"/>
      <rect x="3" y="3" width="10" height="6" fill="#0033aa"/>
      <rect x="6" y="11" width="4" height="2" fill="#8899aa"/>
      <rect x="4" y="13" width="8" height="1.5" rx="0.3" fill="#99aacc" stroke="#6688aa" strokeWidth="0.3"/>
      <rect x="5" y="4" width="2" height="1" fill="#33aaff" opacity="0.8"/>
      <rect x="8" y="4" width="4" height="1" fill="#33aaff" opacity="0.5"/>
      <rect x="5" y="6" width="6" height="1" fill="#33aaff" opacity="0.3"/>
    </svg>
  );
}

export function IconLegend({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="2" width="4" height="3" rx="0.3" fill="#44aa44" stroke="#228822" strokeWidth="0.5"/>
      <rect x="6" y="3" width="9" height="1.5" rx="0.3" fill="#aaa"/>
      <rect x="1" y="7" width="4" height="3" rx="0.3" fill="#ccaa00" stroke="#996600" strokeWidth="0.5"/>
      <rect x="6" y="8" width="9" height="1.5" rx="0.3" fill="#aaa"/>
      <rect x="1" y="12" width="4" height="3" rx="0.3" fill="#cc2222" stroke="#991111" strokeWidth="0.5"/>
      <rect x="6" y="13" width="9" height="1.5" rx="0.3" fill="#aaa"/>
    </svg>
  );
}

export function IconAnnounce({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <polygon points="2,5 10,2 10,13 2,10" fill="#f5cc44" stroke="#c8a000" strokeWidth="0.7"/>
      <rect x="10" y="4" width="4" height="7" rx="0.5" fill="#ddaa00" stroke="#c8a000" strokeWidth="0.5"/>
      <rect x="4" y="10" width="3" height="4" rx="0.3" fill="#c8a000"/>
      <circle cx="13" cy="3" r="1.5" fill="#cc4444" stroke="#882222" strokeWidth="0.5"/>
    </svg>
  );
}

export function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="8" cy="8" r="7" fill="#44aa44" stroke="#228822" strokeWidth="0.8"/>
      <circle cx="8" cy="8" r="6" fill="#66cc66"/>
      <polyline points="4,8 6.5,11 12,5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconClose({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="1" width="14" height="14" rx="2" fill="#cc4444" stroke="#882222" strokeWidth="0.5"/>
      <line x1="4" y1="4" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="4" x2="4" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
