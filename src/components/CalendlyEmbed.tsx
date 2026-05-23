export default function CalendlyEmbed() {
  return (
    <section id="calendly" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#F5F5F7]">
            Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Discovery Call</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to upgrade your systems? Select a time below to chat about your business goals and how I can help streamline your operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto h-[700px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)] border border-white/10 bg-white/5">
          <iframe
            src="https://calendly.com/fahidaliofficial/30min?hide_gdpr_banner=1&background_color=050505&text_color=F5F5F7&primary_color=06b6d4"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling Page"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
