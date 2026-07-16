"use client";

import { useState } from "react";
import Header from "@/components/Header";
import StyleGuidePage from "@/components/StyleGuidePage";
import Footer from "@/components/Footer";

export default function StyleGuideRoutePage() {
  const [activePage, setActivePage] = useState<string>("style-guide");

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
      />
      <main className="overflow-hidden">
        <StyleGuidePage />
      </main>
      <Footer />
    </>
  );
}
