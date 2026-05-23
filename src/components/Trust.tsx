import { motion } from 'motion/react';
import { User, MessageCircle, Zap, ShieldCheck, Clock, Layers } from 'lucide-react';

const reasons = [
  {
    title: 'One Client At A Time',
    description: 'You get my undivided attention. I do not juggle twenty accounts like agencies do.',
    icon: User,
  },
  {
    title: 'Direct Communication',
    description: 'No account managers. You speak directly with the expert building your systems.',
    icon: MessageCircle,
  },
  {
    title: 'Fast Delivery',
    description: 'Because you have my full capacity, turnaround times are measured in days, not weeks.',
    icon: Zap,
  },
  {
    title: 'Detail Oriented',
    description: 'Precision engineering in workflows to ensure edge cases are handled beautifully.',
    icon: Layers,
  },
  {
    title: 'Reliable Support',
    description: 'I stand behind my builds. If something breaks, I fix it fast.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom Solutions',
    description: 'No cookie-cutter agency templates. Systems tailored to your specific operations.',
    icon: Clock,
  },
];

export default function Trust() {
  return (
    <section className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-purple-900/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-[#F5F5F7] leading-tight tracking-tighter"
            >
              Why Work <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">With Me?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/60 text-lg mb-8 leading-relaxed"
            >
              Agencies prioritize volume. I prioritize craftsmanship. I take on limited projects to ensure elite quality and personalized focus.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                Currently taking 1 new client
              </span>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all rounded-3xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F7] mb-2">{reason.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
