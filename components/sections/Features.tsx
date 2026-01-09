import { FadeIn } from "../ui/FadeIn";
import { Smartphone, Zap, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#04121F]">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-white">Next-Gen <span className="text-neon-teal">Features</span></h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <FadeIn className="p-8 rounded-3xl bg-bg-dark border border-white/5 relative overflow-hidden group hover:shadow-neon transition-all">
              <Smartphone size={40} className="text-neon-cyan mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Mobile Optimized</h3>
              <p className="text-soft-blue text-sm leading-relaxed">Engineered for performance with 60+ FPS gameplay on iOS and Android.</p>
           </FadeIn>

           <FadeIn delay={0.2} className="p-8 rounded-3xl bg-bg-dark border border-white/5 relative overflow-hidden group hover:shadow-neon transition-all">
              <Zap size={40} className="text-neon-teal mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Dynamic Economy</h3>
              <p className="text-soft-blue text-sm leading-relaxed">A player-driven market where every dollar earned feels valuable.</p>
           </FadeIn>

           <FadeIn delay={0.4} className="p-8 rounded-3xl bg-bg-dark border border-white/5 relative overflow-hidden group hover:shadow-neon transition-all">
              <ShieldCheck size={40} className="text-palm-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Anti-Cheat</h3>
              <p className="text-soft-blue text-sm leading-relaxed">Play with confidence thanks to industry-leading protection systems.</p>
           </FadeIn>
        </div>
      </div>
    </section>
  )
}
