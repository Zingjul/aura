import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Activity, Zap, Wallet, Shield, Settings, ChevronRight } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center group cursor-pointer py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Active Indicator Line */}
      <AnimatePresence>
        {active && (
          <motion.div 
            layoutId="activeSide"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '24px' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        )}
      </AnimatePresence>

      {/* Icon Container */}
      <div className={`ml-6 transition-all duration-300 ${active ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Label Tooltip/Slide-out */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-16 px-3 py-1.5 glass-pill rounded-md whitespace-nowrap z-50 pointer-events-none"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Terminal' },
    { id: 'risk', icon: Activity, label: 'Risk Heatmap' },
    { id: 'signals', icon: Zap, label: 'Live Signals' },
    { id: 'portfolio', icon: Wallet, label: 'Portfolio' },
    { id: 'security', icon: Shield, label: 'Protocols' },
  ];

  return (
    <aside className="fixed left-0 bottom-0 md:top-0 h-16 md:h-full w-full md:w-20 flex flex-row md:flex-col items-center py-0 md:py-8 z-50 glass border-t md:border-t-0 md:border-r border-white/5">
      {/* Logo Area - Hidden on mobile bottom nav */}
      <div className="hidden md:flex mb-12 relative w-10 h-10 items-center justify-center">
        <div className="absolute inset-0 bg-white/5 rounded-full blur-xl" />
        <div className="w-6 h-6 border border-white/20 rounded-sm rotate-45 flex items-center justify-center">
           <div className="w-2 h-2 bg-white/80 rounded-full" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 w-full flex flex-row md:flex-col justify-around md:justify-start gap-2 h-full items-center md:items-stretch">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.id}
            {...item}
            active={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
        
        {/* Settings moved here for mobile row consistency */}
        <div className="md:hidden">
            <SidebarItem 
                icon={Settings} 
                label="Settings" 
                active={activeTab === 'settings'} 
                onClick={() => setActiveTab('settings')}
            />
        </div>
      </nav>

      {/* Footer / Settings - Only on Desktop Sidebar */}
      <div className="hidden md:block mt-auto w-full">
        <SidebarItem 
          icon={Settings} 
          label="Settings" 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
