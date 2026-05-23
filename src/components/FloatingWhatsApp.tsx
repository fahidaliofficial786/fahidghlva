import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923484103239"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-[#0A0A0B] text-white text-xs font-bold py-2 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none drop-shadow-lg border border-white/10 uppercase tracking-widest">
        Chat with me 
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0A0A0B] rotate-45 border-r border-t border-white/10"></span>
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-40 z-[-1]"></span>
    </a>
  );
}
