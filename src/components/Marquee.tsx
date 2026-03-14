import React from 'react';
import { motion } from 'motion/react';

const Marquee = () => {
  const messages = [
    "Meta Agency Ad Accounts Available",
    "Scale Your Business Today",
    "24/7 Dedicated Support",
    "No Spending Limits",
    "High-Risk Industry Support",
    "2% Commission on Top-ups",
    "Performance Marketing Excellence"
  ];

  // Duplicate the messages to create a seamless loop
  const repeatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className="bg-gradient-to-r from-brand-blue to-blue-600 py-2 overflow-hidden whitespace-nowrap relative z-[60] border-b border-white/10">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        {repeatedMessages.map((msg, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 mx-12 inline-flex items-center">
            {msg}
            <span className="w-1 h-1 bg-white/30 rounded-full ml-12"></span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
