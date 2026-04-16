import { motion } from 'framer-motion';

const AssetChart = () => {
  const points = "0,80 50,75 100,85 150,60 200,65 250,40 300,45 350,20 400,25 450,5 500,10";
  
  return (
    <div className="w-full h-32 relative group">
      <svg 
        viewBox="0 0 500 100" 
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Gradient mask for the line */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,1)" />
          </linearGradient>
          
          <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Fill area */}
        <motion.path
          d={`M ${points} V 100 H 0 Z`}
          fill="url(#fillGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* The line itself */}
        <motion.polyline
          points={points}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Dot at the end */}
        <motion.circle
          cx="500"
          cy="10"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, type: "spring" }}
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      </svg>
    </div>
  );
};

export default AssetChart;
