"use client";

import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

type PageType = string;

interface CardData {
  image: string;
  title: string;
  description: string;
}

const CARDS: CardData[] = [
  {
    image: "/portfolio/portfolio-3.jpeg",
    title: "The art of storytelling",
    description: "We turn creative ideas into strategic outcomes. Every pixel is intentional, shaped by insight, creativity, and real results.",
  },
  {
    image: "/portfolio/portfolio-1.jpeg",
    title: "Experiential design",
    description: "We partner with you every step of the way, combining your vision with our creative expertise to craft impactful, meaningful brand experiences.",
  },
  {
    image: "/portfolio/portfolio-6.jpeg",
    title: "Creative visions",
    description: "We design impact-driven digital experiences beyond surface-level visuals. Each creative choice is powered by insight, strategy, and measurable outcomes.",
  },
  {
    image: "/portfolio/portfolio-2.jpeg",
    title: "Visionary designs",
    description: "We create performance-driven designs that go beyond expectations. Every pixel is intentional, shaped by insight, creativity, and real results.",
  },
  {
    image: "/portfolio/Horizon-1.jpeg",
    title: "Advertising campaigns",
    description: "Our recent work highlights our dedication to creativity, strategy, and innovation. Every project is crafted with intent to deliver real impact.",
  },
];

const CARD_EASE = [
  (t: number) => 1 - Math.pow(1 - t, 4),
  (t: number) => 1 - Math.pow(1 - t, 3),
  (t: number) => t * t * (3 - 2 * t),
  (t: number) => t * t * t,
  (t: number) => 1 - Math.pow(1 - t, 4),
];

function frameMap(index: number, total: number) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  if (isFirst) {
    return {
      input:   [0,     0.05,   0.20,   0.35,  1],
      y:       ["4vh", "4vh",  "-30vh","-64vh","-64vh"],
      z:       [0,     0,      -500,   -1180, -1180],
      scale:   [0.95,  0.95,   0.82,   0.72,  0.72],
      rotateX: [0,     0,      -20,    -31,   -31],
      opacity: [1,     1,      0.6,    0,     0],
      blur:    [0,     0,      6,      12,    12],
    };
  }

  const start = index * 0.18;
  const settled = start + 0.12;
  const exit = start + 0.24;
  const gone = start + 0.36;

  if (isLast) {
    return {
      input:   [0,       start,   settled, 1],
      y:       ["121vh", "121vh", "4vh",   "4vh"],
      z:       [560,     560,     0,       0],
      scale:   [1.38,    1.38,    0.95,    0.95],
      rotateX: [64,      64,      0,       0],
      opacity: [0,       0,       1,       1],
      blur:    [0,       0,       0,       0],
    };
  }

  return {
    input:   [0,       start,   settled, exit,   gone,    1],
    y:       ["121vh", "121vh", "4vh",   "-20vh","-50vh", "-50vh"],
    z:       [560,     560,     0,      -400,   -1080,   -1080],
    scale:   [1.38,    1.38,    0.95,    0.85,   0.73,    0.73],
    rotateX: [64,      64,      0,      -15,    -30,     -30],
    opacity: [0,       0,       1,       0.7,    0,       0],
    blur:    [0,       0,       0,       3,      11,      11],
  };
}

function StackCard({
  data,
  index,
  total,
  progress,
}: {
  data: CardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const map = frameMap(index, total);
  const ease = CARD_EASE[index % CARD_EASE.length];

  const y       = useTransform(progress, map.input, map.y,       { ease });
  const z       = useTransform(progress, map.input, map.z,       { ease });
  const scale   = useTransform(progress, map.input, map.scale,   { ease });
  const rotateX = useTransform(progress, map.input, map.rotateX, { ease });
  const opacity = useTransform(progress, map.input, map.opacity, { ease });
  const blurNum = useTransform(progress, map.input, map.blur,    { ease });

  const filter = useTransform(blurNum, (v: number) => `blur(${v}px)`);

  return (
    <motion.article
      style={{
        y,
        z,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex: index + 1,
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
      }}
      onClick={() => {
        window.location.href = "/portfolio-details";
      }}
      className="absolute inset-0 flex items-center justify-center will-change-transform cursor-pointer"
    >
      <div className="w-[min(72vw,1100px)] min-w-[320px] rounded-none bg-white p-6 sm:p-8 shadow-2xl border border-black/10 transition-all duration-300 hover:border-black/20">
        <div className="aspect-[2/1] overflow-hidden rounded-none relative w-full border border-black/5">
          <Image
            src={data.image}
            alt={data.title}
            fill
            referrerPolicy="no-referrer"
            sizes="(max-w-1100px) 72vw, 1100px"
            className="object-cover transition-transform duration-700 hover:scale-105"
            draggable={false}
            priority={index === 0}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 text-left items-start">
          <h3 
            className="text-2xl sm:text-3.5xl font-black text-black uppercase tracking-tight"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-medium">
            {data.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioThreePage() {
  const [activePage, setActivePage] = useState<PageType>("portfolio-three");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 25,
    mass: 0.4,
    restDelta: 0.001,
  });

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

      {/* Main scrolling section container */}
      <section
        ref={sectionRef}
        className="relative w-full bg-[#f4f1ea] block"
        style={{ height: "450vh" }}
      >
        {/* Title layer in scrolling layout (moves out or pins nicely) */}
        <div className="absolute top-12 left-0 right-0 z-30 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center space-y-4 pt-24">
            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-black">
              PORTFOLIO
            </span>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tight leading-none uppercase"
              style={{ fontFamily: "'Parkinsans', sans-serif" }}
            >
              Our studio
            </h1>
            <div className="flex justify-center pt-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/icons/idotive-icon-8.png"
                  alt="Rotating Star Icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sticky container pinning the stack list */}
        <div
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-24"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {CARDS.map((card, i) => (
              <StackCard
                key={i}
                data={card}
                index={i}
                total={CARDS.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scroll indicator banner spacer before the footer */}
      <div className="w-full bg-[#f4f1ea] h-[20vh]" />

      <Footer />
    </>
  );
}
