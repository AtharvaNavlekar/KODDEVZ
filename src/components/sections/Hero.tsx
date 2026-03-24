import { motion } from 'motion/react';
import { ChevronRight, Terminal, Cpu, Activity, Layers, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-bg">
      {/* High-Tech Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] opacity-40 pointer-events-none flex justify-center items-center mix-blend-screen">
        <div className="absolute w-[600px] h-[600px] bg-accent-blue/20 blur-[130px] rounded-full translate-x-[-20%]" />
        <div className="absolute w-[500px] h-[500px] bg-accent-cyan/20 blur-[100px] rounded-full translate-x-[20%] translate-y-[10%]" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-4 w-full">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs sm:text-sm font-medium text-text-primary mb-8 backdrop-blur-xl shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:border-accent-blue/40 transition-all cursor-pointer group"
        >
          <Activity className="w-4 h-4 text-accent-cyan" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-blue font-mono font-semibold tracking-wide">
            v3.0 ENTERPRISE ENGINE RELEASED
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-6 leading-[1.05] text-balance max-w-5xl text-text-primary"
        >
          Scale infinite.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            Ship faster.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed text-balance"
        >
          The foundational technology platform for modern engineering teams. Eliminate technical
          debt, automate workflows, and accelerate your digital transformation with unparalleled
          reliability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-4 bg-text-primary text-bg font-semibold rounded-lg transition-all border border-transparent shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative z-10 text-[16px] tracking-wide">Request a Demo</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-card/50 border border-border text-text-primary font-semibold rounded-lg hover:bg-card hover:border-accent-blue/30 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 backdrop-blur-md text-[15px] shadow-sm font-mono"
          >
            <Terminal className="w-4 h-4 text-accent-cyan" />
            View Documentation
          </motion.button>
        </motion.div>

        {/* Interactive Dashboard Preview UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-20 relative xl:max-w-5xl"
        >
          {/* Subtle glow behind UI */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent blur-3xl rounded-[1rem] -z-10" />

          <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
            {/* UI Header / Mac-style window controls */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-black/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-black/40 px-3 py-1 rounded-md border border-border/50">
                <Code2 className="w-3.5 h-3.5" /> deploy.sh
              </div>
            </div>

            {/* UI Content - Terminal/Dashboard Hybrid */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 bg-[#0B0F19]">
              {/* Sidebar/Navigation Mock */}
              <div className="hidden md:flex flex-col gap-4 w-48 border-r border-border/50 pr-4">
                <div className="flex items-center gap-3 text-text-primary text-sm font-medium py-2 px-3 bg-accent-blue/10 rounded-md border border-accent-blue/20">
                  <Cpu className="w-4 h-4 text-accent-cyan" /> Clusters
                </div>
                <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary text-sm font-medium py-2 px-3 transition-colors cursor-pointer">
                  <Layers className="w-4 h-4" /> Databases
                </div>
                <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary text-sm font-medium py-2 px-3 transition-colors cursor-pointer">
                  <Activity className="w-4 h-4" /> Monitoring
                </div>
              </div>

              {/* Main Terminal View */}
              <div className="flex-1 space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-accent-blue">❯</span>
                  <span className="text-text-primary">koddevz init --cluster prod-useast-1</span>
                </div>
                <div className="pl-5 space-y-2 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Provisioning architecture...{' '}
                    <span className="text-xs opacity-50">12ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Establishing zero-trust mesh...{' '}
                    <span className="text-xs opacity-50">8ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Compiling edge functions...{' '}
                    <span className="text-xs opacity-50">45ms</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-6">
                  <span className="text-accent-blue">❯</span>
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-text-primary">
                      Deploying artifacts to global edge network
                    </span>

                    {/* Progress Bar Animation */}
                    <div className="h-2 w-full max-w-md bg-black rounded-full overflow-hidden mt-2 border border-border/50">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </div>
                    <span className="text-accent-cyan text-xs mt-1 animate-pulse">
                      SYSTEM OPTIMIZED. READY.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
