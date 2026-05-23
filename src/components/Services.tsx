import { motion } from 'motion/react';
import { Settings, RefreshCw, Mail, Layout, Calendar, Webhook, CreditCard, MessageSquare, Briefcase, Video, Plug } from 'lucide-react';

const services = [
  {
    title: 'CRM Setup & Pipeline',
    description: 'Custom pipelines, stages, and full CRM optimization to track leads efficiently.',
    icon: Settings,
    color: 'from-blue-500 to-cyan-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'Workflow Automation',
    description: 'Intelligent multi-step workflows that save hours of manual repetitive work.',
    icon: RefreshCw,
    color: 'from-purple-500 to-fuchsia-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  },
  {
    title: 'Email & SMS Automation',
    description: 'High-converting follow-up sequences to nurture leads on autopilot.',
    icon: Mail,
    color: 'from-emerald-500 to-green-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
  },
  {
    title: 'Funnels & Landing Pages',
    description: 'High-CTR, visually rich funnels designed to convert visitors into booked calls.',
    icon: Layout,
    color: 'from-orange-500 to-amber-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Automated calendar setups with reminders, reducing no-show rates.',
    icon: Calendar,
    color: 'from-pink-500 to-rose-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
  },
  {
    title: 'Webhook & API',
    description: 'Seamlessly connect GHL to your external tools and proprietary software.',
    icon: Webhook,
    color: 'from-indigo-500 to-blue-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
  },
  {
    title: 'Stripe Integration',
    description: 'Process payments effortlessly right inside your funnels and pipelines.',
    icon: CreditCard,
    color: 'from-purple-500 to-indigo-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
  },
  {
    title: 'Twilio Integration',
    description: 'Robust phone, SMS, and deep communication setups for your business.',
    icon: MessageSquare,
    color: 'from-red-500 to-orange-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]',
  },
  {
    title: 'Slack Integration',
    description: 'Push important lead notifications to your team in real-time.',
    icon: Briefcase,
    color: 'from-yellow-400 to-amber-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]',
  },
  {
    title: 'Zoom Integration',
    description: 'Auto-generate meeting links for every calendar booking instantly.',
    icon: Video,
    color: 'from-blue-400 to-cyan-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]',
  },
  {
    title: 'Make.com Integration',
    description: 'Complex visual automation scenarios connecting thousands of apps.',
    icon: Plug,
    color: 'from-purple-600 to-pink-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]',
  }
];

export default function Services() {
  return (
    <section className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-[#F5F5F7] tracking-tighter uppercase"
          >
            Expert GoHighLevel <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            I provide comprehensive technical implementation, advanced CRM pipelines, and custom API integrations across the entire GoHighLevel ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass-card glass-card-hover p-6 group cursor-default relative overflow-hidden rounded-3xl ${service.shadow}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} bg-opacity-10 shadow-inner`}>
                <service.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F5F5F7]">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
