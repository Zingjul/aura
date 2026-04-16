import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import RiskHeatmap from './RiskHeatmap';
import TransactionFeed from './TransactionFeed';
import PortfolioIntel from './PortfolioIntel';
import AssetDetailDrawer from './AssetDetailDrawer';
import SecuritySettings from './SecuritySettings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    setIsDrawerOpen(true);
  };

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-sans relative">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 md:pl-20 pb-16 md:pb-0 h-screen flex flex-col overflow-hidden">
        {/* Dashboard Header */}
        <header className="h-16 py-3 px-4 md:px-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar">
             <div className="flex flex-col shrink-0">
               <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">System Status</span>
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500">Nominal</span>
               </div>
             </div>
             <div className="h-8 w-px bg-white/5 mx-1 hidden xs:block" />
             <div className="flex flex-col shrink-0">
               <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Last Updated</span>
               <span className="text-[11px] font-mono uppercase tracking-widest text-white/60">21:30:12 UTC</span>
             </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
             <div className="text-right hidden sm:block">
               <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 block">View Mode</span>
               <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest">{activeTab === 'settings' || activeTab === 'security' ? 'Security_Protocol' : 'Terminal_Active'}</span>
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center shrink-0">
                <span className="text-xs font-serif italic">A</span>
             </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-4 md:p-10 fluid-container overflow-y-auto custom-scrollbar no-scrollbar relative">
          <AnimatePresence mode="wait">
            {activeTab === 'settings' || activeTab === 'security' ? (
              <SecuritySettings key="security" />
            ) : (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-12 gap-4 md:gap-6"
              >
                {/* Top Row: Risk Heatmap */}
                <section className="col-span-12 xl:col-span-8">
                   <div className="h-full">
                      <RiskHeatmap onSquareClick={handleAssetClick} />
                   </div>
                </section>

                {/* Transaction Feed */}
                <section className="col-span-12 xl:col-span-4 xl:row-span-2 overflow-hidden">
                  <TransactionFeed />
                </section>

                {/* Stat Cards */}
                <section className="col-span-12 xl:col-span-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="aura-card glass p-6 min-h-[200px] flex flex-col justify-between">
                         <div>
                           <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Global Liquidity Pool</span>
                           <h4 className="text-2xl font-light mt-2 tracking-tight">$842.1B</h4>
                         </div>
                         <div className="h-20 flex items-end gap-1 mt-4">
                            {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                              <div key={i} className="flex-1 bg-white/10 rounded-t-[1px]" style={{ height: `${h}%` }} />
                            ))}
                         </div>
                      </div>
                      <div className="aura-card glass p-6 min-h-[200px] flex flex-col justify-between">
                         <div>
                           <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Neural Latency</span>
                           <h4 className="text-2xl font-light mt-2 tracking-tight">0.042ms</h4>
                         </div>
                         <div className="flex-1 flex items-center justify-center min-h-[80px]">
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                               <motion.div 
                                 animate={{ left: ['0%', '100%'] }}
                                 transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                 className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white/40 blur-[2px]"
                               />
                            </div>
                         </div>
                      </div>
                   </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <AssetDetailDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        assetData={selectedAsset} 
      />
    </div>
  );
};

export default Dashboard;
