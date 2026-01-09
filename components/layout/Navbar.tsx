"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-bg-dark/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-heading text-3xl tracking-widest text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
          ENDLESS<span className="text-neon-cyan">RP</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {["About", "Features", "Roles", "Community"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-wider text-soft-blue hover:text-neon-cyan transition-colors">
              {item}
            </Link>
          ))}
          <button className="px-6 py-2 bg-neon-cyan text-bg-dark font-bold rounded-full uppercase text-sm hover:shadow-neon transition-all hover:scale-105">
            Play Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-dark border-t border-white/10 p-6 flex flex-col gap-4">
           {["About", "Features", "Roles", "Community"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase text-white">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
