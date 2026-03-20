import { motion } from "motion/react";
import { ChevronRight, Sparkles, LayoutTemplate, Database, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/20 via-accent-purple/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-text-secondary mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-accent-blue" />
          <span>Meet Your AI Co-Founder</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Your app ideas <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-text-primary to-text-secondary">
            deserve to exist.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
        >
          Refine your vision, plan and build with KODDEVZ. Generate production-ready applications with real backends, real databases, and AI. No technical skills needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-text-primary text-bg font-medium rounded-full hover:opacity-90 transition-all glow-button"
          >
            Start building
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text-primary font-medium rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        {/* Mock UI / App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
          <div className="relative rounded-2xl md:rounded-[2rem] border border-black/10 dark:border-white/10 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Mac window controls */}
            <div className="flex items-center px-6 py-4 border-b border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20" />
              </div>
              <div className="mx-auto text-xs font-medium text-text-secondary">Project Brief Successfully Generated!</div>
            </div>
            {/* App Content Mock */}
            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="h-8 w-1/3 bg-black/10 dark:bg-white/10 rounded-lg animate-pulse" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-black/5 dark:bg-white/5 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
                  <div className="h-4 w-4/6 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="h-10 w-32 bg-accent-blue/20 rounded-full border border-accent-blue/30 flex items-center justify-center gap-2 text-accent-blue text-sm">
                    <LayoutTemplate className="w-4 h-4" /> Frontend
                  </div>
                  <div className="h-10 w-32 bg-accent-purple/20 rounded-full border border-accent-purple/30 flex items-center justify-center gap-2 text-accent-purple text-sm">
                    <Database className="w-4 h-4" /> Backend
                  </div>
                </div>
              </div>
              <div className="col-span-1 border border-black/5 dark:border-white/5 rounded-xl p-6 bg-black/[0.02] dark:bg-white/[0.02] space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <Rocket className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  Recommended Actions
                </div>
                <div className="space-y-3">
                  <div className="h-12 w-full bg-black/5 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded-full border border-black/20 dark:border-white/20" />
                    <div className="h-2 w-24 bg-black/20 dark:bg-white/20 rounded" />
                  </div>
                  <div className="h-12 w-full bg-black/5 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded-full border border-black/20 dark:border-white/20" />
                    <div className="h-2 w-32 bg-black/20 dark:bg-white/20 rounded" />
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
