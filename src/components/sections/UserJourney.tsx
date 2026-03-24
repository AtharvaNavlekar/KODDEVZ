import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Terminal, Settings, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Initialize Workspace',
    description:
      'Connect your existing repositories or use our CLI to spin up a new project. We automatically detect your framework and configure optimal build environments.',
    icon: Terminal,
    color: 'blue',
  },
  {
    title: 'Configure Policies',
    description:
      'Define deployment rules, security policies, and edge routing logic using our declarative configuration language or visual editor.',
    icon: Settings,
    color: 'indigo',
  },
  {
    title: 'Deploy & Observe',
    description:
      'Push to any branch to trigger an immutable deployment. Monitor performance, errors, and user metrics in real-time through our centralized observability dashboard.',
    icon: LineChart,
    color: 'cyan',
  },
];

export function UserJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="py-32 bg-card relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex justify-between pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent-cyan to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent-blue to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent-violet to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-text-primary">
            Streamlined Integration Pipeline
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Eliminate complex orchestration overhead. From initial commit to global availability in
            three seamless phases.
          </p>
        </div>

        <div className="relative" ref={ref}>
          {/* Connecting Line */}
          <div className="absolute top-12 left-[48px] md:left-1/2 md:-translate-x-1/2 w-0.5 h-[calc(100%-100px)] bg-border rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 w-full h-full bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-violet rounded-full"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-video rounded-3xl bg-bg border border-border overflow-hidden group shadow-lg">
                    <div className="absolute inset-0 bg-black/[0.05] transition-colors group-hover:bg-transparent" />

                    {/* Abstract Representation of the Step */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 bg-card/50">
                      <div
                        className={cn(
                          'w-full h-full rounded-2xl border-2 border-dashed flex items-center justify-center relative overflow-hidden transition-all duration-700 backdrop-blur-sm',
                          step.color === 'cyan'
                            ? 'border-accent-cyan/30 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/50'
                            : step.color === 'blue'
                              ? 'border-accent-blue/30 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/50'
                              : 'border-accent-violet/30 group-hover:bg-accent-violet/10 group-hover:border-accent-violet/50'
                        )}
                      >
                        <step.icon
                          className={cn(
                            'w-12 h-12 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500',
                            step.color === 'cyan'
                              ? 'text-accent-cyan'
                              : step.color === 'blue'
                                ? 'text-accent-blue'
                                : 'text-accent-violet'
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                  className="absolute left-[48px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-[4px] border-bg flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                >
                  <span className="text-xl font-bold font-mono text-text-primary">
                    0{index + 1}
                  </span>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className={cn(
                    'flex-1 pl-28 md:pl-0',
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
