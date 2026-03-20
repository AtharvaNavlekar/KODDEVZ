import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Hexagon, Activity, GitBranch, Box, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "authenticating" | "error">("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("authenticating");
    setTimeout(() => {
      if (email && password) {
        setIsLoggedIn(true);
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6">
            <Hexagon className="w-6 h-6 text-text-primary fill-black/10 dark:fill-white/10" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Welcome back</h1>
          <p className="text-text-secondary text-sm mt-2 text-center">
            Log in to your KODDEVZ workspace.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-text-secondary">Password</label>
              <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Forgot?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all"
              placeholder="••••••••"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Invalid credentials. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "authenticating"}
            className={cn(
              "w-full py-3.5 mt-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300",
              "bg-text-primary text-bg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {status === "authenticating" ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function Dashboard() {
  const milestones = [
    { id: 1, title: "Project Brief Generated", status: "completed", date: "Oct 12" },
    { id: 2, title: "Database Provisioned", status: "completed", date: "Oct 18" },
    { id: 3, title: "Frontend MVP Deployed", status: "in-progress", date: "Nov 05" },
    { id: 4, title: "API Integration", status: "pending", date: "Nov 20" },
    { id: 5, title: "Production Launch", status: "pending", date: "Dec 01" },
  ];

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <header className="border-b border-black/5 dark:border-white/5 bg-bg/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hexagon className="w-5 h-5 text-text-primary fill-black/10 dark:fill-white/10" />
            <span className="font-semibold tracking-tight text-text-primary">
              KODDEVZ
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-500 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Operational
            </div>
            <Link to="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Log out
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-text-primary">Acme Workspace</h1>
          <p className="text-text-secondary">Manage your applications, view deployments, and track progress.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-card border border-black/5 dark:border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-medium mb-8 flex items-center gap-2 text-text-primary">
                <Activity className="w-5 h-5 text-text-secondary" />
                Project Timeline
              </h2>
              <div className="flex flex-col">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex gap-4">
                    <div className="flex flex-col items-center mt-1">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border-2 flex-shrink-0",
                          milestone.status === "completed" ? "bg-emerald-500 border-emerald-500" :
                          milestone.status === "in-progress" ? "bg-transparent border-text-primary" :
                          "bg-transparent border-black/20 dark:border-white/20"
                        )}
                      />
                      {index !== milestones.length - 1 && (
                        <div className={cn(
                          "w-0.5 flex-1 mt-2 mb-2",
                          milestone.status === "completed" ? "bg-emerald-500/30" : "bg-black/10 dark:bg-white/10"
                        )} />
                      )}
                    </div>
                    <div className={cn("flex-1", index !== milestones.length - 1 ? "pb-8" : "")}>
                      <div className="flex items-center justify-between">
                        <h3 className={cn(
                          "font-medium",
                          milestone.status === "pending" ? "text-text-secondary" : "text-text-primary"
                        )}>
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-text-secondary">{milestone.date}</span>
                      </div>
                      {milestone.status === "in-progress" && (
                        <div className="mt-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4">
                          <div className="flex justify-between text-sm mb-3">
                            <span className="text-text-primary">Build Progress</span>
                            <span className="text-text-secondary">65%</span>
                          </div>
                          <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-text-primary w-[65%]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card border border-black/5 dark:border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-medium mb-6 flex items-center gap-2 text-text-primary">
                <GitBranch className="w-5 h-5 text-text-secondary" />
                Deployment Logs
              </h2>
              <div className="bg-black/5 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 rounded-2xl p-5 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-text-secondary">10:42 AM</span>
                  <span className="text-emerald-500 dark:text-emerald-400">SUCCESS</span>
                  <span className="text-text-primary">Deployed frontend to vercel (v1.2.4)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-secondary">09:15 AM</span>
                  <span className="text-emerald-500 dark:text-emerald-400">SUCCESS</span>
                  <span className="text-text-primary">Database migration completed</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-secondary">Yesterday</span>
                  <span className="text-blue-500 dark:text-blue-400">INFO</span>
                  <span className="text-text-primary">Merged PR #42: Auth integration</span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-card border border-black/5 dark:border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-medium mb-6 flex items-center gap-2 text-text-primary">
                <Box className="w-5 h-5 text-text-secondary" />
                Environments
              </h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-text-primary">Production</span>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">View &rarr;</span>
                </a>
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="font-medium text-text-primary">Staging</span>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">View &rarr;</span>
                </a>
              </div>
            </section>

            <section className="bg-card border border-black/5 dark:border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-medium mb-6 flex items-center gap-2 text-text-primary">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Security
              </h2>
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">SOC2 Compliance</span>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">E2E Encryption</span>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Last Audit</span>
                  <span className="text-sm text-text-primary">2 days ago</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
