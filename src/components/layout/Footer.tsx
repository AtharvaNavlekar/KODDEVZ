import { Moon, Sun, ArrowRight, Instagram, Twitter, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    // Ensure sync if document changes externally (rare but good practice)
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
    <footer className="bg-bg pt-24 pb-8 transition-colors duration-300 relative overflow-hidden">
      {/* Soft Footer Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] opacity-40 pointer-events-none flex justify-center items-end mix-blend-screen -z-10">
        <div className="absolute w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full translate-y-[50%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 mb-20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
              Join the Inner Circle
            </h3>
            <p className="text-text-secondary">
              Subscribe for exclusive early access to new AI models, rare gem sourcing updates, and
              design inspiration.
            </p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-text-primary focus:outline-none focus:border-amber-500/50 min-w-[280px] placeholder:text-text-secondary/60"
              required
            />
            <button className="bg-text-primary text-bg font-semibold rounded-xl px-6 py-3.5 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 flex flex-col items-start pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-text-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                <Diamond className="w-5 h-5 text-bg" />
              </div>
              <span className="font-serif font-bold text-2xl text-text-primary tracking-tight">
                KODDEVZ
              </span>
            </Link>
            <p className="text-text-secondary text-[15px] max-w-sm leading-relaxed mb-6">
              Pioneering the future of bespoke fine jewelry. Our generative AI engine transforms
              your imagination into production-ready masterpieces, ethically crafted and securely
              delivered.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-text-secondary hover:text-amber-500 hover:border-amber-500/30 transition-all bg-black/5 dark:bg-white/5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-text-secondary hover:text-amber-500 hover:border-amber-500/30 transition-all bg-black/5 dark:bg-white/5"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-semibold text-sm mb-2 uppercase tracking-wider">
              Platform
            </h4>
            <Link
              to="/"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              AI Studio
            </Link>
            <Link
              to="/marketplace"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/materials"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Our Materials
            </Link>
            <Link
              to="/bespoke"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Bespoke Process
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-semibold text-sm mb-2 uppercase tracking-wider">
              Company
            </h4>
            <Link
              to="/about"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Our Heritage
            </Link>
            <Link
              to="/journal"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Journal
            </Link>
            <Link
              to="/faq"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-amber-600 dark:hover:text-amber-400 text-[15px] transition-colors"
            >
              Private Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 dark:border-white/10 gap-6">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} KODDEVZ Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2"
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
