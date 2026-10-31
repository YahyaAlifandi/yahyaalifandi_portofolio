import React from 'react';
import { X, CheckCircle2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CandidateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CandidateCardModal: React.FC<CandidateCardModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-6 sm:p-7"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors opacity-30 hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header stamp */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs font-mono mr-5">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {PERSONAL_INFO.idStamp}
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>TERSEDIA</span>
            </span>
          </div>

          {/* Candidate Portrait & Core Details */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-sm">
              <img
                src="images/image_profile1.jpg"
                alt="Yahya Alifandi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 leading-tight mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono font-bold text-blue-600 mb-1">
                Web Developer Intern
              </p>
              <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Lampung, Indonesia</span>
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs font-mono">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 text-[10px] block font-bold">INSTITUSI</span>
              <span className="font-bold text-slate-900 text-sm">ITERA (Sumatera)</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 text-[10px] block font-bold">STATUS KULIAH</span>
              <span className="font-bold text-blue-600 text-sm">Mahasiswa Semester 1</span>
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="space-y-2.5 mb-6 text-xs font-editorial-body text-slate-600 bg-slate-50/60 p-4 rounded-xl border border-slate-200/70">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Mahir Laravel, React.js, Next.js, dan Tailwind CSS.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Menguasai perancangan skema database relasional (MySQL) &amp; kontainer Docker.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Siap magang di Bandar Lampung secara remote ataupun hybrid.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
            hidden
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-xs font-display font-bold shadow-sm shadow-blue-500/25 transition-all"
            >
              Lihat Lengkap Resume (CV)
            </motion.button>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL_INFO.email}`}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-300 hover:text-blue-600 px-4 py-2.5 rounded-xl text-xs font-display font-bold shadow-sm transition-all"
            >
              Kirim Email
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
