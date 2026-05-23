import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import WorkflowTerminal from './WorkflowTerminal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDVMNTkgNjBMMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none mask-image-b" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">NOT AN AGENCY — Individual Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-6 whitespace-normal max-w-full"
          >
            <span className="block text-lg sm:text-xl md:text-3xl text-cyan-400 tracking-widest font-bold mb-4 font-sans">HIRE THE ULTIMATE</span>
            <span className="inline-block relative break-keep w-full sm:w-auto">GOHIGHLEVEL</span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 inline-block mt-2 md:mt-0">VIRTUAL ASSISTANT</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I provide elite <strong className="text-white font-semibold font-sans">GoHighLevel CRM setup</strong>, <strong className="text-white font-semibold font-sans">workflow automation</strong>, and custom <strong className="text-white font-semibold font-sans">API integrations</strong> for growing businesses in the USA, UK, Canada & Australia.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#form"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] group uppercase"
            >
              Book Free Meeting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/923484103239"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-green-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              WhatsApp Message
            </a>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.5 }}
        >
          <WorkflowTerminal />
        </motion.div>
      </div>
    </section>
  );
}
