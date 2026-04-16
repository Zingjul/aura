import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, BarChart3, Info, ShieldAlert } from 'lucide-react';

const AssetDetailDrawer = ({ isOpen, onClose, assetData }) => {
  if (!assetData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for extra blur and noise */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[20px]"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] z-[101] flex flex-col"
          >
            {/* The Glass Panel with Frosted Texture */}
            <div className="absolute inset-0 bg-white/[0.03] border-l border-white/10 shadow-2xl pointer-events-none" />
            
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="relative h-full flex flex-col p-6 md:p-10 overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white/70" />
                    </div>
                    <h2 className="text-2xl font-light tracking-tight">{assetData.label}</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Protocol ID: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}</span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${assetData.value > 0.6 ? 'border-rose-500/20 text-rose-500' : 'border-emerald-500/20 text-emerald-500'}`}>
                      {assetData.value > 0.6 ? 'Critical Risk' : 'Nominal Risk'}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-white/10"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>

              {/* Main Content Sections */}
              <div className="space-y-12">
                
                {/* 1. Depth Chart (Order Book Simulation) */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-4 h-4 text-white/30" />
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Liquidity Depth Chart</h3>
                  </div>
                  
                  <div className="h-48 flex items-end gap-[2px] relative group">
                    {/* Bids */}
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={`bid-${i}`} className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/30 transition-colors border-t border-emerald-500/20" 
                           style={{ height: `${20 + Math.random() * 60}%` }} />
                    ))}
                    {/* Asks */}
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={`ask-${i}`} className="flex-1 bg-rose-500/10 hover:bg-rose-500/30 transition-colors border-t border-rose-500/20" 
                           style={{ height: `${20 + Math.random() * 60}%` }} />
                    ))}
                    
                    {/* Mid Price Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 dashed" />
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[9px] uppercase tracking-widest text-white/20 bg-black/40 px-2 py-0.5">
                      Market Mid
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-widest text-white/30">Total Bids</span>
                      <span className="text-xs font-mono text-emerald-500/80">14.2M {assetData.label.split('-')[0]}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[8px] uppercase tracking-widest text-white/30">Total Asks</span>
                      <span className="text-xs font-mono text-rose-500/80">9.8M {assetData.label.split('-')[0]}</span>
                    </div>
                  </div>
                </section>

                {/* 2. Correlation Matrix Section */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <ShieldAlert className="w-4 h-4 text-white/30" />
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Cross-Asset Correlation</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {['ETH-L2', 'BTC-WBTC', 'USDC-DAI', 'LINK-ORCL'].map((other, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] uppercase tracking-widest text-white/70">{other}</span>
                          <span className="text-[10px] font-mono text-white/40">0.{Math.floor(Math.random() * 99)}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.random() * 100}%` }}
                            className="h-full bg-white/20"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Detailed Signal Intel */}
                <section className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-4 h-4 text-emerald-500/50" />
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Shepherd's Assessment</h3>
                  </div>
                  <p className="text-sm font-light text-white/60 leading-relaxed italic">
                    "Asset exhibits unusual divergence from broader {assetData.label} sector. Correlation with L1 liquidity is weakening. Recommend monitoring depth chart for institutional off-loading."
                  </p>
                </section>

              </div>
              
              {/* Footer Actions */}
              <div className="mt-auto pt-10 flex gap-4">
                <button className="flex-1 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-medium rounded hover:bg-white/90 transition-colors">
                  Initiate Exposure Hedge
                </button>
                <button className="flex-1 py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] font-medium rounded hover:bg-white/5 transition-colors">
                  Detailed Protocol Audit
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AssetDetailDrawer;
