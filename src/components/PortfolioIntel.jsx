import React from 'react';
import { motion } from 'framer-motion';
import AssetChart from './AssetChart';

const PortfolioIntel = () => {
  return (
    <div className="aura-card glass p-8 h-full relative group">
      {/* Light Sweep Animation */}
      <motion.div 
        initial={{ left: "-100%" }}
        animate={{ left: "200%" }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
        className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-20deg] pointer-events-none"
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Portfolio Intelligence</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90">
              $4,821,090<span className="text-white/20 text-2xl ml-1 font-extralight font-mono">.00</span>
            </h2>
          </div>
          <div className="px-3 py-1 glass-pill rounded-full flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">+12.42%</span>
          </div>
        </div>

        <div className="h-48 mb-8 flex items-center justify-center border-y border-white/5 bg-white/[0.01]">
            {/* Placeholder for real chart - AssetChart would go here if available as a standalone */}
            <AssetChart />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Risk Adjusted', val: 'Superior', detail: '0.84 SR' },
            { label: 'Asset Class', val: 'Multi-Chain', detail: '4 Layers' },
            { label: 'Yield Avg', val: '8.42%', detail: 'Annualized' },
            { label: 'Volatility', val: 'Low', detail: 'Conservative' }
          ].map((item, i) => (
            <div key={i} className="px-4 py-3 border border-white/5 rounded-xl hover:bg-white/[0.02] transition-colors">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-1">{item.label}</p>
              <p className="text-xs font-light text-white/80 tracking-wide mb-1">{item.val}</p>
              <p className="text-[8px] font-mono text-white/20 uppercase">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solid bottom edge to fix the "floating grey blob" issue */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
    </div>
  );
};

export default PortfolioIntel;
