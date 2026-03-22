import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Diamond, Shield, Eye, Box, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

const features = [
  {
    title: 'AI Generative Design',
    description:
      'Input your vision in text, and our AI constructs a high-fidelity 3D model in seconds. Iterate instantly with follow-up prompts.',
    icon: Sparkles,
    className: 'md:col-span-2 row-span-2 relative overflow-hidden group',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    ),
    visual: (
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-amber-500/20 to-transparent blur-3xl rounded-tl-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
    ),
  },
  {
    title: 'Precision 3D Viewing',
    description: 'Inspect every facet and prong from 360 degrees before casting.',
    icon: Box,
    className: 'md:col-span-1',
  },
  {
    title: 'Real-Time Pricing',
    description: 'Algorithmic cost estimation based on daily gold and diamond markets.',
    icon: RefreshCw,
    className: 'md:col-span-1',
  },
  {
    title: 'Curated Marketplace',
    description: 'Explore exquisite pre-designed pieces by top contemporary jewelers.',
    icon: Diamond,
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Virtual Try-On',
    description:
      'See how the ring looks on your own hand using our cutting-edge AR technology powered by advanced hand occlusion.',
    icon: Eye,
    className: 'md:col-span-2',
  },
  {
    title: 'Certified Authenticity',
    description: 'Every gem comes with blockchain-backed certification.',
    icon: Shield,
    className: 'md:col-span-1',
  },
];

export function FeaturesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="features" className="py-32 bg-bg relative" ref={containerRef}>
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <motion.div
          style={{ y }}
          className="absolute right-0 top-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"
        />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-amber-500/20"
          >
            <Diamond className="w-3.5 h-3.5" /> Platform Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-serif">
            A New Paradigm in Jewelry
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Eliminate the middleman and the uncertainty. We combine artificial intelligence, AR, and
            master craftsmanship into one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.11, 0.81, 0.99] }}
              whileHover={{ y: -5 }}
              className={cn(
                'group relative overflow-hidden rounded-[2rem] bg-card/40 backdrop-blur-xl border border-black/5 dark:border-white/5 p-8 md:p-10 flex flex-col hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5 dark:hover:shadow-amber-500/10',
                feature.className
              )}
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {feature.background}
              {feature.visual}

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-bg transition-all duration-500 group-hover:rotate-6">
                  <feature.icon className="w-6 h-6 text-text-primary group-hover:text-bg transition-colors duration-500" />
                </div>
                <div
                  className={cn(
                    'mt-auto',
                    feature.className.includes('row-span-2') ? 'max-w-md' : ''
                  )}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-text-primary tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed group-hover:text-text-primary/80 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
