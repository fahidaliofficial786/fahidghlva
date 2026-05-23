import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Why should I hire an individual GoHighLevel Expert instead of an agency?",
    answer: "When you hire an individual GoHighLevel expert, you work directly with the specialist building your systems. Agencies often pass your project to junior developers or overload account managers. With me, you get dedicated, high-focus support, faster turnaround times, and precise GoHighLevel CRM setup tailored to your exact workflows."
  },
  {
    question: "What GoHighLevel automation services do you provide?",
    answer: "As a specialized GoHighLevel Virtual Assistant, I handle complex workflow automation, advanced API integrations, webhook connections, snapshot creation, funnel building, and comprehensive CRM pipeline setups. If it involves automating HighLevel, I build it."
  },
  {
    question: "Do you integrate GoHighLevel with third-party tools like Make.com or Stripe?",
    answer: "Yes, I specialize in advanced GoHighLevel API integration. I routinely connect GHL to Make.com, Zapier, Stripe, Twilio, Slack, Zoom, and custom external databases to create seamless data synchronization across your tech stack."
  },
  {
    question: "Where are your clients located?",
    answer: "I provide premium GoHighLevel freelance services globally, with a strong focus on clients in the USA, Canada, UK, and Australia. Time zones are managed efficiently to ensure smooth communication and rapid delivery."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#F5F5F7] uppercase">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
          </h2>
          <p className="text-white/60 text-lg">Clear answers to help you make an informed decision about your GoHighLevel setup.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-bold text-[#F5F5F7] pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
