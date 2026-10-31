/**
 * Centralized animation constants for Hero section.
 * Memudahkan tuning & mencegah magic number bertebaran.
 */
export const HERO_ANIMATION = {
  entrance: {
    badge:    { duration: 0.35, delay: 0.00, ease: 'easeOut' as const },
    headline: { duration: 0.40, delay: 0.08, ease: 'easeOut' as const },
    sub:      { duration: 0.40, delay: 0.14, ease: 'easeOut' as const },
    desc:     { duration: 0.40, delay: 0.20, ease: 'easeOut' as const },
    cta:      { duration: 0.40, delay: 0.26, ease: 'easeOut' as const },
    card:     { duration: 0.45, delay: 0.18, ease: 'easeOut' as const },
  },
  wordLoop: {
    duration: 3.8,
    times: [0, 0.38, 0.68, 1] as [number, number, number, number],
    stagger: 0.45,
    ease: 'easeInOut' as const,
  },
  hover: {
    scale: 1.06,
    color: '#2563eb',
  },
};

export const BREATHING_ANIMATION = {
  animate: {
    scale: [1, 1.015, 1],
  },
  transition: (index: number) => ({
    duration: 4.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay: index * 0.8, // stagger 800ms supaya tidak sinkron
  }),
};

/**
 * Modular word-loop animation yang scalable untuk nama berapa kata pun.
 * Pola bergantian berdasarkan index paritas.
 */
export const getWordLoopAnimation = (index: number, reduceMotion: boolean | null | undefined) => {
  if (reduceMotion) {
    return { animate: {}, transition: {} };
  }

  const isEven = index % 2 === 0;
  const { duration, times, stagger, ease } = HERO_ANIMATION.wordLoop;

  return {
    animate: {
      y:      isEven ? [0, -6, 1, 0]   : [0, 1, -6, 0],
      rotate: isEven ? [0, -2, 0.5, 0] : [0, 0.5, 2, 0],
      scale:  isEven ? [1, 1.04, 0.99, 1] : [1, 0.99, 1.04, 1],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease,
      times,
      delay: index * stagger,
    },
  };
};
