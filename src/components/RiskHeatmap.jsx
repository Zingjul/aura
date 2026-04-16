import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  'DeFi-L1', 'DeFi-L2', 'Stablecoins', 'NFT-Fi',
  'Yield-Agg', 'Lending', 'DEX', 'Cross-Chain',
  'Privacy', 'Governance', 'Oracle', 'Storage',
  'Compute', 'Social-Fi', 'Game-Fi', 'Infrastructure'
];

// Map 0-1 scale to the expensive colors
const getColor = (value) => {
  if (value > 0.8) return 'var(--color-risk-extreme)';
  if (value > 0.6) return 'var(--color-risk-high)';
  if (value > 0.4) return 'var(--color-risk-med)';
  if (value > 0.2) return 'var(--color-risk-low)';
  return 'var(--color-risk-safe)';
};

const HeatmapSquare = ({ value, label, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.01 }}
    whileHover={{ 
      scale: 1.05, 
      zIndex: 10,
      outline: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 0 20px rgba(0,0,0,0.5)'
    }}
    onClick={() => onClick({ value, label })}
    className="aspect-square rounded-[4px] relative group cursor-pointer"
    style={{ backgroundColor: getColor(value) }}
  >
    {/* Refined Hover Info */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-[4px] p-2 text-center pointer-events-none">
      <span className="text-[7px] uppercase tracking-widest text-white/60 mb-1">{label}</span>
      <span className="text-[10px] font-mono font-medium text-white">{(value * 100).toFixed(1)}%</span>
    </div>

    {/* Subtle Inner Glow for higher risk */}
    {value > 0.6 && (
      <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] pointer-events-none" />
    )}
  </motion.div>
);

const RiskHeatmap = ({ onSquareClick }) => {
  // Generate 8x8 grid (64 squares)
  const gridData = Array.from({ length: 64 }, (_, i) => ({
    id: i,
    value: Math.random(), // In real app, this would be real risk data
    sector: sectors[i % sectors.length]
  }));

  return (
    <div className="aura-card glass p-4 md:p-6 h-full flex flex-col">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h3 className="text-sm font-light tracking-[0.2em] text-white/90 uppercase">Risk Surface Analysis</h3>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mt-1">Cross-Sector Correlation Matrix</p>
        </div>
        <div className="flex gap-4">
           {/* Color Legend */}
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[var(--color-risk-extreme)]" />
             <span className="text-[9px] uppercase tracking-widest text-white/40">Critical</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[var(--color-risk-safe)]" />
             <span className="text-[9px] uppercase tracking-widest text-white/40">Stable</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-1.5 flex-1">
        {gridData.map((data, i) => (
          <HeatmapSquare 
            key={data.id} 
            index={i}
            value={data.value} 
            label={data.sector} 
            onClick={onSquareClick}
          />
        ))}
      </div>

      {/* Fixing the "floating grey blob" issue by ensuring a solid bottom section with defined borders */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-white/30">Avg. Exposure</span>
            <span className="text-xs font-mono text-white/80">42.8%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-white/30">Volatility Index</span>
            <span className="text-xs font-mono text-white/80">0.24 σ</span>
          </div>
        </div>
        <button className="px-3 py-1.5 border border-white/10 hover:border-white/20 rounded-md text-[9px] uppercase tracking-widest transition-colors">
          Export Report
        </button>
      </div>
    </div>
  );
};

export default RiskHeatmap;
