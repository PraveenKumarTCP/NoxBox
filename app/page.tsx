"use client";

import AboutSection from "@/components/AboutSection";
import { AOSInit } from "@/components/AOSInit";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetinTouch";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductSection";
import PurposeSection from "@/components/PurposeSection";
import StayUpdated from "@/components/StayUpdated";
import SupportSection from "@/components/SupportSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

  AOSInit();

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,   // scroll speed
      easing: (t : number) => 1 - Math.pow(1 - t, 3), // easing curve
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      
      <Navbar />

      <HeroSection/>


      {/* Dummy Section for Scroll */}
      {/* <section className="h-screen bg-white" /> */}
      <AboutSection/>
      <ProductsSection/>
      <SupportSection/>
      <PurposeSection/>
      <GetInTouch/>
      <StayUpdated/>
      <Footer/>
    </main>
  );
}