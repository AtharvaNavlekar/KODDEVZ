import { motion } from 'motion/react';
import { Send, ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-bg overflow-hidden border-t border-black/5 dark:border-white/5"
    >
      {/* Soft Premium Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] opacity-50 pointer-events-none flex justify-center mix-blend-multiply dark:mix-blend-screen -z-10">
        <div className="absolute w-[800px] h-[800px] bg-amber-200/40 dark:bg-amber-500/10 blur-[150px] rounded-full translate-x-[-15%]" />
        <div className="absolute w-[600px] h-[600px] bg-emerald-200/40 dark:bg-emerald-500/10 blur-[120px] rounded-full translate-x-[20%] translate-y-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left: Copy & Value Prop */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-8 border border-amber-500/20 w-fit"
          >
            <Mail className="w-3.5 h-3.5" /> Start Your Commission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif text-text-primary leading-[1.1]"
          >
            Bring your vision to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-300 dark:to-amber-500">
              radiant life.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed max-w-md mb-12"
          >
            Whether you have a fully formed concept or just a spark of inspiration, our AI engine
            and master jewelers are ready. Tell us about your dream piece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-black/10 dark:bg-white/10" />
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-black/20 dark:bg-white/20" />
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-black/30 dark:bg-white/30 flex items-center justify-center text-xs font-medium text-text-primary backdrop-blur-md">
                +10k
              </div>
            </div>
            <p className="text-sm text-text-secondary font-medium">
              Join thousands of clients who
              <br />
              designed their perfect ring.
            </p>
          </motion.div>
        </div>

        {/* Right: Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 rounded-[2rem] blur-xl -z-10" />
          <form
            onSubmit={handleSubmit}
            className="bg-card/60 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Subtle inner reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent" />

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-text-secondary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-text-secondary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Your Design Concept
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="I'm looking for an oval cut diamond with a rose gold pavé band..."
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none placeholder:text-text-secondary/50"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full group flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl px-8 py-4 transition-all hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-70"
              >
                {status === 'idle' ? (
                  <>
                    <span>Generate AI Concepts</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : status === 'sending' ? (
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      className="w-2 h-2 rounded-full bg-current"
                    />
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-current"
                    />
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-current"
                    />
                  </div>
                ) : (
                  <>
                    <span>Request Submitted!</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-text-secondary text-center mt-6">
              Your information is secure. We never share your concepts.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
