import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Wifi, Power, Lock, Server, Smartphone, Globe, Eye, EyeOff } from 'lucide-react';

const GlassInput = ({ label, placeholder, type = "text", value, onChange, icon: Icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 ml-1">{label}</label>
      <div className={`relative group transition-all duration-500 ${isFocused ? 'scale-[1.01]' : ''}`}>
        {/* Glow Effect on Focus */}
        <div className={`absolute -inset-[1px] bg-gradient-to-r from-white/20 to-transparent rounded-lg blur-[2px] transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className={`relative flex items-center glass rounded-lg border transition-all duration-300 ${isFocused ? 'border-white/40 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03] group-hover:border-white/20'}`}>
          <div className="pl-4 text-white/30">
            <Icon size={16} />
          </div>
          <input
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent border-none outline-none py-4 px-4 text-sm font-light tracking-wide text-white placeholder:text-white/10"
          />
          {type === 'password' && (
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="pr-4 text-white/20 hover:text-white/60 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const SecuritySettings = () => {
  const [apiKey, setApiKey] = useState('********************************');
  const [privateKey, setPrivateKey] = useState('************************************************');
  const [isArmed, setIsArmed] = useState(false);

  const connections = [
    { id: 1, type: 'Server', label: 'DRF_MAINNET_NODE_01', ip: '192.168.1.104', status: 'Secure', icon: Server },
    { id: 2, type: 'Desktop', label: 'SHEPHERD_STATION_ALPHA', ip: '10.0.0.42', status: 'Active', icon: Globe },
    { id: 3, type: 'Mobile', label: 'ENCRYPTED_MOBILE_OS', ip: '172.16.0.12', status: 'Standby', icon: Smartphone },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto flex flex-col gap-6 lg:gap-10 pb-10"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10">
        
        {/* Left Column: Security Credentials */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl border border-white/10 glass flex items-center justify-center shrink-0">
              <Shield className="text-white/70" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-light tracking-tight text-white/90">Shepherd Control Center</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Lvl 01 Protocol Override</p>
            </div>
          </div>

          <div className="aura-card glass p-6 md:p-8 space-y-6 md:space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Lock size={120} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassInput 
                label="API Gateway Key" 
                icon={Key} 
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <GlassInput 
                label="Solidity RPC Endpoint" 
                icon={Globe} 
                placeholder="https://mainnet.infura.io/v3/..."
              />
            </div>

            <GlassInput 
              label="Neural Private Key" 
              icon={Lock} 
              type="password"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
            />

            <div className="pt-4 flex flex-wrap gap-3 md:gap-4">
              <button className="flex-1 md:flex-none px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-lg text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap">
                Rotate Keys
              </button>
              <button className="flex-1 md:flex-none px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-lg text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap">
                Export Backup
              </button>
            </div>
          </div>

          {/* Active Connections List */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <Wifi size={14} className="text-emerald-500" />
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Active Aura Nodes</h3>
              </div>
              <span className="text-[10px] font-mono text-white/20">3 SESSIONS</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {connections.map((conn) => (
                <div key={conn.id} className="aura-card glass p-4 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 shrink-0">
                      <conn.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-medium text-white/80 truncate">{conn.label}</h4>
                      <p className="text-[10px] font-mono text-white/20 mt-0.5">{conn.ip}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border ${conn.status === 'Secure' ? 'border-emerald-500/20 text-emerald-500' : 'border-white/10 text-white/40'}`}>
                      {conn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: The Kill Switch */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="aura-card glass flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[400px]">
            {/* Background Hazard Stripes */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, #fff 40px, #fff 80px)' }} />
            
            <div className="relative mb-12">
              {/* Glass Cover Simulation */}
              <div className={`absolute -inset-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-700 flex items-center justify-center ${isArmed ? '-translate-y-24 opacity-0 rotate-12 scale-110 pointer-events-none' : 'opacity-100 z-10'}`}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full" />
                 <div className="text-[8px] uppercase tracking-[0.4em] text-white/40 whitespace-nowrap mt-40">
                   Security Seal
                 </div>
              </div>

              <motion.button
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => isArmed ? alert('SYSTEM PURGED') : setIsArmed(true)}
                className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center gap-2 transition-all duration-500 ${isArmed ? 'bg-rose-600 shadow-[0_0_60px_rgba(225,29,72,0.4)] animate-pulse' : 'bg-rose-950/40 border border-rose-500/30'}`}
              >
                <Power size={40} className={isArmed ? 'text-white' : 'text-rose-500/60'} />
                <span className={`text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold ${isArmed ? 'text-white' : 'text-rose-500/60'}`}>
                  {isArmed ? 'EXECUTE PURGE' : 'KILL SWITCH'}
                </span>
              </motion.button>
            </div>

            <div className="max-w-xs mx-auto">
              <h3 className={`text-sm font-light mb-2 uppercase tracking-widest italic transition-colors ${isArmed ? 'text-rose-500' : 'text-rose-500/60'}`}>
                {isArmed ? 'CRITICAL: AUTHORIZATION CONFIRMED' : 'Emergency Override Protocol'}
              </h3>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Immediately disconnects all RPC nodes, purges local session cache, and burns API credentials.
              </p>
              
              {!isArmed && (
                <button 
                  onClick={() => setIsArmed(true)}
                  className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/60 transition-colors flex items-center gap-2 mx-auto"
                >
                  <Lock size={12} /> Lift Security Seal
                </button>
              )}
            </div>
          </div>

          <div className="aura-card glass p-6 bg-gradient-to-br from-white/[0.05] to-transparent">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="text-xs font-medium text-white/80 mb-1 uppercase tracking-wider">Audit History</h4>
                <p className="text-[10px] text-white/30 leading-relaxed">
                  Last security audit: 2 hours ago. No anomalies detected in Solidity bridge or DRF endpoints.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default SecuritySettings;
