"use client";

import { motion } from "framer-motion";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export function Research() {
    return (
        <section id="research" className="py-20 px-8 md:px-20 border-b border-terminal-green/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border border-neutral-800 bg-black p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-terminal-green/5 rounded-bl-full" />

                    <h2 className="text-2xl font-mono font-bold text-white mb-2">
                        RESEARCH_PREVIEW
                    </h2>
                    <p className="text-terminal-green font-mono text-xs mb-8">
            // STATUS: REPLICATION_PHASE
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg text-white font-bold mb-2">
                                Kalman-Bayesian Volatility Filtering
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                Developing a regime-switching stochastic model to estimate latent volatility
                                states in high-frequency markets. The optimal estimator gain is derived recursively:
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 p-6 border border-neutral-800 text-neutral-300 overflow-x-auto">
                            {/* Kalman Gain Equation */}
                            <BlockMath math="K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}" />

                            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500">
                                Where <InlineMath math="P_{k|k-1}" /> is the a priori estimate covariance and <InlineMath math="R_k" /> is the measurement noise covariance.
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="px-4 py-2 border border-terminal-green text-terminal-green font-mono text-sm hover:bg-terminal-green hover:text-black transition-colors">
                                [READ_PAPER]
                            </button>
                            <button className="px-4 py-2 border border-neutral-700 text-neutral-400 font-mono text-sm hover:border-white hover:text-white transition-colors">
                                [VIEW_CODE]
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
