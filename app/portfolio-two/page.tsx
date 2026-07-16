"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

type PageType = string;

// Unique selection of portfolio images
const PORTFOLIO_TWO_PROJECTS = [
  {
    id: "advertising-with-edge",
    title: "Advertising with edge",
    image: "/portfolio/Avyron.jpeg",
    tags: ["Corporate identity", "Campaign print"],
    marqueeText: "Advertising with edge"
  },
  {
    id: "experiential-design",
    title: "Experiential design",
    image: "/portfolio/portfolio-10.jpeg",
    tags: ["Brand guidelines", "Editorial design"],
    marqueeText: "Experiential design"
  },
  {
    id: "visionary-designs",
    title: "Visionary designs",
    image: "/portfolio/portfolio-9.jpeg",
    tags: ["Logo system", "Marketing collateral"],
    marqueeText: "Visionary designs"
  },
  {
    id: "creative-visions",
    title: "Creative visions",
    image: "/portfolio/portfolio-8.jpeg",
    tags: ["Brand strategy", "Billboard design"],
    marqueeText: "Creative visions"
  },
  {
    id: "the-art-of-storytelling",
    title: "The art of storytelling",
    image: "/portfolio/portfolio-7.jpeg",
    tags: ["Visual identity", "Poster design"],
    marqueeText: "The art of storytelling"
  },
  {
    id: "advertising-campaigns",
    title: "Advertising campaigns",
    image: "/portfolio/portfolio-5.jpeg",
    tags: ["Brand identity", "Print design"],
    marqueeText: "Advertising campaigns"
  }
];

function WorkCard({ project }: { project: typeof PORTFOLIO_TWO_PROJECTS[0] }) {
  return (
    <article 
      onClick={() => {
        window.location.href = "/portfolio-details";
      }}
      className="group cursor-pointer w-full text-left"
    >
      {/* Zoom Wrap Container */}
      <div className="relative h-[290px] sm:h-[380px] overflow-hidden rounded-2xl bg-neutral-200/50 border border-black/5 shadow-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          referrerPolicy="no-referrer"
          sizes="(max-w-[700px]) 100vw, 700px"
          loading="lazy"
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[5px]"
        />

        {/* Marquee horizontal stripe and circular arrow on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/5">
          
          {/* Moving track banner */}
          <div className="absolute inset-x-0 bg-white py-4 shadow-md transform -translate-y-1/2 top-1/2 border-y border-black/5 overflow-hidden flex">
            <div className="marquee-track flex whitespace-nowrap gap-6 items-center shrink-0 animate-marquee-spin">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-black">
                  <span>{project.marqueeText}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f26b2c] inline-block" />
                </span>
              ))}
            </div>
          </div>

          {/* Glowing cursor button in center */}
          <div className="z-10 transition-transform duration-500 scale-90 group-hover:scale-100">
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white/25 text-white text-2xl backdrop-blur-md border border-white/40 shadow-2xl transition-transform duration-300 hover:scale-105">
              ↗
            </div>
          </div>
        </div>
      </div>

      {/* Info details row */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 
            className="text-2xl font-black tracking-tight text-black uppercase hover:text-[#f26b2c] transition-colors"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="rounded-full border border-neutral-300 px-4 py-1.5 text-xs text-neutral-600 bg-white/80 cursor-default font-semibold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rounded arrow button */}
        <button 
          className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white shrink-0 hover:bg-[#f26b2c] transition-colors duration-300"
        >
          →
        </button>
      </div>
    </article>
  );
}

export default function PortfolioTwoPage() {
  const [activePage, setActivePage] = useState<PageType>("portfolio-two");

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

      <main className="w-full bg-[#f4f1ea] text-black min-h-screen pt-24 pb-32 px-6 md:px-16 overflow-hidden">
        {/* HERO HEADER TITLE */}
        <div className="max-w-7xl mx-auto text-center space-y-4 mt-12 mb-20">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-black">
            PORTFOLIO
          </span>
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tight leading-none uppercase"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            Our studio
          </h1>

          {/* SPINNING ORANGE STAR */}
          <div className="flex justify-center pt-6">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="relative w-12 h-12"
            >
              <Image
                src="/icons/idotive-icon-8.png"
                alt="Rotating Star Icon"
                fill
                sizes="48px"
                className="object-contain animate-spin-reverse"
              />
            </motion.div>
          </div>
        </div>

        {/* TWO COLUMN GRID OF WORKCARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {PORTFOLIO_TWO_PROJECTS.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />

      {/* Embedded CSS animations if required for continuous marquee motion */}
      <style jsx global>{`
        @keyframes marquee-spin {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-spin {
          animation: marquee-spin 22s linear infinite;
        }
      `}</style>
    </>
  );
}
