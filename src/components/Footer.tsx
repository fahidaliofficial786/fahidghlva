import { ArrowUpRight, Instagram, Facebook, Twitter, Linkedin, Youtube, Github, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-16 pb-8 relative z-10 overflow-hidden">
       {/* Subtle footer glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-900/5 blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
            
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <img src="https://lh3.googleusercontent.com/d/1586CeovEpsWd6eK0WFq-9KSLkxRLMRoV" alt="Fahid Automations Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                <span className="font-bold tracking-tighter text-xl text-[#F5F5F7] whitespace-nowrap">
                  Fahid <span className="text-cyan-400">GHL VA</span>
                </span>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
                Premium GoHighLevel CRM setup, workflow automation, and custom API integrations for growing businesses. Work directly with an expert, not a bloated agency.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <a href="https://www.instagram.com/fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://vm.tiktok.com/fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors font-bold text-lg leading-none" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.45c-.01 1.94-.69 3.88-1.99 5.3-1.35 1.48-3.26 2.37-5.26 2.58-2.61.27-5.27-.37-7.23-2.07-1.92-1.67-3-4.08-3-6.57.02-2.31.95-4.57 2.6-6.22 1.62-1.61 3.84-2.5 6.13-2.58v4.06c-1.13.06-2.22.48-3.05 1.25-.86.8-1.35 1.98-1.34 3.19-.01 1.28.51 2.52 1.45 3.39 1 .91 2.37 1.34 3.73 1.15 1.25-.17 2.37-.84 3.11-1.85.67-.93 1-2.09 1-3.23V.02h-4.22z"/>
                  </svg>
                </a>
                <a href="https://github.com/fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/fahidali0" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@FHDtech" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://t.me/Fahidaliofficial" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="Telegram">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
               <div className="px-4 py-1.5 rounded-full border border-yellow-400/30 text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase animate-pulse">
                 Limited Availability
               </div>
               <div className="text-white/40 text-[11px] font-medium tracking-[0.1em] uppercase mb-2">
                 Serious Inquiries Only
               </div>

               <div className="flex flex-col sm:flex-row gap-4 mt-2">
                 <a 
                   href="https://calendly.com/fahidaliofficial/30min" 
                   className="text-[11px] font-medium text-white/40 tracking-[0.1em] uppercase hover:text-cyan-400 transition-colors flex items-center gap-1 group justify-center"
                 >
                   Book Strategy Call
                   <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
                 </a>
                 <a 
                   href="https://wa.me/923484103239" 
                   target="_blank" 
                   rel="noreferrer"
                   className="text-[11px] font-medium text-white/40 tracking-[0.1em] uppercase hover:text-green-400 transition-colors flex items-center gap-1 group justify-center"
                 >
                   WhatsApp Direct
                   <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-green-400" />
                 </a>
               </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-white/30 text-[11px] tracking-[0.1em] uppercase text-center md:text-left">
               &copy; {new Date().getFullYear()} Fahid GHL VA. Independent GoHighLevel Specialist. All rights reserved.
             </p>
             <div className="text-white/30 text-[11px] tracking-[0.1em] uppercase flex flex-wrap justify-center gap-4">
                <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#cookie" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
             </div>
          </div>
       </div>
    </footer>
  );
}
