import React, { useState } from 'react';
import { NavigationRail } from './components/NavigationRail';
import { TopHeader } from './components/TopHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { EducationMotivationSection } from './components/EducationMotivationSection';
import { GetInTouchSection } from './components/GetInTouchSection';
import { ResumeModal } from './components/ResumeModal'
import { CandidateCardModal } from './components/CandidateCardModal';
import { ProjectItem } from './types/portfolio';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCandidateCardOpen, setIsCandidateCardOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<{
    project: ProjectItem;
    mode: 'demo' | 'github';
  } | null>(null);

  const handleOpenLiveDemo = (project: ProjectItem) => {
    setActiveProjectModal({ project, mode: 'demo' });
  };

  const handleOpenGithubRepo = (project: ProjectItem) => {
    setActiveProjectModal({ project, mode: 'github' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-900 font-editorial-body flex flex-col sm:flex-row antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 64px Left Vertical Navigation Dock on Desktop / Floating Bar on Mobile */}
      <NavigationRail
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCandidateCard={() => setIsCandidateCardOpen(true)}
      />

      {/* Main View Area (offset by left rail on desktop, bottom padding on mobile) */}
      <div className="flex-1 sm:pl-16 pb-20 sm:pb-0 flex flex-col min-h-screen">
        {/* Sticky Top Header */}
        <TopHeader
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Content Body Grid */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 py-4">
          {/* Hero Section */}
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onScrollToProjects={() => scrollToSection('projects')}
          />

          {/* 01 // FEATURED PROJECTS (Code & Design Tabs) */}
          <FeaturedProjectsSection
            onOpenGithubRepo={handleOpenGithubRepo}
          />

          {/* 02 // TECHNICAL STACK & TOOLING (Interactive Accordion) */}
          <TechStackSection />

          {/* 03 // TRACK RECORD */}
          <TrackRecordSection />

          {/* 04 // EDUCATION & MOTIVATION */}
          <EducationMotivationSection />

          {/* 05 // GET IN TOUCH */}
          <GetInTouchSection/>
        </main>
      </div>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CandidateCardModal
        isOpen={isCandidateCardOpen}
        onClose={() => setIsCandidateCardOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
