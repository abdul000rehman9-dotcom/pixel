"use client";

import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Custom type for active navigation page
type PageType = string;

// Shuffled subset of images from the portfolio folder
const PORTFOLIO_ONE_PROJECTS = [
  {
    id: "advertising-with-edge",
    title: "Advertising with edge",
    image: "/portfolio/Horizon.jpeg",
    subtitle: "PORTFOLIO"
  },
  {
    id: "experiential-design",
    title: "Experiential design",
    image: "/portfolio/portfolio-1.jpeg",
    subtitle: "PORTFOLIO"
  },
  {
    id: "visionary-designs",
    title: "Visionary designs",
    image: "/portfolio/portfolio-2.jpeg",
    subtitle: "PORTFOLIO"
  },
  {
    id: "creative-visions",
    title: "Creative visions",
    image: "/portfolio/portfolio-6.jpeg",
    subtitle: "PORTFOLIO"
  },
  {
    id: "the-art-of-storytelling",
    title: "The art of storytelling",
    image: "/portfolio/portfolio-3.jpeg",
    subtitle: "PORTFOLIO"
  },
  {
    id: "advertising-campaigns",
    title: "Advertising campaigns",
    image: "/portfolio/portfolio-4.jpeg",
    subtitle: "PORTFOLIO"
  }
];

function ScrollCard({ project, index }: { project: typeof PORTFOLIO_ONE_PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the individual card relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"]
  });

  // Smooth out progress updates using Spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.2
  });

  // Scale: zooms in near center, scales down when scrolling past
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  
  // Opacity: fades in near center
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.65, 1, 0.65]);

  return (
    <div 
      id={`card-${project.id}`}
      ref={cardRef} 
      className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0"
    >
      <motion.div
        style={{ scale, opacity }}
        onClick={() => {
          window.location.href = "/portfolio-details";
        }}
        className="group cursor-pointer relative w-full max-w-4xl aspect-[1.8/1] bg-neutral-200 overflow-hidden shadow-lg border border-black/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          referrerPolicy="no-referrer"
          sizes="(max-w-4xl) 100vw, 1200px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Floating white hover circle button (from design spec) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white/25 text-white text-2xl backdrop-blur-md border border-white/40 shadow-xl transition-transform duration-300 hover:scale-110">
            ↗
          </div>
        </div>
      </motion.div>

      {/* Centered title below card */}
      <h3 
        className="mt-6 text-xl sm:text-2xl font-black text-black uppercase tracking-tight hover:text-[#f26b2c] transition-colors cursor-pointer"
        style={{ fontFamily: "'Parkinsans', sans-serif" }}
        onClick={() => {
          window.location.href = "/portfolio-details";
        }}
      >
        {project.title}
      </h3>
    </div>
  );
}

export default function PortfolioOnePage() {
  const [activePage, setActivePage] = useState<PageType>("portfolio-one");

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
        {/* HERO TITLE SECTION */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mt-12 mb-20">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-black">
            PORTFOLIO
          </span>
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tight leading-none uppercase"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            Our work
          </h1>

          {/* SPINNING ORANGE STAR */}
          <div className="flex justify-center pt-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="relative w-12 h-12"
            >
              <Image
                src="/icons/idotive-icon-8.png"
                alt="Rotating Star Icon"
                fill
                sizes="48px"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* LINE-UP SCROLLING CONTAINER */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {PORTFOLIO_ONE_PROJECTS.map((project, index) => (
            <ScrollCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
