import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Web', 'Mobile', 'AI', 'IoT'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'A high-performance storefront with real-time inventory and seamless checkout.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    span: 'md:col-span-2 md:row-span-2',
    image: 'https://picsum.photos/seed/ecommerce/800/800',
  },
  {
    id: 2,
    title: 'AI Writing Assistant',
    category: 'AI',
    description: 'Context-aware content generation tool powered by advanced LLMs.',
    techStack: ['Next.js', 'OpenAI', 'Tailwind CSS'],
    span: 'md:col-span-1 md:row-span-1',
    image: 'https://picsum.photos/seed/aiwriter/400/400',
  },
  {
    id: 3,
    title: 'Fintech Dashboard',
    category: 'Web',
    description: 'Real-time financial analytics and reporting interface.',
    techStack: ['Vue.js', 'Python', 'Django', 'D3.js'],
    span: 'md:col-span-1 md:row-span-1',
    image: 'https://picsum.photos/seed/fintech/400/400',
  },
  {
    id: 4,
    title: 'Fitness Tracker App',
    category: 'Mobile',
    description: 'Cross-platform mobile app for comprehensive workout tracking.',
    techStack: ['React Native', 'Firebase', 'Redux'],
    span: 'md:col-span-1 md:row-span-2',
    image: 'https://picsum.photos/seed/fitness/400/800',
  },
  {
    id: 5,
    title: 'Smart Home Hub',
    category: 'IoT',
    description: 'Centralized control panel for managing connected IoT devices.',
    techStack: ['React', 'GraphQL', 'AWS IoT'],
    span: 'md:col-span-2 md:row-span-1',
    image: 'https://picsum.photos/seed/smarthome/800/400',
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    category: 'Web',
    description: 'Deep insights and engagement tracking for social platforms.',
    techStack: ['Svelte', 'Express', 'MongoDB'],
    span: 'md:col-span-1 md:row-span-1',
    image: 'https://picsum.photos/seed/social/400/400',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="py-32 bg-bg relative border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Work</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Explore our recent projects. We build scalable, performant, and beautiful applications
            across various domains.
          </p>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="portfolio-grid"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue ${
                  activeCategory === category
                    ? 'bg-text-primary text-bg shadow-md scale-105'
                    : 'bg-black/5 dark:bg-white/5 text-text-secondary hover:bg-black/10 dark:hover:bg-white/10 hover:text-text-primary hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          layout
          id="portfolio-grid"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px] md:auto-rows-[320px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                className={`group relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 focus-within:ring-2 focus-within:ring-accent-blue focus-within:ring-offset-2 ${
                  activeCategory === 'All'
                    ? project.span
                    : 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-30 mix-blend-luminosity group-hover:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-black/40 dark:bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base line-clamp-2 mb-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-8">
                    {project.description}
                  </p>

                  {/* Tech Stack (Hidden by default, shown on hover) */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex flex-wrap gap-2 pointer-events-none">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-black/60 dark:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-lg"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Invisible Focus target for a11y */}
                  <a
                    href={`#project-${project.id}`}
                    className="absolute inset-0 focus:outline-none"
                    aria-label={`View details for ${project.title}`}
                  >
                    <span className="sr-only">View project details</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
