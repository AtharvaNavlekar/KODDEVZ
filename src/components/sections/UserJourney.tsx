import { motion } from 'motion/react';
import { MessageSquare, Wand2, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Describe Your Vision',
    description:
      'Start by telling our AI what you want. "A platinum engagement ring with a 3-carat princess cut and sapphire side stones." It\'s that simple.',
    icon: MessageSquare,
    color: 'amber',
  },
  {
    title: 'AI Generation & Refinement',
    description:
      "Watch as 3D models are generated in real-time. Tweak details, swap stones, and adjust the band until it's absolutely perfect.",
    icon: Wand2,
    color: 'emerald',
  },
  {
    title: 'Master Craftsmanship',
    description:
      'Once approved, our master artisans craft your piece using ethically sourced materials. Delivered securely to your door in weeks.',
    icon: Truck,
    color: 'blue',
  },
];

export function UserJourney() {
  return (
    <section id="journey" className="py-32 bg-card relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex justify-between pointer-events-none opacity-20">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-text-primary to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-text-primary to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-text-primary to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
            A Frictionless Path to Perfection
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Forget intimidating boutiques and confusing terminology. We've streamlined the bespoke
            jewelry process into three effortless steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-[48px] md:left-1/2 md:-translate-x-1/2 w-0.5 h-[calc(100%-100px)] bg-black/5 dark:bg-white/5 rounded-full" />

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
                  <div className="relative aspect-video rounded-3xl bg-bg border border-black/5 dark:border-white/5 overflow-hidden group shadow-lg">
                    <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] transition-colors group-hover:bg-transparent" />

                    {/* Abstract Representation of the Step */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div
                        className={cn(
                          'w-full h-full rounded-2xl border-2 border-dashed flex items-center justify-center relative overflow-hidden transition-all duration-700',
                          step.color === 'amber'
                            ? 'border-amber-500/30 group-hover:bg-amber-500/5 group-hover:border-amber-500/50'
                            : step.color === 'emerald'
                              ? 'border-emerald-500/30 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/50'
                              : 'border-blue-500/30 group-hover:bg-blue-500/5 group-hover:border-blue-500/50'
                        )}
                      >
                        <step.icon
                          className={cn(
                            'w-12 h-12 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500',
                            step.color === 'amber'
                              ? 'text-amber-500'
                              : step.color === 'emerald'
                                ? 'text-emerald-500'
                                : 'text-blue-500'
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
                  className="absolute left-[48px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-[6px] border-bg flex items-center justify-center z-10 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <span className="text-xl font-bold font-serif text-text-primary">
                    {index + 1}
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
