import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const QUOTE_TEXT =
  'Terus membangun, terus belajar, dan mengubah setiap tantangan menjadi pengalaman dalam mengembangkan solusi digital.';

const TYPING_SPEED_MS = 30;
const INITIAL_DELAY_MS = 200;

export const EducationMotivationSection: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(quoteRef, { once: true, amount: 0.3 });

  const [displayText, setDisplayText] = useState('');

  // Typewriter effect — runs once when quote card enters viewport
  useEffect(() => {
    if (!isInView) return;

    // Reduced motion: show full text immediately, no typing
    if (prefersReducedMotion) {
      setDisplayText(QUOTE_TEXT);
      return;
    }

    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      charIndex += 1;
      setDisplayText(QUOTE_TEXT.slice(0, charIndex));
      if (charIndex < QUOTE_TEXT.length) {
        timeoutId = setTimeout(typeNext, TYPING_SPEED_MS);
      }
    };

    timeoutId = setTimeout(typeNext, INITIAL_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <section id="education" className="py-20 border-b border-slate-200">
      {/* ============ Section Header ============ */}
      <div className="mb-10">
        <span className="text-sm font-mono font-medium text-blue-600 mb-3 block tracking-wider uppercase">
          04 / Education &amp; Growth
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Pendidikan &amp; Kesiapan Magang
        </h2>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Latar belakang akademik di bidang rekayasa perangkat lunak dan kesiapan
          untuk berkontribusi dalam lingkungan kerja engineering melalui
          kesempatan magang.
        </p>
      </div>

      {/* ============ Quote Card with typewriter animation ============ */}
      <div ref={quoteRef} className="max-w-full mb-12">
        <div className="border border-slate-200 rounded-lg bg-white p-6 sm:p-8">
          {/* Accent marker — typographic anchor, no animation */}
          <span
            aria-hidden="true"
            className="block w-2 h-2 bg-slate-900 rounded-full mb-6"
          />

          {/* Quote — min-h prevents layout shift as text grows line by line */}
          <blockquote
            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-slate-900 tracking-tight leading-snug min-h-[10rem] sm:min-h-[11rem] lg:min-h-[13rem]"
          >
            {/* Screen reader: full text immediately */}
            <span className="sr-only">{QUOTE_TEXT}</span>
            {/* Visual: typewriter */}
            <span aria-hidden="true">{displayText}</span>
            {/* Blinking vertical cursor — stays at end, blinks indefinitely */}
            <motion.span
              aria-hidden="true"
              className="inline-block ml-1 text-slate-900 font-normal"
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                      times: [0, 0.5, 0.5, 1],
                    }
              }
            >
              |
            </motion.span>
          </blockquote>
        </div>
      </div>

      {/* ============ Two info blocks — editorial flow, no cards ============ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-full">
        {/* Latar Belakang Pendidikan */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <GraduationCap
              className="w-4 h-4 text-slate-900 shrink-0"
              aria-hidden="true"
            />
            <h3 className="font-semibold text-base text-slate-900">
              Latar Belakang Pendidikan
            </h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed pl-[26px]">
            Mahasiswa semester 1 S1 Teknik Informatika di Institut
            Teknologi Sumatera (ITERA), Fakultas Teknologi Industri
            (FTI). Memiliki latar belakang Rekayasa Perangkat Lunak
            dari SMK serta ketertarikan pada pengembangan aplikasi
            web dan pemecahan masalah melalui teknologi.
          </p>
        </div>

        {/* Kesiapan Magang */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <CheckCircle2
              className="w-4 h-4 text-slate-900 shrink-0"
              aria-hidden="true"
            />
            <h3 className="font-semibold text-base text-slate-900">
              Kesiapan Magang
            </h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed pl-[26px]">
            Terbuka terhadap kesempatan magang untuk menerapkan
            kemampuan pengembangan web, mempelajari alur kerja tim
            engineering, dan berkontribusi dalam pengembangan produk
            digital. Siap beradaptasi dengan teknologi, standar kerja,
            serta kebutuhan tim, sekaligus terus mengembangkan
            kemampuan melalui pengalaman langsung dan masukan dari
            rekan kerja.
          </p>
        </div>
      </div>
    </section>
  );
};