import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Assets', href: '#' },
    { name: 'Intelligence', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Network', href: '#' },
    { name: 'Contact', href: '/contact' },
    { name: 'Access', href: '/dashboard' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[100] py-5 md:py-6 bg-[#050505]/60 backdrop-blur-[40px] border-b border-white/[0.05]"
    >
      <div className="fluid-container flex justify-between items-center relative h-full">
        {/* Subtle background glows for the header */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none -mx-[5vw]" />
        
        {/* LEFT: Desktop Links */}
        <div className="hidden lg:flex gap-8 xl:gap-12 text-[10px] uppercase tracking-[0.4em] font-light text-white/40">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-white transition-all duration-700">{link.name}</Link>
          ))}
        </div>

        {/* CENTER: Brand Identity */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link to="/">
            <h1 className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.6em] md:tracking-[0.8em] uppercase text-white/90 cursor-pointer">Aura</h1>
          </Link>
        </div>

        {/* RIGHT: Desktop Links & Mobile Toggle */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
          <div className="hidden lg:flex gap-8 xl:gap-12 text-[10px] uppercase tracking-[0.4em] font-light text-white/40">
            {navLinks.slice(3).map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-white transition-all duration-700">{link.name}</Link>
            ))}
          </div>

          {/* --- MOBILE NAV ICON (Hamburger) --- */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 z-[110]"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-white/60 block transition-colors group-hover:bg-white" 
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[1px] bg-white/60 block" 
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-white/60 block" 
            />
          </button>

          {/* Identity Indicator Dot */}
          <div className="hidden xs:flex w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/5 items-center justify-center group cursor-pointer hover:border-white/20 transition-all duration-700">
              <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-8 p-12 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.5em] text-white/60 hover:text-white transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;