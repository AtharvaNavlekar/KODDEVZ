import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-xl mb-8 leading-relaxed">
            At KODDEVZ, our mission is simple: to turn your grandest visions into tangible digital realities. 
            We are an elite enterprise web development agency based in India, operating globally.
          </p>
          
          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">Our DNA</h2>
          <p>
            We don't just build websites; we engineer scalable, high-performance platforms designed for modern enterprises and ambitious startups. Using cutting-edge tech stacks and AI-driven architecture, we strip away the bloat and deliver pristine code that performs at a 10x standard.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">The Team Behind the Wonders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Tushar Rawat</h3>
              <p className="text-sm m-0 mt-1">Founder</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Aastha Negi</h3>
              <p className="text-sm m-0 mt-1">Co-founder</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Aditya Agarwal</h3>
              <p className="text-sm m-0 mt-1">Chief Operations Head</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Manish Das Sharma</h3>
              <p className="text-sm m-0 mt-1">Chief Technical Officer</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Yatendra Sharma</h3>
              <p className="text-sm m-0 mt-1">Flutter Developer</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold text-text-primary m-0">Utkarsh Rajoriya</h3>
              <p className="text-sm m-0 mt-1">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
