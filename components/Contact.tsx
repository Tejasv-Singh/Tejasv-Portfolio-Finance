"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SENT">("IDLE");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setHistory((prev) => [...prev, `> visitor@portfolio:~$ ${input}`]);
        const msg = input;
        setInput("");
        setStatus("SENDING");

        setTimeout(() => {
            setHistory((prev) => [
                ...prev,
                `> TRANSMITTING: "${msg}"...`,
                "> MSG_ACKNOWLEDGED. STATUS: 200 OK."
            ]);
            setStatus("SENT");
            setTimeout(() => setStatus("IDLE"), 2000);
        }, 800);
    };

    return (
        <section id="contact" className="py-20 px-8 md:px-20 border-b border-terminal-green/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-mono font-bold text-white mb-8 tracking-widest text-center">
                    INIT_COMMUNICATION
                </h2>

                <div className="bg-black border border-neutral-800 rounded-sm shadow-2xl p-6 font-mono text-sm h-[400px] flex flex-col relative overflow-hidden">
                    {/* Terminal Header */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <span className="text-neutral-500 text-xs ml-2">bash -- restricted-shell</span>
                    </div>

                    <div className="mt-8 flex-1 overflow-y-auto space-y-2 text-neutral-300">
                        <div className="text-neutral-500">
                            Last login: {new Date().toLocaleDateString()} on ttys001
                            <br />
                            Type a message and press ENTER to contact.
                        </div>

                        {history.map((line, i) => (
                            <div key={i} className="break-words">
                                {line.startsWith("> visitor") ? (
                                    <span className="text-white">{line}</span>
                                ) : (
                                    <span className="text-terminal-green">{line}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 flex gap-2 items-center">
                        <span className="text-terminal-green">visitor@portfolio:~$</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                            autoFocus
                            placeholder="echo 'Hello Tejasv...'"
                        />
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-terminal-green"
                        />
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-neutral-500 font-mono text-xs">
                        Or email directly: <a href="mailto:contact@example.com" className="text-terminal-blue hover:underline">tejasv@example.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
