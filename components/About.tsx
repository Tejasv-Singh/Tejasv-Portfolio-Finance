"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const data = [
    { year: "2021", value: 30, annotation: "Started EE @ NIT Hamirpur" },
    { year: "2022", value: 45, annotation: "Learned C++ & Python" },
    { year: "2023", value: 60, annotation: "First Control Systems Project" },
    { year: "2023.5", value: 55, annotation: "Market Drawdown (Difficult Sem)" },
    { year: "2024", value: 85, annotation: "Hack on Hills Winner" },
    { year: "2025", value: 100, annotation: "Quant Research & SIH Winner" },
];

export function About() {
    return (
        <section id="about" className="py-20 px-8 md:px-20 border-b border-terminal-green/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-mono font-bold text-white tracking-widest">
                        ABOUT_ME
                    </h2>
                    <div className="font-mono text-sm text-neutral-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-terminal-green">{">"}</span> Electrical Engineering Undergraduate with a focus on mathematical modeling and autonomous systems.
                        </p>
                        <p>
                            <span className="text-terminal-green">{">"}</span> Transitioning into Quantitative Research, applying control theory and stochastic calculus to financial markets.
                        </p>
                        <p>
                            <span className="text-terminal-green">{">"}</span> Passionate about building robust, high-frequency systems that operate at the intersection of hardware and algorithms.
                        </p>
                    </div>

                    <div className="p-4 border border-terminal-blue/30 bg-terminal-blue/5 rounded text-sm text-terminal-blue font-mono">
                        CURRENT_STATUS: OPEN_TO_ROLES
                    </div>
                </div>

                <div className="flex-1 w-full h-[300px] border border-neutral-800 bg-neutral-900/40 p-4 relative">
                    <div className="absolute top-2 left-2 text-xs font-mono text-neutral-500">
                        FIG 1.1: LEARNING_EQUITY_CURVE
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00ff41" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#00ff41" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis
                                dataKey="year"
                                stroke="#666"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                fontFamily="var(--font-mono)"
                            />
                            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#333", color: "#fff" }}
                                itemStyle={{ color: "#00ff41", fontFamily: "var(--font-mono)" }}
                                cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#00ff41"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                isAnimationActive={true}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}
