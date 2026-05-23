import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 relative z-10 bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#F5F5F7] uppercase">
            Individual Expert <span className="text-white/40">vs.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Traditional Agency</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Why serious businesses choose to work with a dedicated GoHighLevel Virtual Assistant rather than an overloaded agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Agency Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-red-500/20 bg-red-950/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px]"></div>
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              {[
                "Juggle 30+ client accounts simultaneously",
                "Pass your work to junior offshore developers",
                "Communication goes through account managers",
                "Cookie-cutter GoHighLevel snapshots",
                "Slow turnarounds and bottlenecked support",
                "High overhead passed onto your invoice"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/50">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expert Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-cyan-400/40 bg-cyan-950/10 relative overflow-hidden ring-1 ring-cyan-400/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px]"></div>
             <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
               My Approach
             </div>
             
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8" />
              Individual Specialist
            </h3>
            <ul className="space-y-4">
              {[
                "One primary client focus at a time",
                "I personally build out every single workflow",
                "Direct 24/7 Slack/WhatsApp communication",
                "Precision-engineered custom CRM automation",
                "Rapid execution and guaranteed reliability",
                "Elite architectural setup with no agency bloat"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#F5F5F7]">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
