import React, { useState, useEffect } from 'react';
import { 
  Home, 
  FolderKanban, 
  Layers, 
  Award, 
  GraduationCap, 
  Mail, 
  Code2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationRailProps {
  onOpenResume: () => void;
  onOpenCandidateCard: () => void;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({ 
  onOpenCandidateCard 
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'hero', label: 'Beranda', icon: Home },
    { id: 'projects', label: 'Proyek', icon: FolderKanban },
    { id: 'tech-stack', label: 'Keahlian', icon: Layers },
    { id: 'track-record', label: 'Rekam Jejak', icon: Award },
    { id: 'education', label: 'Edukasi', icon: GraduationCap },
    { id: 'contact', label: 'Kontak', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop / Tablet Left Vertical Navigation Dock (Hidden on mobile) */}
      <aside className="hidden sm:flex fixed left-0 top-0 bottom-0 w-16 bg-white/95 backdrop-blur-md border-r border-slate-200/90 z-50 flex-col justify-between items-center py-5 select-none no-print shadow-[1px_0_4px_rgba(0,0,0,0.02)]">
        {/* Top Brand Logo */}
        <div className="flex flex-col items-center gap-6">
          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('hero')}
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center rounded-xl shadow-sm shadow-blue-500/25 transition-all"
            title="Yahya Alifandi Portfolio"
          >
            <Code2 className="w-5 h-5 text-white stroke-[2.5]" />
          </motion.button> */}

          {/* Navigation Item Icons */}
          <nav className="flex flex-col items-center gap-2.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => scrollTo(item.id)}
                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4 stroke-[2]" />
                    {isActive && (
                      <motion.span
                        layoutId="activeRailIndicator"
                        className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-600 rounded-r-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>

                  {/* Tooltip on hover */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: -6, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -6, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-mono py-1.5 px-3 rounded-lg whitespace-nowrap z-50 pointer-events-none shadow-lg border border-slate-700/80"
                      >
                        <span className="font-medium">{item.label}</span>
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile Avatar */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
          onClick={onOpenCandidateCard}
          title="Lihat Profil Kandidat"
        >
          <div className="w-10 h-10 rounded-xl border-2 border-slate-200 overflow-hidden p-0.5 bg-white relative transition-all group-hover:border-blue-500 group-hover:shadow-sm">
            <img 
              src="/images/image_profile1.jpg" 
              alt="Yahya Alifandi Avatar"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Active status pulse */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Hover label */}
          <div className="absolute left-14 bottom-1 bg-slate-900 text-white text-xs font-mono py-1.5 px-3 rounded-lg whitespace-nowrap hidden group-hover:block z-50 shadow-lg border border-slate-700/80">
            YA // Intern Candidate
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
          </div>
        </motion.div>
      </aside>

      {/* Mobile Floating Bottom Navigation Bar (Shown on small screens) */}
      <nav className="sm:hidden fixed bottom-3 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2 z-50 flex items-center justify-around shadow-lg shadow-slate-900/10 no-print">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
        <button
          onClick={onOpenCandidateCard}
          className="w-8 h-8 rounded-xl border border-slate-200 overflow-hidden"
          title="Profil"
        >
          <img 
            src="/images/image_profile1.jpg" 
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </button>
      </nav>
    </>
  );
};
