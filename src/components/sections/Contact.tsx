import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-bg relative border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Questions? We've got answers.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-12">
            Ready to turn your idea into reality? Start building with KODDEVZ today.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              required
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all text-center"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className={cn(
                "w-full py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300",
                status === "success"
                  ? "bg-emerald-500 text-white"
                  : "bg-text-primary text-bg hover:opacity-90 glow-button disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {status === "idle" && (
                <>
                  Start building <ArrowRight className="w-4 h-4" />
                </>
              )}
              {status === "submitting" && (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                  Processing...
                </span>
              )}
              {status === "success" && (
                <>
                  Welcome aboard <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
