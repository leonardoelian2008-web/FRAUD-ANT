import { useState } from 'react';

interface LinkItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  description: string;
  links: LinkItem[];
}

interface CardNavProps {
  logo: string;
  logoAlt: string;
  items: NavItem[];
  cta: { label: string; href: string };
  cardEffect?: string;
  openOn?: string;
  surface?: string;
  stagger?: number;
  bounce?: number;
  menuLabel?: boolean | string;
  speed?: number;
  cardHeight?: number;
  maxWidth?: number;
  intro?: boolean;
}

export default function CardNav({ logo, logoAlt, items, cta }: CardNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 pb-2 bg-slate-950/40 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 text-white shadow-2xl transition-all duration-300">
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition">
          <span className="text-base">☰</span>
          <span>Menu</span>
        </button>

        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt={logoAlt} className="w-8 h-8 object-contain" />
          <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            ChatTrap
          </span>
        </div>

        <a 
          href={cta.href} 
          className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-500/25">
          {cta.label}
        </a>
      </nav>

      {isOpen && (
        <div className="absolute top-20 left-6 right-6 max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn text-slate-100 z-50">
          {items.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3 hover:border-indigo-500/50 transition">
              <h4 className="font-bold text-white text-base">{item.label}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              <ul className="space-y-2 pt-2 border-t border-slate-700/60">
                {item.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition flex items-center justify-between">
                      <span>{link.label}</span>
                      <span>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}