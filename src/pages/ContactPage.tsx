import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-xl mb-12 leading-relaxed">
            Ready to start your next enterprise project? Get in touch with our engineering team today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Drop us a line</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input type="text" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input type="email" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full py-4 mt-2 bg-text-primary text-bg font-medium rounded-xl hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Headquarters</h3>
                <p className="text-text-secondary">
                  KODDEVZ Inc.<br />
                  Tower B, Tech Park<br />
                  Mumbai, India
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Direct Contact</h3>
                <p className="text-text-secondary">
                  hello@koddevz.com<br />
                  +91-98765-43210
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
