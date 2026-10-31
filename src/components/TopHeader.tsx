import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopHeaderProps {
  onOpenResume: () => void;
  onScrollToContact: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ 
  onOpenResume, 
  onScrollToContact 
}) => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-40 px-6 sm:px-10 py-3.5 flex items-center justify-between no-print transition-all">
      {/* Left Breadcrumb identity */}
      <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
        <a 
          href="#hero" 
          className="font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
          <span>{PERSONAL_INFO.handle}</span>
        </a>
        <span className="text-slate-300">/</span>
        <span className="text-slate-500 font-medium">{PERSONAL_INFO.candidatePath}</span>
      </div>

      {/* Right Actions & Status */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Availability indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-600 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-800">{PERSONAL_INFO.statusText}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenResume}
            hidden
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold shadow-sm shadow-blue-500/25 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh CV</span>
          </motion.button>

          <button
            onClick={onScrollToContact}
            className="text-xs font-mono font-medium text-slate-600 hover:text-blue-600 px-2 py-1 transition-colors hover:underline"
          >
            Kontak
          </button>
        </div>
      </div>
    </header>
  );
};
