"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BlogPostPage from "@/components/BlogPostPage";
import Footer from "@/components/Footer";

export default function BlogPostRoutePage() {
  const [activePage, setActivePage] = useState<string>("blog-post");

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
        <BlogPostPage />
      </main>
      <Footer />
    </>
  );
}
