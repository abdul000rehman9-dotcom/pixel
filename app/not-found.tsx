"use client";

import { useState } from "react";
import Header from "@/components/Header";
import NotFoundPage from "@/components/NotFoundPage";
import Footer from "@/components/Footer";

export default function NextNotFoundPage() {
  const [activePage, setActivePage] = useState<string>("404");

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
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
