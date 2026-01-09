import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import RoleplayPaths from "@/components/sections/RoleplayPaths";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <RoleplayPaths />
      <Features />
      
      {/* Final CTA */}
      <section className="py-24 text-center bg-gradient-to-t from-neon-cyan/10 to-transparent">
        <h2 className="font-heading text-5xl md:text-7xl text-white mb-6 uppercase">
            Start Your <span className="text-neon-cyan">Legacy</span> Today
        </h2>
        <button className="px-10 py-4 bg-neon-cyan text-bg-dark font-bold text-xl rounded-full uppercase shadow-neon hover:scale-105 transition-transform">
            Download Now
        </button>
      </section>

      <Footer />
    </main>
  );
}
