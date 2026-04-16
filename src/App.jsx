import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Refined Global Background - Subtle Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[60%] md:w-[30%] h-[30%] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;