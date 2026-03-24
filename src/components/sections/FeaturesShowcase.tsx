import { motion, useScroll, useTransform } from 'motion/react';
import {
  Network,
  ShieldCheck,
  Workflow,
  LineChart,
  ServerCog,
  Settings2,
  Code2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

const features = [
  {
    title: 'Global Edge Network',
    description:
      'Deploy your applications to our globally distributed infrastructure in milliseconds. Experience zero-latency content delivery worldwide.',
    icon: Network,
    className: 'md:col-span-2 row-span-2 relative overflow-hidden group',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    ),
    visual: (
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-accent-cyan/20 to-transparent blur-3xl rounded-tl-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
    ),
  },
  {
    title: 'Zero-Trust Architecture',
    description:
      'Military-grade encryption at rest and in transit with identity-aware access controls.',
    icon: ShieldCheck,
    className: 'md:col-span-1',
  },
  {
    title: 'Automated CI/CD',
    description:
      'Ship to production with confidence using automated testing, linting, and staged rollouts.',
    icon: Workflow,
    className: 'md:col-span-1',
  },
  {
    title: 'Real-Time Observability',
    description:
      'Gain unprecedented insight into your stack with granular metrics, distributed tracing, and custom alerting.',
    icon: LineChart,
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Infinite Scalability',
    description:
      'Scale your infrastructure from zero to millions of requests automatically without ever provisioning a server.',
    icon: ServerCog,
    className: 'md:col-span-2',
  },
  {
    title: 'Advanced AIOps',
    description:
      'Predictive scaling and self-healing systems powered by our proprietary machine learning models.',
    icon: Settings2,
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
    <section id="platform" className="py-32 bg-bg relative" ref={containerRef}>
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <motion.div
          style={{ y }}
          className="absolute right-0 top-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px]"
        />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-6 border border-accent-blue/20"
          >
            <Code2 className="w-3.5 h-3.5" /> Core Infrastructure
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            The Definitive Digital Transformation Engine
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Eliminate operational overhead. Our cohesive platform provides everything you need to
            build, deploy, and scale enterprise applications securely.
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
                'group relative overflow-hidden rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border p-8 md:p-10 flex flex-col hover:border-accent-blue/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-blue/5',
                feature.className
              )}
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {feature.background}
              {feature.visual}

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-bg border border-border flex items-center justify-center mb-8 group-hover:bg-accent-blue group-hover:border-accent-cyan group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-text-primary group-hover:text-white transition-colors duration-500" />
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
                  <p className="text-text-secondary text-base leading-relaxed group-hover:text-text-primary/90 transition-colors">
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
