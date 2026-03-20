import { Hexagon, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Footer() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else if (document.documentElement.classList.contains('light')) {
      setIsDark(false);
    } else {
      // Default to dark for this app
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
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
    <footer className="border-t border-black/10 dark:border-white/10 bg-bg pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <Hexagon className="w-5 h-5 text-bg fill-bg" />
              </div>
              <span className="font-semibold text-lg text-text-primary tracking-tight">
                KODDEVZ
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              Turn that idea you had in mind into a website. Build, deploy, and scale with your AI co-founder.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-medium text-sm mb-1">Links</h4>
            <Link to="/" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Home</Link>
            <Link to="/prebuilt" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Prebuilt</Link>
            <Link to="/customized" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Customized</Link>
            <Link to="/about" className="text-text-secondary hover:text-text-primary text-sm transition-colors">About Us</Link>
            <Link to="/contact" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-text-primary font-medium text-sm mb-1">More Resources</h4>
            <Link to="/blogs" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Blogs</Link>
            <Link to="/refund" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 dark:border-white/10 gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} KODDEVZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/privacy" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
