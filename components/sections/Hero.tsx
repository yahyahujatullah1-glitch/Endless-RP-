"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=2727&auto=format&fit=crop" 
          alt="Neon City" 
          fill 
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-bold tracking-[0.2em] uppercase shadow-neon backdrop-blur-md">
            Season 4 Live Now
          </span>
          
          <h1 className="font-heading text-6xl md:text-9xl text-white uppercase leading-none drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
            Endless <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-neon-teal">Roleplay</span>
          </h1>
          
          <p className="text-soft-blue text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            The Ultimate Mobile Roleplay Experience. Create your character, build your empire, and live a second life in a world without limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="group relative px-8 py-4 bg-neon-cyan text-bg-dark font-bold text-lg rounded-full uppercase tracking-wider overflow-hidden shadow-neon hover:shadow-[0_0_30px_#00F0FF] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            <button className="px-8 py-4 border border-white/20 hover:border-neon-cyan text-white font-bold text-lg rounded-full uppercase tracking-wider hover:bg-neon-cyan/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <MessageCircle className="w-5 h-5" /> Discord
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
