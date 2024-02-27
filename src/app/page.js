"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <main className="dark:bg-dark dark:text-white">
      <Hero />
      <Contact />
    </main>
  );
}
