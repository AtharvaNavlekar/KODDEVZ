import { motion } from 'motion/react';
import { Activity, ShieldCheck, Globe, Server } from 'lucide-react';

const metrics = [
  { icon: Activity, value: '10B+', label: 'API Requests Monthly' },
  { icon: Globe, value: '99.999%', label: 'Guaranteed SLA Uptime' },
  { icon: ShieldCheck, value: 'SOC 2', label: 'Type II Certified' },
  { icon: Server, value: '45ms', label: 'Global Latency Avg' },
];

const brands = ['MICROSOFT', 'AMAZON', 'STRIPE', 'SHOPIFY', 'NETFLIX', 'UBER'];

export function SocialProof() {
  return (
    <section className="py-24 bg-bg relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-text-secondary uppercase tracking-widest mb-8 font-mono">
            Trusted by Engineering Leaders At
          </p>

          {/* Brand Marquee */}
          <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap min-w-full hover:[animation-play-state:paused]"
            >
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-sans text-text-secondary/50 font-bold tracking-wider hover:text-text-primary/80 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Metrics/Trust Signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border hover:bg-card/80 transition-colors shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <metric.icon className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-2 tracking-tight">
                {metric.value}
              </h3>
              <p className="text-sm text-text-secondary font-medium uppercase tracking-wider font-mono">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
