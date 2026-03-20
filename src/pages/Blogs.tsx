import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Blogs() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Blogs</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-xl mb-12 leading-relaxed">
            Insights, tutorials, and deep-dives from the KODDEVZ engineering team. Let's build the future together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
            <article className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full">Engineering</span>
              <h3 className="text-xl font-semibold text-text-primary mt-4 mb-2">Scaling Next.js for Enterprise</h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                Learn how we dramatically improved SSR rendering times and optimized edge caching for a client with 1M+ daily active users.
              </p>
              <span className="text-xs text-text-secondary font-medium">March 15, 2026 • 8 min read</span>
            </article>

            <article className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-xs font-medium text-accent-purple bg-accent-purple/10 px-2 py-1 rounded-full">Design</span>
              <h3 className="text-xl font-semibold text-text-primary mt-4 mb-2">The Future of Glassmorphism</h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                A definitive guide on how to implement accessible, highly-performant glassmorphism in modern web applications without dropping frames.
              </p>
              <span className="text-xs text-text-secondary font-medium">March 10, 2026 • 5 min read</span>
            </article>

            <article className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Startup</span>
              <h3 className="text-xl font-semibold text-text-primary mt-4 mb-2">Founding KODDEVZ</h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                Tushar Rawat details the journey of building India's premier enterprise software agency from the ground up.
              </p>
              <span className="text-xs text-text-secondary font-medium">March 02, 2026 • 12 min read</span>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
