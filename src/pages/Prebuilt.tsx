import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Prebuilt() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Prebuilt Solutions</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-xl mb-12 leading-relaxed">
            Get to market in days, not months. Our pre-configured, robust Software as a Service scaffolds are tailored for immediate scale and seamless integration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-[0_0_30px_var(--theme-glow)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-text-primary mb-2">E-Commerce Core</h3>
              <p className="text-accent-blue font-mono mb-6">Starting at ₹50,000</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> Next.js Storefront</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> Stripe / Razorpay Integration</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> Secure Admin Dashboard</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> Automated Email Receipts</li>
              </ul>
              <button className="w-full py-3 bg-text-primary text-bg font-medium rounded-xl hover:opacity-90">View Demo</button>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-[0_0_30px_var(--theme-glow)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-text-primary mb-2">SaaS Boilerplate</h3>
              <p className="text-accent-purple font-mono mb-6">Starting at ₹75,000</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> Multi-tenant Architecture</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> User Auth & Roles (Clerk)</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> Subscription Billing Pipeline</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> Postmark Email Sequences</li>
              </ul>
              <button className="w-full py-3 bg-text-primary text-bg font-medium rounded-xl hover:opacity-90">View Demo</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
