import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ArrowUpRight, ArrowDownRight, Fingerprint } from 'lucide-react';

const mockSignals = [
  { id: 1, type: 'Liquidity Move', protocol: 'Aave V3', amount: '2.4M USDC', hash: '0x71c...a2b', confidence: 99.8, trend: 'up' },
  { id: 2, type: 'Whale Entry', protocol: 'Uniswap', amount: '812 ETH', hash: '0x3a1...f9e', confidence: 94.2, trend: 'up' },
  { id: 3, type: 'Yield Spike', protocol: 'Pendle', amount: '12.4% APY', hash: '0x992...c44', confidence: 88.5, trend: 'down' },
  { id: 4, type: 'Protocol Update', protocol: 'MakerDAO', amount: 'Governance', hash: '0xbb1...e22', confidence: 99.9, trend: 'neutral' },
  { id: 5, type: 'Arbitrage Opp', protocol: 'Curve', amount: '0.42%', hash: '0xcc3...d88', confidence: 76.4, trend: 'up' },
  { id: 6, type: 'Stable Peg', protocol: 'Lido', amount: 'stETH/ETH', hash: '0xdd4...d11', confidence: 98.1, trend: 'neutral' },
];

const SignalRow = ({ signal, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group flex items-center justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-4 -mx-4 transition-colors transition-duration-300"
  >
    <div className="flex items-center gap-4">
      <div className={`p-1.5 rounded-sm border border-white/5 ${signal.trend === 'up' ? 'text-emerald-400/80 bg-emerald-400/5' : signal.trend === 'down' ? 'text-burnt-umber bg-burnt-umber/5' : 'text-white/40 bg-white/5'}`}>
        {signal.trend === 'up' ? <ArrowUpRight size={14} /> : signal.trend === 'down' ? <ArrowDownRight size={14} /> : <Radio size={14} />}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium">{signal.type}</p>
        <p className="text-[9px] text-white/30 uppercase tracking-widest mt-0.5">{signal.protocol}</p>
      </div>
    </div>

    <div className="text-right">
      <p className="text-[11px] font-mono font-medium text-white/80 tabular-nums">
        {signal.amount}
      </p>
      <p className="text-[9px] font-mono text-white/20 mt-0.5 uppercase tracking-tighter">
        {signal.hash}
      </p>
    </div>

    <div className="w-24 text-right">
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-mono font-bold text-white tabular-nums">
          {signal.confidence.toFixed(1)}%
        </span>
        <div className="w-16 h-1 bg-white/5 overflow-hidden mt-1.5 flex justify-end">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${signal.confidence}%` }}
            className="h-full bg-white/20"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const TransactionFeed = () => {
  return (
    <div className="aura-card glass p-6 h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <h3 className="text-sm font-light tracking-[0.2em] text-white/90 uppercase">Live Intelligence Feed</h3>
        </div>
        <div className="flex items-center gap-2">
            <Fingerprint size={16} className="text-white/20" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">Verified Nodes: 12</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        {mockSignals.map((signal, i) => (
          <SignalRow key={signal.id} signal={signal} index={i} />
        ))}
        {/* Repeating to show scrollbar */}
        {mockSignals.map((signal, i) => (
          <SignalRow key={`repeat-${signal.id}`} signal={signal} index={i + 6} />
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-white/5">
         <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/30 font-mono">
            <span>Latency: 12ms</span>
            <span>Uptime: 99.998%</span>
            <span>Block: 19842102</span>
         </div>
      </div>
    </div>
  );
};

export default TransactionFeed;
