import React from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';




// Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-300 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        <About />
        <div className="h-12 sm:h-16" /> {/* Responsive Spacer */}
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;
