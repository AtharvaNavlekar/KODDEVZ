import { Moon, Sun, ArrowRight, Github, Twitter, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <footer className="bg-bg pt-24 pb-8 transition-colors duration-300 relative overflow-hidden border-t border-border">
      {/* Soft Footer Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] opacity-20 pointer-events-none flex justify-center items-end mix-blend-screen -z-10">
        <div className="absolute w-[600px] h-[300px] bg-accent-blue/20 blur-[120px] rounded-full translate-y-[50%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-card/40 backdrop-blur-2xl border border-border rounded-2xl p-8 md:p-12 mb-20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Subscribe to Changelog</h3>
            <p className="text-text-secondary">
              Get the latest product updates, engineering blog posts, and release notes delivered
              straight to your inbox.
            </p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="developer@company.com"
              className="bg-bg border border-border rounded-lg px-5 py-3.5 text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue min-w-[280px] placeholder:text-text-secondary/60 transition-all font-mono text-sm"
              required
            />
            <button className="bg-text-primary text-bg font-semibold rounded-lg px-6 py-3.5 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 flex flex-col items-start pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-text-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                <Terminal className="w-5 h-5 text-bg" />
              </div>
              <span className="font-bold text-2xl text-text-primary tracking-tight">KODDEVZ</span>
            </Link>
            <p className="text-text-secondary text-[15px] max-w-sm leading-relaxed mb-6">
              The foundational technology platform for modern engineering teams. Build, deploy, and
              scale with uncompromising security and performance on our global edge network.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-blue hover:border-accent-blue transition-all bg-card"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-blue hover:border-accent-blue transition-all bg-card"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wider font-mono">
              Product
            </h4>
            <Link
              to="/"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Enterprise Engine
            </Link>
            <Link
              to="/documentation"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Documentation
            </Link>
            <Link
              to="/api"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              API Reference
            </Link>
            <Link
              to="/pricing"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/status"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              System Status
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wider font-mono">
              Company
            </h4>
            <Link
              to="/about"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Engineering Blog
            </Link>
            <Link
              to="/careers"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              to="/security"
              className="text-text-secondary hover:text-accent-blue text-[15px] transition-colors"
            >
              Security
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          <p className="text-text-secondary text-sm font-mono">
            &copy; {new Date().getFullYear()} KODDEVZ Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg border border-border hover:bg-card flex items-center gap-2"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5" /> Light Mode
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" /> Dark Mode
                </>
              )}
            </button>
            <Link
              to="/privacy"
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
