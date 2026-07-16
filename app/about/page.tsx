"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export default function AboutRoutePage() {
  const [activePage, setActivePage] = useState<string>("about");

  const onContactClick = () => {
    window.location.href = "/contact";
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
      />
      <main className="overflow-hidden">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
