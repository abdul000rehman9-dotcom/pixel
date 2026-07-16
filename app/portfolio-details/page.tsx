"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type PageType = string;

export default function PortfolioDetailsPage() {
  const [activePage, setActivePage] = useState<PageType>("portfolio-details");

  const onContactClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          if (page === "home") {
            window.location.href = "/";
          } else {
            window.location.href = `/${page}`;
          }
        }}
        onContactClick={onContactClick}
        transparent={true}
      />

      <main className="w-full bg-[#f4f1ea] text-black min-h-screen pt-24 pb-32 overflow-hidden">
        {/* HERO TITLE LAYER */}
        <div className="max-w-7xl mx-auto text-center space-y-4 mt-12 mb-10 px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tight leading-none"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            Advertising with edge
          </motion.h1>
        </div>

        {/* METADATA HORIZONTAL ROWS BAR */}
        <div className="max-w-7xl mx-auto border-y border-black/10 py-4 mb-12 grid grid-cols-3 text-center text-[10px] font-mono tracking-[0.2em] font-black uppercase text-neutral-500 px-6 md:px-16">
          <div>2024</div>
          <div>CORPORATE IDENTITY</div>
          <div>CAMPAIGN PRINT</div>
        </div>

        {/* HERO PROJECT IMAGE */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20">
          <div className="relative w-full aspect-[2/1] overflow-hidden border border-black/10 shadow-lg">
            <Image
              src="/portfolio/Horizon.jpeg"
              alt="Advertising with edge main feature"
              fill
              referrerPolicy="no-referrer"
              sizes="(max-w-[1400px]) 100vw, 1400px"
              priority
              className="object-cover transition-transform duration-1000 hover:scale-102"
            />
          </div>
        </div>

        {/* TWO-COLUMN CONTENT GRID SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32">
          
          {/* Column 1: Left Details Summary Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-black/10 p-8 sm:p-10 shadow-lg">
              <h2 
                className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-4"
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
              >
                Details about the project
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-semibold mb-8">
                Discover the vision, strategy, and craftsmanship that shaped this project into a powerful brand experience.
              </p>

              {/* Grid of structured meta metrics */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-black/10 pt-8">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-bold uppercase block mb-1">
                    CLIENT
                  </span>
                  <span className="text-sm font-bold uppercase text-black">
                    Conceptiva
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-bold uppercase block mb-1">
                    LOCATION
                  </span>
                  <span className="text-sm font-bold uppercase text-black">
                    Singapore
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-bold uppercase block mb-1">
                    SERVICES
                  </span>
                  <span className="text-sm font-bold uppercase text-black">
                    Brand Strategy, UI/UX Design
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-bold uppercase block mb-1">
                    YEAR
                  </span>
                  <span className="text-sm font-bold uppercase text-black">
                    2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Right Strategic Narratives & Mini Cards */}
          <div className="lg:col-span-8 space-y-10 text-left">
            <div className="space-y-6">
              <h2 
                className="text-3xl sm:text-4.5xl font-black text-black uppercase tracking-tight leading-tight"
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
              >
                Turning vision into campaigns that move audiences
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 font-medium">
                We turn bold ideas into captivating campaigns that spark emotion and inspire action. Every concept begins with a deep understanding of your brand's vision and audience, ensuring every message resonates where it matters most. Through strategy, storytelling, and design, we craft campaigns that don't just capture attention they create lasting impressions, drive meaningful engagement, and move audiences toward your brand's goals.
              </p>
              <p className="text-sm leading-relaxed text-neutral-600 font-medium">
                We transform bold ideas into impactful campaigns that evoke emotion and inspire action. Grounded in a deep understanding of your brand's vision and audience, every message is crafted with purpose. Through strategy, storytelling, and design, we create campaigns that leave lasting impressions and drive meaningful engagement.
              </p>
            </div>

            <div className="h-px bg-black/10 my-8" />

            <div className="space-y-6">
              <h3 
                className="text-lg font-black uppercase tracking-widest text-neutral-900"
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
              >
                Recent task
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 font-medium">
                Our recent work highlights our dedication to creativity, strategy, and innovation. Every project is crafted with intent — combining design, storytelling, and insight to deliver real impact. From branding to campaigns, we turn ideas into results that elevate brands and connect with audiences meaningfully.
              </p>
            </div>

            {/* BLACK & WHITE SPECIAL HOVER CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              
              {/* Card 1: Strategy */}
              <div 
                className="group relative bg-black text-white p-8 border border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-black hover:border-black cursor-pointer shadow-md rounded-2xl min-h-[140px] flex flex-col justify-between"
              >
                <h4 
                  className="text-xl font-black uppercase tracking-tight transition-colors duration-500"
                  style={{ fontFamily: "'Parkinsans', sans-serif" }}
                >
                  Strategy
                </h4>
                <p className="text-xs font-semibold leading-relaxed text-neutral-400 group-hover:text-neutral-600 transition-colors duration-500 mt-2">
                  User-centric planning with clear objectives.
                </p>
              </div>

              {/* Card 2: Design */}
              <div 
                className="group relative bg-black text-white p-8 border border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-black hover:border-black cursor-pointer shadow-md rounded-2xl min-h-[140px] flex flex-col justify-between"
              >
                <h4 
                  className="text-xl font-black uppercase tracking-tight transition-colors duration-500"
                  style={{ fontFamily: "'Parkinsans', sans-serif" }}
                >
                  Design
                </h4>
                <p className="text-xs font-semibold leading-relaxed text-neutral-400 group-hover:text-neutral-600 transition-colors duration-500 mt-2">
                  Elegant visuals with functional clarity.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM PORTFOLIO EXPLORATION MODULE */}
        <div className="bg-white border-t border-black/10 py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Exploration headline */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 
                className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight leading-tight"
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
              >
                Explore our portfolio and discover the creativity behind our work
              </h2>
            </div>

            {/* Two high-fidelity projects matching FeaturedWork.tsx hover marquee tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
              
              {/* Project Card 1 (Experiential design) */}
              <article 
                onClick={() => {
                  window.location.href = "/portfolio-details";
                }}
                className="group cursor-pointer w-full text-left"
              >
                <div className="relative h-[280px] sm:h-[350px] overflow-hidden rounded-2xl bg-neutral-100 border border-black/5 shadow-sm">
                  <Image
                    src="/portfolio/portfolio-1.jpeg"
                    alt="Experiential design"
                    fill
                    referrerPolicy="no-referrer"
                    sizes="(max-w-[700px]) 100vw, 700px"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[5px]"
                  />

                  {/* Marquee hover track */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/5">
                    <div className="absolute inset-x-0 bg-white py-4 shadow-md transform -translate-y-1/2 top-1/2 border-y border-black/5 overflow-hidden flex">
                      <div className="marquee-track flex whitespace-nowrap gap-6 items-center shrink-0 animate-marquee-spin-fast">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <span key={i} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-black">
                            <span>Experiential design</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#f26b2c] inline-block" />
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="z-10 transition-transform duration-500 scale-90 group-hover:scale-100">
                      <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white/25 text-white text-2xl backdrop-blur-md border border-white/40 shadow-2xl transition-transform duration-300 hover:scale-105">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 
                      className="text-xl sm:text-2xl font-black text-black uppercase hover:text-[#f26b2c] transition-colors"
                      style={{ fontFamily: "'Parkinsans', sans-serif" }}
                    >
                      Experiential design
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Brand guidelines", "Editorial design"].map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded-full border border-neutral-300 px-3.5 py-1 text-xs text-neutral-600 bg-white cursor-default font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white hover:bg-[#f26b2c] transition-colors">
                    →
                  </button>
                </div>
              </article>

              {/* Project Card 2 (Visionary designs) */}
              <article 
                onClick={() => {
                  window.location.href = "/portfolio-details";
                }}
                className="group cursor-pointer w-full text-left"
              >
                <div className="relative h-[280px] sm:h-[350px] overflow-hidden rounded-2xl bg-neutral-100 border border-black/5 shadow-sm">
                  <Image
                    src="/portfolio/portfolio-2.jpeg"
                    alt="Visionary designs"
                    fill
                    referrerPolicy="no-referrer"
                    sizes="(max-w-[700px]) 100vw, 700px"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[5px]"
                  />

                  {/* Marquee hover track */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/5">
                    <div className="absolute inset-x-0 bg-white py-4 shadow-md transform -translate-y-1/2 top-1/2 border-y border-black/5 overflow-hidden flex">
                      <div className="marquee-track flex whitespace-nowrap gap-6 items-center shrink-0 animate-marquee-spin-fast">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <span key={i} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-black">
                            <span>Visionary designs</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#f26b2c] inline-block" />
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="z-10 transition-transform duration-500 scale-90 group-hover:scale-100">
                      <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white/25 text-white text-2xl backdrop-blur-md border border-white/40 shadow-2xl transition-transform duration-300 hover:scale-105">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 
                      className="text-xl sm:text-2xl font-black text-black uppercase hover:text-[#f26b2c] transition-colors"
                      style={{ fontFamily: "'Parkinsans', sans-serif" }}
                    >
                      Visionary designs
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Logo system", "Marketing collateral"].map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded-full border border-neutral-300 px-3.5 py-1 text-xs text-neutral-600 bg-white cursor-default font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white hover:bg-[#f26b2c] transition-colors">
                    →
                  </button>
                </div>
              </article>

            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Speed optimization styles for quick rotation */}
      <style jsx global>{`
        @keyframes marquee-spin-fast {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-spin-fast {
          animation: marquee-spin-fast 18s linear infinite;
        }
      `}</style>
    </>
  );
}
