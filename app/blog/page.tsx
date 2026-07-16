"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";

export default function BlogRoutePage() {
  const [activePage, setActivePage] = useState<string>("blog");

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
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}
