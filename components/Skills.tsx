"use client";

import { motion } from "framer-motion";

const SKILLS = {
    LANGUAGES: ["C++", "Python", "MATLAB", "SQL", "JavaScript", "Rust"],
    DOMAINS: ["Control Systems", "Stochastic Calc", "Pairs Trading", "Dielectrics", "RL"],
    TOOLS: ["Git", "Docker", "Simulink", "Next.js", "PyTorch", "LaTeX"],
};

export function Skills() {
    return (
        <section id="skills" className="py-20 px-8 md:px-20 bg-neutral-900/20 border-b border-terminal-green/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-mono font-bold text-white mb-12 tracking-widest text-right">
                    :: SKILL_MATRIX_V1.0
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(SKILLS).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-terminal-green font-mono font-bold mb-4 border-b border-neutral-800 pb-2">
                                {category}
                            </h3>
                            <ul className="space-y-2">
                                {items.map((skill) => (
                                    <li key={skill} className="flex items-center justify-between group cursor-default">
                                        <span className="text-neutral-400 group-hover:text-white transition-colors font-mono text-sm">
                                            {skill}
                                        </span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((bar) => (
                                                <div
                                                    key={bar}
                                                    className={`w-1 h-3 ${bar <= 4 // Dummy visualizer logic, mostly filled
                                                            ? "bg-terminal-blue"
                                                            : "bg-neutral-800"
                                                        } group-hover:bg-terminal-green transition-colors`}
                                                />
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
