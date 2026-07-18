"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TeamPage from "@/components/TeamPage";
import Footer from "@/components/Footer";

export default function TeamRoutePage() {
  const [activePage, setActivePage] = useState<string>("team");

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
        <TeamPage />
      </main>
      <Footer />
    </>
  );
}
