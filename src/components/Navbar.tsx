import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full h-20 px-6 sm:px-8 flex items-center justify-between border-b border-white/5 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <img src="https://lh3.googleusercontent.com/d/1586CeovEpsWd6eK0WFq-9KSLkxRLMRoV" alt="Fahid Automations Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
        <span className="font-bold tracking-tighter text-lg sm:text-xl text-[#F5F5F7] whitespace-nowrap">
          Fahid <span className="text-cyan-400">GHL VA</span>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-bold border border-yellow-400/30 px-3 py-1 rounded-full animate-pulse">
          Limited Availability: 1 Slot Left
        </span>
        <a href="https://calendly.com/fahidaliofficial/30min" aria-label="Book a GoHighLevel Strategy Session" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-cyan-400 transition-colors">
          Book Session
        </a>
      </div>
    </header>
  );
}
