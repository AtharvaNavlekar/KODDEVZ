import { motion } from 'motion/react';
import { Send, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="relative py-32 bg-bg overflow-hidden border-t border-border">
      {/* High-Tech Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] opacity-30 pointer-events-none flex justify-center mix-blend-screen -z-10">
        <div className="absolute w-[800px] h-[800px] bg-accent-blue/10 blur-[150px] rounded-full translate-x-[-15%]" />
        <div className="absolute w-[600px] h-[600px] bg-accent-cyan/10 blur-[120px] rounded-full translate-x-[20%] translate-y-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left: Copy & Value Prop */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-widest mb-8 border border-accent-blue/20 w-fit"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-text-primary leading-[1.1]"
          >
            Scale your infrastructure{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue font-mono font-medium tracking-tighter block mt-2">
              flawlessly.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed max-w-md mb-12"
          >
            Speak with one of our highly specialized solutions architects. We'll evaluate your
            current architecture and outline a bespoke migration strategy to our global edge
            platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-card/50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-card/50 flex items-center justify-center text-xs font-bold text-text-primary backdrop-blur-md">
                10x
              </div>
            </div>
            <p className="text-sm text-text-secondary font-medium font-mono">
              Average ROI achieved
              <br />
              within 6 months.
            </p>
          </motion.div>
        </div>

        {/* Right: Lead Generation Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent-blue/5 rounded-[2rem] blur-xl -z-10" />
          <form
            onSubmit={handleSubmit}
            className="bg-card/80 backdrop-blur-2xl border border-border rounded-[2rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Subtle inner reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2 font-mono">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder:text-text-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2 font-mono">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder:text-text-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2 font-mono">
                  Engineering Team Size
                </label>
                <select className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>
                    Select size...
                  </option>
                  <option value="1-10">1-10 Engineers</option>
                  <option value="11-50">11-50 Engineers</option>
                  <option value="51-200">51-200 Engineers</option>
                  <option value="200+">200+ Engineers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2 font-mono">
                  Current Infrastructure Challenges
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the pain points you are experiencing with scaling or deployment..."
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none placeholder:text-text-secondary"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full group flex items-center justify-center gap-2 bg-text-primary text-bg font-mono font-semibold rounded-lg px-8 py-4 transition-all hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-70"
              >
                {status === 'idle' ? (
                  <>
                    <span>Request a Demo</span>
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
                    <span>Request Received!</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-text-secondary text-center mt-6">
              By submitting this form, you agree to our Terms of Service & Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
