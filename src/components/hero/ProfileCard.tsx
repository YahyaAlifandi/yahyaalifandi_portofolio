import React from 'react';
import { Download } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { PERSONAL_INFO, SKILLS_SUMMARY } from '../../data/portfolioData';
import { HERO_ANIMATION } from './hero-animations';

const CV_FILE_PATH = '/cv/arga-yahya-alifandi.pdf';

export const ProfileCard: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [imgError, setImgError] = React.useState(false);
  const fallbackSrc = '/fallback-avatar.jpg';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 18,
  });

  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={HERO_ANIMATION.entrance.card}
      className="lg:col-span-4 flex justify-center lg:justify-end [perspective:1200px]"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative w-full max-w-[300px]"
      >
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-lg shadow-slate-900/10 border border-slate-200">
          <img
            src={imgError ? fallbackSrc : PERSONAL_INFO.profileImage}
            alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />

          <div
            className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none"
            aria-hidden={true}
          />

          {!reduceMotion && (
            <motion.div
              aria-hidden={true}
              style={{
                background: useTransform(
                  [spotlightX, spotlightY],
                  ([x, y]) =>
                    `radial-gradient(120px circle at ${x} ${y}, rgba(255,255,255,0.15), transparent 65%)`
                ),
              }}
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          <div
            className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2"
            style={{ transform: reduceMotion ? 'none' : 'translateZ(30px)' }}
          >
            <div className="inline-flex items-center shrink-0 bg-white/10 backdrop-blur-xl px-2.5 py-1.5 rounded-lg border border-white/20">
              <span className="text-xs font-medium text-white whitespace-nowrap">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ transform: reduceMotion ? 'none' : 'translateZ(20px)' }}
          >
            <div className="relative rounded-xl p-4 space-y-3 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:-z-10 before:backdrop-blur-xl before:bg-white/10 before:[mask-image:linear-gradient(to_top,black_0%,black_30%,transparent_100%)]">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold tracking-tight text-white leading-none">
                    5+
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">
                    Proyek
                  </span>
                </div>

                <div className="w-px h-7 bg-white/10 shrink-0" />

                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold tracking-tight text-white leading-none">
                    {SKILLS_SUMMARY.totalSkills}
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">
                    Tech Stack
                  </span>
                </div>

                <div className="w-px h-7 bg-white/10 shrink-0" />

                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-sm font-semibold tracking-tight text-white leading-none truncate">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">
                    Lokasi
                  </span>
                </div>
              </div>

              <a
                href={CV_FILE_PATH}
                download="Arga-Yahya-Alifandi-CV.pdf"
                aria-label="Download Curriculum Vitae (PDF)"
                className="group flex items-center justify-center gap-2 w-full rounded-lg py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold border border-white/10 shadow-lg shadow-blue-950/20 transition-all duration-200 hover:shadow-blue-500/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              >
                <Download
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden={true}
                />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};