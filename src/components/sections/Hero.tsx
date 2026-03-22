import { motion } from 'motion/react';
import { ChevronRight, Sparkles, Diamond, Wand2, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-bg">
      {/* Background Gradients - elegant light mode friendly */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] opacity-60 pointer-events-none flex justify-center items-center mix-blend-screen dark:mix-blend-screen dark:opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-amber-400/20 dark:bg-amber-500/10 blur-[130px] rounded-full translate-x-[-20%]" />
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 dark:bg-emerald-500/10 blur-[100px] rounded-full translate-x-[20%] translate-y-[10%]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs sm:text-sm font-medium text-text-primary mb-8 backdrop-blur-xl shadow-sm hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-text-primary to-text-secondary group-hover:to-text-primary transition-all duration-300 tracking-wide font-serif">
            The Future of Fine Jewelry
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-6 leading-[1.05] text-balance max-w-5xl text-text-primary"
        >
          Design your dream ring{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-700 dark:from-amber-200 dark:via-amber-400 dark:to-amber-600 drop-shadow-[0_0_30px_rgba(251,191,36,0.1)]">
            with AI.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed text-balance"
        >
          Describe your perfect piece in plain English, and watch our cutting-edge AI generate
          production-ready 3D models in real-time.{' '}
          <span className="text-text-primary font-medium">Your bespoke journey starts here.</span>
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
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full transition-all border border-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative z-10 text-[16px] tracking-wide">Try Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text-primary font-semibold rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 backdrop-blur-md text-[15px] shadow-sm"
          >
            <Diamond className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            Explore Marketplace
          </motion.button>
        </motion.div>

        {/* Interactive AI Preview UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-16 relative xl:max-w-5xl"
        >
          {/* Subtle glow behind UI */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent blur-3xl rounded-[3rem] -z-10" />

          <div className="relative rounded-2xl md:rounded-[2rem] border border-black/10 dark:border-white/10 bg-card/60 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
            {/* UI Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-text-secondary bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full">
                <Wand2 className="w-3.5 h-3.5" /> AI Engine Active
              </div>
            </div>

            {/* UI Content */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
              {/* Prompt Input Chat Interface */}
              <div className="flex-1 flex flex-col justify-end space-y-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-card z-10 pointer-events-none" />

                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex-shrink-0" />
                    <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        I'd love an engagement ring. Rose gold band, a 2-carat oval cut center
                        diamond, with a hidden halo setting and delicate pavé details on the band.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 p-1.5 flex-shrink-0 flex items-center justify-center">
                      <Sparkles className="w-full h-full text-text-primary" />
                    </div>
                    <div className="bg-black/5 dark:bg-white/10 p-4 rounded-2xl rounded-tr-none border border-black/5 dark:border-white/10 w-full max-w-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="h-2 w-2 rounded-full bg-amber-500 animate-bounce"
                          style={{ animationDelay: '0ms' }}
                        />
                        <div
                          className="h-2 w-2 rounded-full bg-amber-500 animate-bounce"
                          style={{ animationDelay: '150ms' }}
                        />
                        <div
                          className="h-2 w-2 rounded-full bg-amber-500 animate-bounce"
                          style={{ animationDelay: '300ms' }}
                        />
                        <span className="text-xs text-text-secondary ml-2 font-medium">
                          Generating 3D Models...
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mt-3">
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="relative mt-4">
                  <input
                    disabled
                    placeholder="Describe your perfect piece..."
                    className="w-full bg-bg border border-black/10 dark:border-white/10 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-text-primary rounded-full flex items-center justify-center cursor-not-allowed">
                    <ArrowRight className="w-4 h-4 text-bg" />
                  </div>
                </div>
              </div>

              {/* 3D Visualizer Placeholder */}
              <div className="flex-1 min-h-[300px] border border-black/10 dark:border-white/10 rounded-2xl bg-black/[0.03] dark:bg-white/[0.02] relative overflow-hidden flex items-center justify-center group cursor-pointer">
                {/* Diamond Shine Effect */}
                <div className="absolute w-full h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                {/* Center placeholder image/shape to emulate a ring */}
                <div className="relative w-48 h-48">
                  <motion.div
                    animate={{ rotateZ: 360, rotateY: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full border-[6px] border-amber-300/40 dark:border-amber-700/40 rounded-full shadow-[inset_0_0_40px_rgba(251,191,36,0.1),0_0_40px_rgba(251,191,36,0.1)] absolute"
                    style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  />
                  <motion.div
                    animate={{ rotateZ: -360, rotateX: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full border-[2px] border-text-secondary/20 rounded-full absolute"
                    style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  />
                  {/* Central "Diamond" */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-white/90 shadow-[0_0_60px_rgba(255,255,255,1)] backdrop-blur-md rotate-45 border-2 border-white flex items-center justify-center">
                    <div className="w-8 h-8 border border-black/10 dark:border-white/20" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="h-1.5 w-6 rounded-full bg-text-primary" />
                  <div className="h-1.5 w-1.5 rounded-full bg-text-primary/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-text-primary/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
