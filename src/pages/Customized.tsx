import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Customized() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Customized Solutions</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-xl mb-12 leading-relaxed">
            We build highly customized enterprise architectures designed to handle millions of requests. From complex Fintech dashboards to real-time IoT hubs.
          </p>
          
          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">Our Engineering Process</h2>
          
          <div className="space-y-8 mt-8 not-prose">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-text-primary">1</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Discovery & Architecture</h3>
                <p className="text-text-secondary leading-relaxed">We map out your entire data flow, strict compliance requirements (HIPAA, SOC2, GDPR), and target user demographics to outline a flawless system architecture.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-text-primary">2</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Agile Sprints & UI/UX</h3>
                <p className="text-text-secondary leading-relaxed">Our designers and engineers work in 2-week sprints, providing you continuous staging links to review the application as it organically grows.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center font-bold text-text-primary">3</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Pen-Testing & Deployment</h3>
                <p className="text-text-secondary leading-relaxed">Before going live, the platform undergoes rigorous automated load testing and manual penetration testing to ensure military-grade security.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
