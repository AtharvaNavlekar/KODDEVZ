import { motion } from 'motion/react';
import { MessageSquareText, Database, Rocket, Users, Palette, CodeXml } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Build apps using words',
    description:
      'Describe your idea in plain English. Our AI co-founder translates your vision into production-ready code instantly.',
    icon: MessageSquareText,
    className: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    title: 'Real backend, real database',
    description:
      'Not just a prototype. We provision scalable PostgreSQL databases and robust APIs.',
    icon: Database,
    className: 'col-span-1',
  },
  {
    title: 'Go live in one click',
    description: 'Deploy instantly to enterprise-grade infrastructure. No DevOps required.',
    icon: Rocket,
    className: 'col-span-1',
  },
  {
    title: 'Never build alone',
    description: 'Your AI co-founder is available 24/7 to brainstorm, debug, and iterate.',
    icon: Users,
    className: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Make beautiful apps',
    description: 'Pixel-perfect UIs powered by Tailwind CSS and modern design systems.',
    icon: Palette,
    className: 'col-span-1',
  },
  {
    title: 'No technical skills needed',
    description: 'Focus on your business logic. We handle the complex architecture and code.',
    icon: CodeXml,
    className: 'col-span-1',
  },
];

export function BentoFeatures() {
  return (
    <section id="features" className="py-32 bg-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Why builders choose KODDEVZ
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to go from idea to a fully functional, scalable application in
            record time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={cn(
                'group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between hover:border-border transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5',
                feature.className
              )}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-blue/10 dark:group-hover:bg-accent-blue/20 group-hover:border-accent-blue/30 group-hover:text-accent-blue transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-text-primary group-hover:text-accent-blue transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
