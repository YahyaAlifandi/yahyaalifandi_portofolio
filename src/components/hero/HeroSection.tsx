import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HERO_ANIMATION, BREATHING_ANIMATION } from './hero-animations';
import { SelectionHighlight } from './SelectionHighlight';
import { ProfileCard } from './ProfileCard';

interface HeroSectionProps {
  onOpenResume: () => void;
  onScrollToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onScrollToProjects,
}) => {
  const reduceMotion = useReducedMotion();
  const nameWords = PERSONAL_INFO.name.split(' ');

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="pt-8 sm:pt-12 pb-14 sm:pb-16 border-b border-slate-200/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ============ Left Column ============ */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={HERO_ANIMATION.entrance.badge}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 text-xs font-mono font-semibold tracking-wider mb-3.5 uppercase"
            role="status"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            <span>{PERSONAL_INFO.roleBadge}</span>
          </motion.div>

          {/* Headline — animated word-by-word with subtle breathing */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={HERO_ANIMATION.entrance.headline}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight mb-3 leading-tight flex flex-wrap gap-x-3.5 sm:gap-x-4"
          >
            {nameWords.map((word, index) => (
              <motion.span
                key={word}
                animate={reduceMotion ? undefined : BREATHING_ANIMATION.animate}
                transition={BREATHING_ANIMATION.transition(index)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.06,
                        color: '#2563eb',
                      }
                }
                className="inline-block origin-center transition-colors duration-200"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline — specialization with progressive selection */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={HERO_ANIMATION.entrance.sub}
            className="text-sm sm:text-base font-mono font-semibold mb-4 tracking-normal flex items-center flex-wrap gap-2 text-slate-600"
          >
            <SelectionHighlight text={PERSONAL_INFO.specialization} />

            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-700">
              {PERSONAL_INFO.subSpecialization}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={HERO_ANIMATION.entrance.desc}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-7 font-editorial-body"
          >
            Membangun aplikasi web end-to-end yang fungsional, terstruktur, dan
            teroptimasi. Terbiasa menangani arsitektur frontend modern (React,
            Next.js, Tailwind CSS), integrasi backend (Laravel, Express.js), serta
            perancangan skema dan integritas data (MySQL).
          </motion.p>

          {/* CTAs + Social */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={HERO_ANIMATION.entrance.cta}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 text-sm font-display"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onScrollToProjects}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer"
              aria-label="Lihat Proyek Unggulan"
            >
              <span>Lihat Proyek Unggulan</span>
              <ArrowDown
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onOpenResume}
              className="group flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-400 hover:text-blue-600 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Unduh CV dalam format PDF"
            >
              <FileText
                className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                aria-hidden="true"
              />
              <span>Unduh CV (PDF)</span>
            </motion.button>
          </motion.div>
        </div>

        {/* ============ Right Column ============ */}
        <ProfileCard />
      </div>
    </section>
  );
};

export default HeroSection;
