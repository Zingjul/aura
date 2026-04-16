import { motion } from 'framer-motion';
import AssetChart from './AssetChart';

const GlassWidget = () => {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      className="glass rounded-[32px] p-8 md:p-12 w-full max-w-2xl relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10"
    >
      {/* Light sweep animation */}
      <motion.div 
        initial={{ left: "-100%" }}
        animate={{ left: "200%" }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
        className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-25deg] pointer-events-none"
      />
      
      {/* Glossy highlight */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-3">Portfolio Intel</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white/90">
              $4,821,090<span className="text-white/20 text-3xl ml-1 font-extralight">.00</span>
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-400">+12.4%</span>
          </div>
        </div>

        <div className="mb-10">
          <AssetChart />
        </div>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Risk Adjusted</p>
            <p className="text-sm font-light text-white/80 tracking-wide">Superior</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Asset Class</p>
            <p className="text-sm font-light text-white/80 tracking-wide">Multi-Chain</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Yield Avg</p>
            <p className="text-sm font-light text-white/80 tracking-wide">8.42%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GlassWidget;
