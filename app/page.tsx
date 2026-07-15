"use client"
import Header from "@/components/Header";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import Projects from "@/components/Projects";
import { Services } from "@/components/Services";
import { DarkSection } from "@/components/DarkSection";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [activePage, setActivePage] = useState<string>("home");

  const onContactClick = () => {
    // simple handler; adjust as needed
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

type PageType = string;
interface FooterProps {
  setActivePage: (page: PageType) => void;
}
  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onContactClick={onContactClick}
      />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <FeaturedWork />
        <Services />
        <Projects />
        <main className="bg-black min-h-screen">
         <Stats />
          <div className="h-[40vh] flex items-center justify-center bg-black"></div>
          <DarkSection />
          {/* <div className="h-[100vh] bg-black" /> */}
        </main>
        <Process />
        <Testimonials />
   
      </main>
      <Footer />
    </>
  );
}
