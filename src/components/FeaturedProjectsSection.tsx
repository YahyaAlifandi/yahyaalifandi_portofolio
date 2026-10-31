import React, { useState } from 'react';
import {
  Code2,
  Palette,
  Lock,
  ArrowUpRight,
  Shield,
  Database,
  Container,
  Users,
  Sparkles,
  Zap,
  CreditCard,
  Receipt,
  HeartPulse,
  Layout,
  FileSpreadsheet,
  CheckCircle2,
  Gamepad2,
  BookOpen,
  Compass,
  Layers,
  Award,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CODE_PROJECTS, DESIGN_PROJECTS } from '../data/portfolioData';
import { CodeProjectItem, DesignProjectItem, ProjectItem } from '../types/portfolio';

interface FeaturedProjectsSectionProps {
  onOpenGithubRepo: (project: ProjectItem) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onOpenGithubRepo,
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'design'>('code');

  const getContributionIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Receipt': return <Receipt className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Container': return <Container className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Users': return <Users className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Zap': return <Zap className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-rose-500 shrink-0" />;
      case 'Layout': return <Layout className="w-4 h-4 text-purple-600 shrink-0" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Gamepad2': return <Gamepad2 className="w-4 h-4 text-indigo-600 shrink-0" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />;
      case 'Compass': return <Compass className="w-4 h-4 text-sky-600 shrink-0" />;
      case 'Layers': return <Layers className="w-4 h-4 text-blue-600 shrink-0" />;
      default: return <Shield className="w-4 h-4 text-blue-600 shrink-0" />;
    }
  };

  return (
    <section id="projects" className="py-16 border-b border-slate-200/80">
      {/* ============ Section Header ============ */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-mono font-bold text-blue-600 tracking-wider uppercase block mb-1">
            01 // FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-2">
            Proyek Unggulan &amp; Implementasi Nyata
          </h2>
          <p className="text-sm font-editorial-body text-slate-600 max-w-2xl">
            Eksplorasi karya terbagi dalam dua pilar: rekayasa aplikasi web (Code) dan perancangan pengalaman antarmuka pengguna (Design).
          </p>
        </div>

        {/* ============ Tactile Capsule Segmented Switcher ============ */}
        <div
          role="tablist"
          aria-label="Filter kategori proyek"
          className="relative inline-flex items-center p-1 bg-slate-100 border border-slate-200 rounded-full self-start md:self-auto"
        >
          {/* Code Tab Button */}
          <button
            type="button"
            role="tab"
            id="tab-code"
            aria-controls="panel-code"
            aria-selected={activeTab === 'code'}
            onClick={() => setActiveTab('code')}
            className={`relative z-10 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 ${activeTab === 'code'
                ? 'text-white'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            {activeTab === 'code' && (
              <motion.div
                layoutId="activeProjectCategory"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute inset-0 bg-blue-600 rounded-full shadow-xs -z-10"
              />
            )}
            <Code2 className="w-4 h-4 shrink-0" />
            <span className="font-semibold">Code</span>
            <span
              className={`inline-flex items-center justify-center text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full min-w-[1.25rem] transition-colors ${activeTab === 'code'
                  ? 'bg-blue-700/70 text-white'
                  : 'bg-slate-200 text-slate-600'
                }`}
            >
              {CODE_PROJECTS.length}
            </span>
          </button>

          {/* Design Tab Button */}
          <button
            type="button"
            role="tab"
            id="tab-design"
            aria-controls="panel-design"
            aria-selected={activeTab === 'design'}
            onClick={() => setActiveTab('design')}
            className={`relative z-10 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 ${activeTab === 'design'
                ? 'text-white'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            {activeTab === 'design' && (
              <motion.div
                layoutId="activeProjectCategory"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute inset-0 bg-blue-600 rounded-full shadow-xs -z-10"
              />
            )}
            <Palette className="w-4 h-4 shrink-0" />
            <span className="font-semibold">Design</span>
            <span
              className={`inline-flex items-center justify-center text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full min-w-[1.25rem] transition-colors ${activeTab === 'design'
                  ? 'bg-blue-700/70 text-white'
                  : 'bg-slate-200 text-slate-600'
                }`}
            >
              {DESIGN_PROJECTS.length}
            </span>
          </button>
        </div>
      </div>

      {/* ============ Content Grid with AnimatePresence ============ */}
      <AnimatePresence mode="wait">
        {activeTab === 'code' ? (
          <motion.div
            key="tab-code"
            role="tabpanel"
            id="panel-code"
            aria-labelledby="tab-code"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {CODE_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden group"
              >
                {/* Top Mockup Terminal/Browser Header */}
                <div className="bg-slate-900 text-white p-3.5 border-b border-slate-800">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-800/90 px-2.5 py-0.5 rounded-md text-slate-300 text-[10px] truncate max-w-[190px] border border-slate-700/50">
                      <Lock className="w-2.5 h-2.5 text-blue-400 shrink-0" />
                      <span className="truncate">{project.mockUrl}</span>
                    </div>
                    <div className="w-4" />
                  </div>

                  {/* Mock Visual Content */}
                  {project.mockType === 'espp' && (
                    <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                      <img
                        src="/assets/project/arsiva.png"
                        alt="Arsiva Website Preview"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {project.mockType === 'code' && (
                    <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                      <img
                        src="/assets/project/jejakkode.png"
                        alt="JejakKode Website Preview"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {project.mockType === 'topup' && (
                    <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                      <img
                        src="/assets/project/altapedia.jpeg"
                        alt="altapedia Website Preview"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag & Year */}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2.5">
                      <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {project.categoryTag}
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                        {project.year}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-xs font-mono font-medium text-slate-500 mb-3">
                      {project.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-600 font-editorial-body leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Contributions */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        KONTRIBUSI &amp; FITUR IMPLEMENTASI
                      </span>
                      <div className="space-y-2">
                        {project.contributions.map((c, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-[11px] transition-all hover:bg-white hover:border-blue-200 hover:shadow-xs"
                          >
                            <div className="flex items-center gap-1.5 font-display font-bold text-slate-800 mb-0.5">
                              <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                                {getContributionIcon(c.icon)}
                              </div>
                              <span>{c.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-editorial-body pl-6.5 leading-normal">
                              {c.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills & Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono bg-slate-100/80 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-100">
                      {project.liveDemoUrl?.trim() && (
                        <a
                          href={
                            project.liveDemoUrl.startsWith('http')
                              ? project.liveDemoUrl
                              : `https://${project.liveDemoUrl}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl?.trim() && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <span>GitHub Repo</span>
                          <span className="font-mono text-blue-500">&lt;&gt;</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tab-design"
            role="tabpanel"
            id="panel-design"
            aria-labelledby="tab-design"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          >
            {DESIGN_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden group"
              >
                {/* Visual Design Mockup Canvas Header */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 border-b border-slate-800 relative overflow-hidden">
                  {/* Subtle Canvas Dot Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Top Bar with Figma Indicator */}
                  <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60 text-[11px] font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                        <Palette className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-300 font-bold truncate">UI/UX Canvas</span>
                    </div>

                    {project.achievement ? (
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
                        <Award className="w-3 h-3 text-emerald-400" />
                        <span>{project.achievement}</span>
                      </span>
                    ) : (
                      <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700 font-mono">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Visual Preview Card Simulation */}
                  <div className="relative z-10 bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 font-mono">
                    {project.mockType === 'health' && (
                      <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                        <img
                          src="/assets/project/sehatin.png"
                          alt="Sehatin UI UX Preview"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {project.mockType === 'school-design' && (
                      <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                        <img
                          src="/assets/project/espp-basic-design.png"
                          alt="ESPP UI UX Preview"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {project.mockType === 'game-design' && (
                      <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                        <img
                          src="/assets/project/xenova.png"
                          alt="Xenova UI UX Preview"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {project.mockType === 'blog-design' && (
                      <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                        <img
                          src="/assets/project/blogify.png"
                          alt="Blogify UI UX Preview"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag & Team Badge */}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2.5">
                      <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60">
                        {project.categoryTag}
                      </span>
                      {project.team && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                          {project.team}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-xs font-mono font-medium text-slate-500 mb-3">
                      {project.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-600 font-editorial-body leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Design Focus Pillars */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        FOKUS PERANCANGAN &amp; EKSPLORASI UX
                      </span>
                      <div className="space-y-2">
                        {project.designFocus.map((f, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-[11px] transition-all hover:bg-white hover:border-purple-200 hover:shadow-xs"
                          >
                            <div className="flex items-center gap-1.5 font-display font-bold text-slate-800 mb-0.5">
                              <div className="w-5 h-5 rounded-md bg-purple-50 flex items-center justify-center shrink-0">
                                {getContributionIcon(f.icon)}
                              </div>
                              <span>{f.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-editorial-body pl-6.5 leading-normal">
                              {f.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tools Pills & Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono bg-purple-50/80 text-purple-700 px-2 py-0.5 rounded-md border border-purple-200/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-100">
                      {project.liveDemoUrl?.trim() && (
                        <a
                          href={
                            project.liveDemoUrl.startsWith('http')
                              ? project.liveDemoUrl
                              : `https://${project.liveDemoUrl}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                          <span>Kunjungi Prototype</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
