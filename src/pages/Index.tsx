import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import PathSection from '../components/PathSection';
import MindSection from '../components/MindSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import CustomCursor from '../components/CustomCursor';
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';
import GameSidebar from '../components/GameSidebar';
import XPNotification from '../components/XPNotification';
import ContactDialog from '../components/ContactDialog';
import FloatingContactButton from '../components/FloatingContactButton';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [notification, setNotification] = useState({ show: false, message: '', points: 0 });
  const [visitedSections, setVisitedSections] = useState<Set<number>>(new Set([0]));
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const welcomeShownRef = useRef(false);

  const sections = [
    { id: 'hero', component: HeroSection, name: 'Hero' },
    { id: 'about', component: AboutSection, name: 'About' },
    { id: 'skills', component: SkillsSection, name: 'Skills' },
    { id: 'projects', component: ProjectsSection, name: 'Projects' },
    { id: 'experience', component: ExperienceSection, name: 'Experience' },
    { id: 'path', component: PathSection, name: 'Path' },
    { id: 'mind', component: MindSection, name: 'Mind' },
    { id: 'blog', component: BlogSection, name: 'Writings' },
    { id: 'contact', component: ContactSection, name: 'Contact' },
  ];

  // Welcome bonus
  useEffect(() => {
    const sectionParam = searchParams.get('section');
    if (sectionParam) {
      const idx = sections.findIndex((s) => s.id === sectionParam);
      if (idx >= 0) {
        setActiveSection(idx);
        setSearchParams({}, { replace: true });
      }
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (!welcomeShownRef.current) {
      welcomeShownRef.current = true;
      setTimeout(() => {
        setTotalPoints(1000);
        setNotification({ show: true, message: 'Welcome! Starting bonus received!', points: 1000 });
      }, 1000);
    }
  }, []);

  // Update progress when section changes
  useEffect(() => {
    const progress = ((activeSection + 1) / sections.length) * 100;
    setScrollProgress(progress);

    // Award points for visiting new sections
    if (!visitedSections.has(activeSection)) {
      const newVisited = new Set(visitedSections);
      newVisited.add(activeSection);
      setVisitedSections(newVisited);
      
      const points = 500;
      setTotalPoints(prev => prev + points);
      setNotification({ 
        show: true, 
        message: `${sections[activeSection].name} section unlocked!`, 
        points 
      });
    }
  }, [activeSection, sections, visitedSections]);

  const showXPNotification = (points: number, message: string) => {
    setTotalPoints(prev => prev + points);
    setNotification({ show: true, message, points });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

  const handleNavigate = (index: number) => {
    setActiveSection(index);
  };

  const CurrentSection = sections[activeSection].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--black)]">
      <CustomCursor />
      
      {/* Desktop Vertical Navigation */}
      <div className="hidden lg:block z-40">
        <VerticalNav 
          sections={sections.map(s => s.id)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          scrollProgress={scrollProgress}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        sections={sections.map(s => s.id)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        scrollProgress={scrollProgress}
      />

      {/* Game Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <GameSidebar 
          totalPoints={totalPoints}
          currentSection={sections[activeSection].id}
        />
      </div>

      {/* XP Notification */}
      <XPNotification
        message={notification.message}
        points={notification.points}
        isVisible={notification.show}
        onHide={hideNotification}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 100, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -100, rotateX: 10 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full h-full min-h-0 overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <CurrentSection onEarnPoints={showXPNotification} />
        </motion.div>
      </AnimatePresence>

      {/* Section Indicators - Hidden on mobile, offset from game sidebar */}
      <div className="hidden lg:flex fixed right-[calc(var(--game-sidebar-right)+var(--game-sidebar-width)+1rem)] top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeSection 
                ? 'bg-[var(--gold)] h-12' 
                : 'bg-[var(--line)] hover:bg-[var(--warm-gray)]'
            }`}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Hint - only on hero to avoid overlapping content */}
      {activeSection === 0 && (
      <div className="hidden lg:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-30 font-['DM_Mono'] text-[10px] text-[var(--warm-gray)] tracking-[3px] uppercase items-center gap-3 pointer-events-none">
        <span>Use navigation to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
      </div>
      )}

      {/* Floating Contact Button - hidden on mobile and about page (overlaps cards) */}
      <div className="hidden md:block">
        {activeSection !== 1 && (
        <FloatingContactButton onClick={() => {
          setIsContactDialogOpen(true);
          showXPNotification(100, 'Opening quick contact!');
        }} />
        )}
      </div>

      {/* Global Contact Dialog */}
      <ContactDialog 
        isOpen={isContactDialogOpen} 
        onClose={() => setIsContactDialogOpen(false)}
        onEarnPoints={showXPNotification}
      />
    </div>
  );
};

export default Index;
