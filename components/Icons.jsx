// Ícones esquemáticos (stroke 2, estilo "engenharia"). Sem emojis.
const P = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Icons = {
  panel: (p) => (
    <svg {...P} {...p}><rect x="3" y="4" width="18" height="13" rx="1" /><path d="M3 9h18M9 4v13M15 4v13M8 21h8M12 17v4" /></svg>
  ),
  factory: (p) => (
    <svg {...P} {...p}><path d="M3 21V9l6 4V9l6 4V6l6 4v11H3z" /><path d="M7 17h2M12 17h2M17 17h2" /></svg>
  ),
  battery: (p) => (
    <svg {...P} {...p}><rect x="2" y="7" width="18" height="10" rx="2" /><path d="M22 10v4M11 9l-2 3h4l-2 3" /></svg>
  ),
  ev: (p) => (
    <svg {...P} {...p}><path d="M5 20V6a2 2 0 012-2h6a2 2 0 012 2v14M3 20h14M15 11h2a2 2 0 012 2v3a1.5 1.5 0 003 0V9l-2-2" /><path d="M8 7h4v4H8z" /></svg>
  ),
  gauge: (p) => (
    <svg {...P} {...p}><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M12 13l3.5-3.5" /><circle cx="12" cy="13" r="1.6" /></svg>
  ),
  climate: (p) => (
    <svg {...P} {...p}><path d="M12 3v18M12 8a4 4 0 010 8" /><path d="M4 12h3M17 12h3M6 6l2 2M16 16l2 2" /></svg>
  ),
  pump: (p) => (
    <svg {...P} {...p}><path d="M12 22s7-5.5 7-12a7 7 0 10-14 0c0 6.5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  automation: (p) => (
    <svg {...P} {...p}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
  ),
  home: (p) => (
    <svg {...P} {...p}><path d="M4 11l8-7 8 7M6 10v9h12v-9" /></svg>
  ),
  briefcase: (p) => (
    <svg {...P} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></svg>
  ),
  tractor: (p) => (
    <svg {...P} {...p}><circle cx="7" cy="17" r="3.5" /><circle cx="18" cy="18" r="2.2" /><path d="M10.5 17H15M20.2 18l1.3-.4M7 13.5V8h6l2 5.5M13 8V5h-3" /></svg>
  ),
  phone: (p) => (
    <svg {...P} {...p}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" /></svg>
  ),
  mail: (p) => (
    <svg {...P} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>
  ),
  pin: (p) => (
    <svg {...P} {...p}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  whatsapp: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.4-3c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z" />
    </svg>
  ),
  check: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6L9 17l-5-5" /></svg>
  ),
  plus: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14" /></svg>
  ),
  arrow: () => <span className="arrow" aria-hidden="true">→</span>,
};
