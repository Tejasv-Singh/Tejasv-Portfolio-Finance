"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "Electrical Engineering Undergrad | Quantitative Researcher";
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 50);

        const cursorInterval = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section className="relative h-screen flex flex-col justify-center px-8 md:px-20 pt-20 overflow-hidden border-b border-terminal-green/20">
            {/* Background Math Animation */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <motion.path
                        d="M0,100 Q400,0 800,100 T1600,100"
                        fill="none"
                        stroke="#00ff41"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    />
                    <motion.path
                        d="M0,300 Q400,200 800,300 T1600,300"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 1 }}
                    />
                </svg>
            </div>

            <div className="z-10 max-w-4xl space-y-6">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-mono font-bold text-white tracking-tight"
                >
                    TEJASV SINGH HADA
                </motion.h1>

                <div className="h-8">
                    <p className="text-xl md:text-2xl font-mono text-terminal-green">
                        {">"} {text}
                        <span
                            className={`inline-block w-3 h-5 ml-1 bg-terminal-green ${cursorVisible ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    </p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-lg text-neutral-400 font-sans max-w-2xl"
                >
                    Bridging Control Theory, Stochastic Models, and Autonomous Systems.
                </motion.p>
            </div>
        </section>
    );
}
