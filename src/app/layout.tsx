import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "Endless RP | Next-Gen Roleplay",
  description: "The ultimate mobile roleplay experience. Join the neon-soaked streets.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased bg-bg-dark text-white selection:bg-neon-cyan selection:text-bg-dark`}>
        {children}
      </body>
    </html>
  );
}
