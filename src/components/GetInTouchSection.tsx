import React, { useState, useRef } from 'react';
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  FileText,
  Download,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';
import { motion, useInView, useReducedMotion, Variants } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CV_FILE_PATH = '/cv/arga-yahya-alifandi.pdf';
const WHATSAPP_NUMBER = '6285945431389';

const getHandleFromUrl = (url: string): string => {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/^\//, '').replace(/\/$/, '');
    return path || url;
  } catch {
    return url;
  }
};

const getWhatsAppUrl = (number: string): string =>
  `https://wa.me/${number.replace(/\D/g, '')}`;

type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external: boolean;
  copyable: boolean;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: WHATSAPP_NUMBER,
    href: getWhatsAppUrl(WHATSAPP_NUMBER),
    Icon: MessageCircle,
    external: true,
    copyable: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `https://mail.google.com/mail/?view=cm&to=${PERSONAL_INFO.email}`,
    Icon: Mail,
    external: false,
    copyable: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: getHandleFromUrl(PERSONAL_INFO.linkedinUrl),
    href: PERSONAL_INFO.linkedinUrl,
    Icon: Linkedin,
    external: true,
    copyable: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: getHandleFromUrl(PERSONAL_INFO.githubUrl),
    href: PERSONAL_INFO.githubUrl,
    Icon: Github,
    external: true,
    copyable: false,
  },
];

export const GetInTouchSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
    },
  };

  const itemVariants : Variants= {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 350, damping: 25 },
    },
  };

  const ctaVariants : Variants= {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 350, damping: 25, delay: 0.1 },
    },
  };

  const directMethods = CONTACT_METHODS.filter((m) => ['whatsapp', 'email'].includes(m.id));
  const profileMethods = CONTACT_METHODS.filter((m) => ['linkedin', 'github'].includes(m.id));

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 border-t border-slate-200"
    >
      {/* ============ Section Header & Status ============ */}
      <div className="mb-10">
        <span className="text-xs font-mono font-medium text-blue-600 mb-3 block tracking-wider uppercase">
          05 / Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Mari <span className="text-blue-600">berkolaborasi</span>.
        </h2>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed mb-6">
          Tersedia untuk peluang magang atau proyek freelance. Hubungi saya melalui saluran di bawah atau unduh CV terbaru.
        </p>
      </div>

      {/* 2. Hirarki Visual: Direct Contact (Primary) */}
      <motion.div
        variants={containerVariants}
        initial={isInView ? 'visible' : 'hidden'}
        animate={isInView ? 'visible' : 'hidden'}
        className="mb-8"
      >
        <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Direct Contact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {directMethods.map((method) => {
            const Icon = method.Icon;
            const isCopied = copiedId === method.id;
            return (
              <motion.div
                key={method.id}
                variants={itemVariants}
                className="group relative flex flex-col gap-4 p-5 rounded border border-slate-200 bg-slate-50/50 hover:border-blue-600 hover:bg-white transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded border border-slate-200 bg-white flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" aria-hidden={true} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-medium text-slate-500 block mb-0.5">
                        {method.label}
                      </span>
                      <a
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                        className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                  
                  {/* 3. Frictionless Copy-Paste: Tombol eksplisit, selalu terlihat */}
                  {method.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(method.id, method.value)}
                      aria-label={`Salin ${method.label}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white text-xs font-mono font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all shrink-0"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden={true} />
                          <span className="text-emerald-600">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden={true} />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 2. Hirarki Visual: Professional Profiles (Secondary) */}
      <motion.div
        variants={containerVariants}
        initial={isInView ? 'visible' : 'hidden'}
        animate={isInView ? 'visible' : 'hidden'}
        className="mb-10"
      >
        <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          Professional Profiles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {profileMethods.map((method) => {
            const Icon = method.Icon;
            return (
              <motion.a
                key={method.id}
                variants={itemVariants}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-5 rounded border border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" aria-hidden={true} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono font-medium text-slate-500 block mb-0.5">
                    {method.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 truncate block group-hover:text-slate-700 transition-colors">
                    {method.value}
                  </span>
                </div>
                <ArrowUpRight 
                  className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" 
                  aria-hidden={true} 
                />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* ============ CV CTA with Metadata ============ */}
      <motion.a
        href={CV_FILE_PATH}
        download="Arga-Yahya-Alifandi-CV.pdf"
        aria-label="Download Curriculum Vitae (PDF)"
        variants={ctaVariants}
        initial={isInView ? 'visible' : 'hidden'}
        animate={isInView ? 'visible' : 'hidden'}
        className="group relative block rounded border border-slate-200 bg-white p-6 sm:p-8 hover:border-blue-600 transition-colors duration-200"
      >
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 group-hover:border-blue-600 group-hover:bg-blue-50 transition-colors duration-200">
              <FileText className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" aria-hidden={true} />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-slate-500 block mb-1 tracking-wider uppercase">
                Dokumen
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Curriculum Vitae (PDF)
              </h3>
              
              {/* 4. Metadata CV: Eksplisit dan fungsional */}
              <div className="flex flex-wrap gap-2 mb-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  Updated: Oct 2026
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  PDF &bull; 120KB
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  1 Halaman &bull; ATS-Friendly
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded font-semibold text-sm group-hover:bg-blue-600 transition-colors duration-200 shrink-0">
            <Download className="w-4 h-4" aria-hidden={true} />
            <span>Unduh Sekarang</span>
            <ArrowUpRight 
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
              aria-hidden={true} 
            />
          </div>
        </div>
      </motion.a>

      {/* ============ Footer ============ */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-8 border-t border-slate-200 mt-10">
        <div className="text-[11px] text-slate-400">
          &copy; {new Date().getFullYear()} Yahya Alifandi &bull; Web Developer
        </div>
      </div>
    </section>
  );
};