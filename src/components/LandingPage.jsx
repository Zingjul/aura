import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import GlassWidget from './GlassWidget';
import CallToAction from './ui/call-to-action';
import NewsletterCTA from './ui/newsletter-cta';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-y-auto overflow-x-hidden custom-scrollbar">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-svh flex flex-col items-center justify-center py-24 md:py-32">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/landing_page_background(3).png"
            alt="Aura Background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]/100" />
        </div>

        {/* Main Content Area */}
        <main className="relative z-10 flex flex-col items-center text-center px-6 fluid-container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-white/40 mb-6 block font-light">The Future of Intelligence</span>
            <h1 className="heading-fluid-1 font-light tracking-tight mb-16 text-gradient max-w-5xl mx-auto">
              Experience Aura
            </h1>
          </motion.div>

          {/* The Centerpiece Widget */}
          <div className="w-full flex justify-center mb-16 md:mb-24 px-2 md:px-0">
            <GlassWidget />
          </div>

          {/* Enter Terminal Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          >
            <Link to="/dashboard">
              <button className="group relative px-10 md:px-12 py-3.5 md:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all duration-500 hover:scale-105 active:scale-95">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <span className="relative z-10 text-[11px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-light text-white/80 group-hover:text-white transition-colors">
                  Enter Terminal
                </span>
              </button>
            </Link>
          </motion.div>
        </main>

        {/* Scroll Hint - Only show on taller screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-10 hidden sm:flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 space-y-24 md:space-y-32 pb-24 md:pb-32 fluid-container">
        <section className="bg-transparent">
          <CallToAction />
        </section>
        
        <section className="bg-transparent border-t border-white/5 pt-16 md:pt-24">
          <NewsletterCTA />
        </section>
      </div>
      
      <footer className="py-8 md:py-12 border-t border-white/5 text-center bg-[#050505]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">© 2026 Aura Intelligence Systems</span>
      </footer>
    </div>
  );
};

export default LandingPage;
