import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const needsOptions = [
  'CRM Setup',
  'Workflow Automation',
  'Funnels',
  'API Integration',
  'Email/SMS Setup',
  'Calendar Setup',
  'Full GoHighLevel Setup',
  'Other'
];

const businessTypes = [
  'Real Estate',
  'Coaching',
  'Marketing Agency',
  'Medical',
  'E-commerce',
  'Local Business',
  'Other'
];

const timelineOptions = [
  'ASAP',
  'This Week',
  'This Month',
  'Just Exploring'
];

const revenueOptions = [
  'Under $1k',
  '$1k–$5k',
  '$5k–$20k',
  '$20k+'
];

export default function SurveyForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    needs: [] as string[],
    businessType: '',
    problems: '',
    timeline: '',
    revenue: '',
    name: '',
    email: '',
    whatsapp: '',
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.needs.length > 0;
      case 2: return formData.businessType !== '';
      case 3: return formData.problems.trim().length > 5;
      case 4: return formData.timeline !== '';
      case 5: return formData.revenue !== '';
      case 6: return formData.name.trim() !== '' && formData.email.includes('@') && formData.whatsapp.trim() !== '';
      default: return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xeorkqnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.href = "https://calendly.com/fahidaliofficial/30min";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#F5F5F7]">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Application</span></h2>
          <p className="text-white/60">Fill out this quick brief so I can understand your requirements before we jump on a call.</p>
        </div>

        <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
            <motion.div 
               className="h-full bg-cyan-400"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="mb-8 mt-2 flex justify-between items-center text-sm font-medium text-slate-500">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Completed</span>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); if (step === totalSteps) handleSubmit(e); else handleNext(); }}>
            <AnimatePresence mode="wait">
              
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">What do you need help with?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {needsOptions.map(need => (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={`p-4 rounded-xl border text-left transition-all text-sm ${
                          formData.needs.includes(need) 
                            ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-[#F5F5F7]' 
                            : 'border-white/10 bg-white/5 text-white/50 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{need}</span>
                          {formData.needs.includes(need) && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">What type of business do you run?</h3>
                  <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
                    {businessTypes.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => { setFormData({...formData, businessType: type}); }}
                        className={`p-4 rounded-xl border text-center transition-all text-sm ${
                          formData.businessType === type 
                            ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-[#F5F5F7]' 
                            : 'border-white/10 bg-white/5 text-white/50 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">What is your current biggest problem?</h3>
                  <div className="max-w-xl mx-auto">
                    <textarea
                      autoFocus
                      rows={5}
                      value={formData.problems}
                      onChange={(e) => setFormData({...formData, problems: e.target.value})}
                      placeholder="e.g. My leads are slipping through the cracks because we have no automated follow-up..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[#F5F5F7] text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">How soon do you want to start?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                    {timelineOptions.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => { setFormData({...formData, timeline: time}); }}
                        className={`p-5 rounded-xl border text-center transition-all text-sm ${
                          formData.timeline === time 
                            ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-[#F5F5F7]' 
                            : 'border-white/10 bg-white/5 text-white/50 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 5 */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">What’s your monthly business revenue?</h3>
                  <p className="text-center text-slate-500 mb-8 text-sm">This helps me ensure we're a good fit for working together.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                    {revenueOptions.map(rev => (
                      <button
                        key={rev}
                        type="button"
                        onClick={() => { setFormData({...formData, revenue: rev}); }}
                        className={`p-5 rounded-xl border text-center transition-all text-sm ${
                          formData.revenue === rev 
                            ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-[#F5F5F7]' 
                            : 'border-white/10 bg-white/5 text-white/50 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                        }`}
                      >
                        {rev}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 6 */}
              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-2 text-white text-center">Almost done.</h3>
                  <p className="text-center text-slate-500 mb-8 text-sm">Where should I send the calendar link?</p>
                  
                  <div className="space-y-4 max-w-md mx-auto">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-[#F5F5F7] text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-[#F5F5F7] text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-[#F5F5F7] text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className={`mt-10 flex ${step > 1 ? 'justify-between' : 'justify-end'} max-w-xl mx-auto`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 rounded-xl border border-white/10 text-white/50 hover:bg-white/5 transition-colors uppercase text-sm font-bold"
                >
                  Back
                </button>
              )}
              
              <button
                type={step === totalSteps ? 'submit' : 'button'}
                onClick={step === totalSteps ? undefined : handleNext}
                disabled={!isStepValid() || isSubmitting}
                className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-bold uppercase flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all ml-auto hover:scale-105"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                ) : step === totalSteps ? (
                  'Submit & View Calendar'
                ) : (
                  <>Next Step <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
