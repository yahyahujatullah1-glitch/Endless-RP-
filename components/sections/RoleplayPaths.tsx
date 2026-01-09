"use client";
import { FadeIn } from "../ui/FadeIn";
import { Shield, HeartPulse, Skull, Briefcase, Anchor, Users } from "lucide-react";

const paths = [
  { title: "Police", icon: Shield, color: "text-blue-400", bg: "group-hover:bg-blue-500/20", desc: "Enforce the law and keep the streets safe." },
  { title: "EMS", icon: HeartPulse, color: "text-red-400", bg: "group-hover:bg-red-500/20", desc: "Save lives when seconds count." },
  { title: "Gangster", icon: Skull, color: "text-purple-400", bg: "group-hover:bg-purple-500/20", desc: "Control the streets and rule the underground." },
  { title: "Business", icon: Briefcase, color: "text-yellow-400", bg: "group-hover:bg-yellow-500/20", desc: "Build your empire and dominate the economy." },
  { title: "Army", icon: Anchor, color: "text-green-400", bg: "group-hover:bg-green-500/20", desc: "Defend the borders with heavy artillery." },
  { title: "Civilian", icon: Users, color: "text-pink-400", bg: "group-hover:bg-pink-500/20", desc: "Live freely and carve your own path." },
];

export default function RoleplayPaths() {
  return (
    <section id="roles" className="py-24 px-4 bg-bg-dark relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-4">Choose Your <span className="text-neon-cyan">Destiny</span></h2>
          <p className="text-soft-blue max-w-2xl mx-auto">Who will you become tonight?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={`group h-full relative p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}>
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-colors ${path.bg} ${path.color}`}>
                  <path.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading tracking-wide uppercase">{path.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{path.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
