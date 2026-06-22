"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import TextReveal from "../components/landing/TextReveal";
import ServiceCards from "../components/landing/ServiceCards";
import PhotoCarousel from "../components/landing/PhotoCarousel";
import EssenceSection from "../components/landing/EssenceSection";
import PastorsSection from "../components/landing/PastorsSection";
import KidsSection from "../components/landing/KidsSection";
import YouthSection from "../components/landing/YouthSection";
import ReadingPlanCTA from "../components/landing/ReadingPlanCTA";
import LocationFooter from "../components/landing/LocationFooter";

// Dynamic import SmoothScroll to avoid SSR issues with Lenis
const SmoothScroll = dynamic(
  () => import("../components/landing/SmoothScroll"),
  { ssr: false }
);

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TextReveal />
      <ServiceCards />
      <PhotoCarousel />
      <EssenceSection />
      <YouthSection />
      <KidsSection />
      <PastorsSection />
      <ReadingPlanCTA />
      <LocationFooter />
    </>
  );
}
