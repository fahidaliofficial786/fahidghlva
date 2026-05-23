import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Webhook, MessageSquare, Database, Calendar, Terminal, Zap, ArrowRight, Slack, Smartphone } from 'lucide-react';

const LOG_MESSAGES = [
  "Initializing GoHighLevel API connection...",
  "Listening for incoming webhooks on port 3000...",
  "Webhook received: Lead form submitted (ID: 84920)...",
  "Extracting payload: { name: 'John Doe', phone: '+1234567890' }...",
  "Triggering Twilio SMS API...",
  "[Success] SMS sent: 'Hi John, thanks for your interest!'",
  "Generating Slack notification...",
  "[Success] Pinged Slack channel #new-leads...",
  "Updating CRM Pipeline: Stage -> 'New Lead'...",
  "[Success] CRM updated successfully.",
  "Creating Calendar booking placeholder...",
  "[Finished] Workflow execution completed in 143ms.",
  "Waiting for next trigger..."
];

const nodes = [
  { id: 'trigger', icon: Webhook, label: 'Form Submit', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
  { id: 'sms', icon: Smartphone, label: 'Twilio SMS', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
  { id: 'slack', icon: Slack, label: 'Slack Alert', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  { id: 'crm', icon: Database, label: 'CRM Update', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
  { id: 'calendar', icon: Calendar, label: 'Booking', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' }
];

export default function WorkflowTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, LOG_MESSAGES[currentIndex]];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
      
      // Sync node activation with logs loosely
      if (currentIndex === 2) setActiveNode(0);
      else if (currentIndex === 4) setActiveNode(1);
      else if (currentIndex === 6) setActiveNode(2);
      else if (currentIndex === 8) setActiveNode(3);
      else if (currentIndex === 10) setActiveNode(4);
      else if (currentIndex === 12) {
        setTimeout(() => {
          setActiveNode(-1);
          setLogs(["Listening for incoming webhooks on port 3000..."]);
        }, 3000);
      }

      currentIndex++;
      if (currentIndex >= LOG_MESSAGES.length) {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 mb-8 relative z-20">
      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden bg-[#0A0A0B]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.1)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            <Terminal className="w-4 h-4" />
            <span>ghl-automation-engine.exe</span>
          </div>
        </div>

        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
          
          {/* Visual Workflow Nodes */}
          <div className="flex flex-col justify-center gap-4">
             <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Live Workflow Execution</div>
             <div className="relative flex flex-col gap-3">
               {nodes.map((node, index) => {
                 const isActive = activeNode === index;
                 const isPast = activeNode > index;
                 
                 return (
                   <div key={node.id} className="flex items-center gap-4 relative z-10">
                     <motion.div 
                       animate={{ 
                         scale: isActive ? 1.05 : 1,
                         opacity: isActive || isPast ? 1 : 0.4
                       }}
                       className={`flex items-center gap-4 w-full p-3 rounded-xl border ${isActive ? node.border : 'border-white/5'} ${isActive ? node.bg : 'bg-white/5'} transition-colors duration-500`}
                     >
                        <div className={`p-2 rounded-lg ${isActive ? node.bg : 'bg-white/5'}`}>
                           <node.icon className={`w-5 h-5 ${isActive ? node.color : 'text-white/40'}`} />
                        </div>
                        <span className={`font-mono text-sm ${isActive ? 'text-white' : 'text-white/50'} font-medium`}>{node.label}</span>
                        {isActive && (
                           <motion.div 
                             initial={{ opacity: 0 }} 
                             animate={{ opacity: 1 }} 
                             className="ml-auto flex items-center"
                           >
                             <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                           </motion.div>
                        )}
                     </motion.div>
                     
                     {/* Connecting lines between nodes (visual only, for vertical list) */}
                     {index < nodes.length - 1 && (
                       <div className="absolute left-7 top-[3.25rem] w-0.5 h-6 bg-white/5 -z-10">
                         {isPast && (
                           <motion.div 
                             initial={{ height: 0 }} 
                             animate={{ height: '100%' }} 
                             className="w-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                           />
                         )}
                       </div>
                     )}
                   </div>
                 );
               })}
             </div>
          </div>

          {/* Terminal Logs */}
          <div className="bg-[#050505] rounded-xl border border-white/5 p-4 font-mono text-xs md:text-sm overflow-hidden relative flex flex-col justify-end min-h-[300px]">
             <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#050505] to-transparent z-10" />
             <div className="space-y-2 relative z-0">
               <AnimatePresence>
                 {logs.map((log, i) => (
                   <motion.div
                     key={`${log}-${i}`}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                     className="text-green-400/80 flex gap-2 w-full"
                   >
                     <span className="text-white/30 shrink-0">{'>'}</span>
                     <span className={log.includes('[Success]') ? 'text-cyan-400' : log.includes('Error') ? 'text-red-400' : 'text-green-400/80'}>
                       {log}
                     </span>
                   </motion.div>
                 ))}
               </AnimatePresence>
               <motion.div 
                 animate={{ opacity: [1, 0] }}
                 transition={{ repeat: Infinity, duration: 0.8 }}
                 className="w-2 h-4 bg-white/50 ml-6 mt-1"
               />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
