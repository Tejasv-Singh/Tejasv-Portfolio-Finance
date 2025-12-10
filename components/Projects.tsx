"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Cpu, TrendingUp, BarChart2, Zap, Activity, Globe } from "lucide-react";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    stats: string;
    icon: React.ElementType;
    accent: "green" | "blue";
    tech: string[];
    href: string;
}

const PROJECTS: Project[] = [
    {
        title: "NEXORA",
        description: "Quant-driven Reinforcement Learning system for IPO allocation optimization.",
        stats: "WINNER: 2ND PRIZE",
        icon: Trophy,
        accent: "green",
        tech: ["Python", "RL", "Pandas"],
        href: "https://github.com/Tejasv-Singh/RL_agent_IPO",
    },
    {
        title: "DEALFLOW",
        description: "Autonomous Agent-to-Agent system for sponsorship outreach and negotiation.",
        stats: "STATUS: ACTIVE",
        icon: Cpu,
        accent: "blue",
        tech: ["Agents", "LLMs", "Automation"],
        href: "https://github.com/Tejasv-Singh/DealFlow",
    },
    {
        title: "QUANT_SIMULATOR",
        description: "REIT/InvIT simulator for backtesting quantitative strategies.",
        stats: "TYPE: SIMULATION",
        icon: BarChart2,
        accent: "green",
        tech: ["TypeScript", "Backtesting"],
        href: "https://github.com/Tejasv-Singh/reit_invit-quant-simulator",
    },
    {
        title: "BTC_STRATEGY",
        description: "Algorithmic trading strategy specifically optimized for Bitcoin markets.",
        stats: "ASSET: BITCOIN",
        icon: Zap,
        accent: "blue",
        tech: ["Python", "Algo-Trading"],
        href: "https://github.com/Tejasv-Singh/BTC-Trading-Strategy",
    },
    {
        title: "MARKET_ABM",
        description: "Agent-Based Model market simulation for micro-structure analysis.",
        stats: "MODE: AGENT-BASED",
        icon: Activity,
        accent: "green",
        tech: ["Python", "Simulation"],
        href: "https://github.com/Tejasv-Singh/ABM-Market-Simulation",
    },
    {
        title: "ECO_CREDIT",
        description: "Finance track project focusing on sustainable credit mechanisms.",
        stats: "TRACK: FINANCE",
        icon: Globe,
        accent: "blue",
        tech: ["TypeScript", "Finance"],
        href: "https://github.com/Tejasv-Singh/eco-credit-nexus",
    },
    {
        title: "RESEARCH",
        description: "Kalman-Bayesian Volatility Filtering for Regime-Switching Models.",
        stats: "PAPER: IN PROGRESS",
        icon: TrendingUp,
        accent: "green",
        tech: ["MATLAB", "Stochastic Calc", "LaTeX"],
        href: "https://github.com/Tejasv-Singh/kalman-filter",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-8 md:px-20 border-b border-terminal-green/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-terminal-green/50" />
                    <h2 className="text-3xl font-mono font-bold text-white tracking-widest">
                        MARKET_PROJECTS
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-terminal-green/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-neutral-900/50 border border-neutral-800 hover:border-terminal-green transition-colors duration-300 flex flex-col justify-between"
                        >
                            <Link href={project.href} target="_blank" className="absolute inset-0 z-10">
                                <span className="sr-only">View Project</span>
                            </Link>

                            <div className="p-6 flex flex-col h-full pointer-events-none">
                                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-4 h-4 text-terminal-green" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 bg-${project.accent === 'green' ? 'terminal-green' : 'terminal-blue'}/10 rounded`}>
                                            <project.icon className={`w-6 h-6 text-${project.accent === 'green' ? 'terminal-green' : 'terminal-blue'}`} />
                                        </div>
                                        <h3 className="text-xl font-mono font-bold text-white">{project.title}</h3>
                                    </div>

                                    <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 font-mono rounded-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-dashed border-neutral-800 flex justify-between items-center font-mono text-xs">
                                    <span className={project.accent === 'green' ? "text-terminal-green" : "text-terminal-blue"}>
                                        {project.stats}
                                    </span>
                                    <span className="text-neutral-600">ID: {`00${i + 1}`}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
