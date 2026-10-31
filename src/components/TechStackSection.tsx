import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SKILL_CATEGORIES, SKILLS_SUMMARY } from '../data/portfolioData';
import { TechSkillItem } from '../types/portfolio';

// Brand icon mapping pointing to verified local transparent SVGs
export const TECH_LOGO_MAP: Record<string, string> = {
  'Laravel': '/images/tech-stack/laravel.svg',
  'Next.js': '/images/tech-stack/nextjs.svg',
  'Inertia.js': '/images/tech-stack/inertia.svg',
  'React.js': '/images/tech-stack/react.svg',
  'Tailwind CSS': '/images/tech-stack/tailwind.svg',
  'Framer Motion': '/images/tech-stack/framermotion.svg',
  'HTML': '/images/tech-stack/html.svg',
  'CSS': '/images/tech-stack/css.svg',
  'JavaScript': '/images/tech-stack/javascript.svg',
  'Express.js': '/images/tech-stack/express.svg',
  'Git': '/images/tech-stack/git.svg',
  'GitHub': '/images/tech-stack/github.svg',
  'Docker': '/images/tech-stack/docker.svg',
  'MySQL': '/images/tech-stack/mysql.svg',
  'Vercel': '/images/tech-stack/vercel.svg',
  'Figma': '/images/tech-stack/figma.svg',
};

// 16 verified technologies — displayed in marquee in declared order (no duplicates)
const MARQUEE_ITEMS = [
  { name: 'Laravel', logo: '/images/tech-stack/laravel.svg' },
  { name: 'Next.js', logo: '/images/tech-stack/nextjs.svg' },
  { name: 'Inertia.js', logo: '/images/tech-stack/inertia.svg' },
  { name: 'React.js', logo: '/images/tech-stack/react.svg' },
  { name: 'Tailwind CSS', logo: '/images/tech-stack/tailwind.svg' },
  { name: 'Framer Motion', logo: '/images/tech-stack/framermotion.svg' },
  { name: 'HTML', logo: '/images/tech-stack/html.svg' },
  { name: 'CSS', logo: '/images/tech-stack/css.svg' },
  { name: 'JavaScript', logo: '/images/tech-stack/javascript.svg' },
  { name: 'Express.js', logo: '/images/tech-stack/express.svg' },
  { name: 'Git', logo: '/images/tech-stack/git.svg' },
  { name: 'GitHub', logo: '/images/tech-stack/github.svg' },
  { name: 'Docker', logo: '/images/tech-stack/docker.svg' },
  { name: 'MySQL', logo: '/images/tech-stack/mysql.svg' },
  { name: 'Vercel', logo: '/images/tech-stack/vercel.svg' },
  { name: 'Figma', logo: '/images/tech-stack/figma.svg' },
];

export const TechStackSection: React.FC = () => {
  // Accordion state: only 1 category active at a time
  const [activeCategory, setActiveCategory] = useState<string | null>('frontend');
  const prefersReducedMotion = useReducedMotion();

  const toggleCategory = (id: string) => {
    setActiveCategory((current) => (current === id ? null : id));
  };

  return (
    <section id="tech-stack" className="py-20 border-b border-slate-200">
      {/* ============ Section Header ============ */}
      <div className="mb-10">
        <span className="text-xs font-mono font-medium text-blue-600 mb-3 block tracking-wider uppercase">
          02 / Technical Skills &amp; Tooling
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Keahlian Teknis &amp; Tooling
        </h2>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          {SKILLS_SUMMARY.totalSkills} teknologi aktual dalam{' '}
          {SKILLS_SUMMARY.totalCategories} bidang kompetensi: Frontend, Backend,
          Database, Tools &amp; Deployment, serta UI/UX Design.
        </p>
      </div>

      {/* ============ Marquee — single row, calm horizontal scroll ============ */}
      <div className="mb-10">
        <div className="relative overflow-hidden">
          {/* Edge fade — subtle, only for visual continuity */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track: duplicate once for seamless loop, unique keys via suffix */}
          <div
            className={`flex w-max ${prefersReducedMotion ? '' : 'animate-marquee'}`}
            style={{ animationDuration: '60s' }}
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div
                key={`marquee-${idx}`}
                className="flex items-center gap-3 px-6 py-3 shrink-0"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  {item.name}
                </span>
                {/* Subtle separator dot between items, hidden on last item of each set */}
                {idx !== MARQUEE_ITEMS.length * 2 - 1 && (
                  <span className="ml-3 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ Accordion Container ============ */}
      <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
        {SKILL_CATEGORIES.map((category, catIdx) => {
          const isOpen = activeCategory === category.id;

          return (
            <div
              key={category.id}
              className={catIdx > 0 ? 'border-t border-slate-200' : ''}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isOpen}
                className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer ${
                  isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-sm font-semibold text-slate-400 shrink-0">
                    {category.code}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-bold text-lg text-slate-900 truncate">
                        {category.title}
                      </h3>
                      <span className="text-sm text-slate-400 font-mono">
                        {category.skills.length}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${category.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      {/* Summary & Highlight */}
                      <div className="mt-3 mb-6">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {category.summary}
                        </p>
                        {category.highlight && (
                          <p className="text-sm font-medium text-slate-900 mt-2">
                            {category.highlight}
                          </p>
                        )}
                      </div>

                      {/* Skill Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.skills.map((skill, sIdx) => (
                          <SkillItemCard key={sIdx} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ============ Subcomponent: SkillItemCard ============ */
const SkillItemCard: React.FC<{ skill: TechSkillItem }> = ({ skill }) => {
  const logoSrc = TECH_LOGO_MAP[skill.name] || '/images/tech-stack/laravel.svg';

  return (
    <div className="p-4 rounded-lg border border-slate-200 bg-white flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <img
            src={logoSrc}
            alt={skill.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <span className="font-semibold text-sm text-slate-900">
          {skill.name}
        </span>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">
        {skill.practicalFocus}
      </p>

      {skill.appliedInProjects && skill.appliedInProjects.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skill.appliedInProjects.map((proj, pIdx) => (
            <span
              key={pIdx}
              className="inline-flex items-center px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 text-xs font-medium"
            >
              {proj}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};