import Link from "next/link";
import { MessageCircle, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030e16] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-heading text-4xl text-white mb-6">ENDLESS<span className="text-neon-cyan">RP</span></h2>
        
        <div className="flex gap-6 mb-8">
           <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-neon-cyan hover:text-bg-dark transition-all"><MessageCircle size={20} /></Link>
           <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-neon-cyan hover:text-bg-dark transition-all"><Twitter size={20} /></Link>
           <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-neon-cyan hover:text-bg-dark transition-all"><Instagram size={20} /></Link>
        </div>

        <div className="flex gap-8 text-sm text-soft-blue mb-8 font-bold uppercase tracking-wider">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Support</Link>
        </div>

        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Endless RP. All rights reserved.</p>
      </div>
    </footer>
  );
}
