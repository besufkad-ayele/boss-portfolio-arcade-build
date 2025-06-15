
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import FloatingParticles from '../components/FloatingParticles';
import CustomCursor from '../components/CustomCursor';
import GameSidebar from '../components/GameSidebar';
import XPNotification from '../components/XPNotification';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [totalPoints, setTotalPoints] = useState(1000); // Start with 1000 points
  const [notification, setNotification] = useState({ show: false, message: '', points: 0 });
  const [hasShownWelcome, setHasShownWelcome] = useState(false);

  // Show welcome notification on page load
  useEffect(() => {
    if (!hasShownWelcome) {
      setTimeout(() => {
        showXPNotification(1000, 'Welcome! Starting bonus received!');
        setHasShownWelcome(true);
      }, 1000);
    }
  }, [hasShownWelcome]);

  const showXPNotification = (points: number, message: string) => {
    setTotalPoints(prev => prev + points);
    setNotification({ show: true, message, points });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection onEarnPoints={showXPNotification} />;
      case 'about':
        return <AboutSection onEarnPoints={showXPNotification} />;
      case 'skills':
        return <SkillsSection onEarnPoints={showXPNotification} />;
      case 'projects':
        return <ProjectsSection onEarnPoints={showXPNotification} />;
      case 'experience':
        return <ExperienceSection onEarnPoints={showXPNotification} />;
      case 'contact':
        return <ContactSection onEarnPoints={showXPNotification} />;
      default:
        return <HeroSection onEarnPoints={showXPNotification} />;
    }
  };

  return (
    <div className="min-h-screen custom-cursor bg-background dark:bg-dark-primary">
      <CustomCursor />
      <FloatingParticles />
      
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigation}
        totalPoints={totalPoints}
        onEarnPoints={showXPNotification}
      />
      
      <GameSidebar 
        totalPoints={totalPoints}
        currentSection={activeSection}
      />

      <XPNotification
        message={notification.message}
        points={notification.points}
        isVisible={notification.show}
        onHide={hideNotification}
      />
      
      <main className="relative z-10 pt-16">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {renderCurrentSection()}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
