import Image from "next/image";
import { TabsSection } from "./components/TabsSection";
import HeroSection from "./components/HeroSection";
import { InfiniteMovingCardsSection } from "./components/InfiniteCardsSection";
import { CardHoverEffect } from "./components/CardsHover";
import StatsSection from "./components/StatsSection";
import FooterSection from "./components/FooterSection";
import { FloatingNavSection } from "./components/FloatingNavbar";
import FeatureSection from "./components/FeatureSection";
import LogoCloudsSection from "./components/LogoClouds";

export default function Home() {
  return (
    <>
      <FloatingNavSection />
      <HeroSection />
      <InfiniteMovingCardsSection />
      <TabsSection />
      <CardHoverEffect />
      <StatsSection />
      <FeatureSection />
      <LogoCloudsSection />
      <FooterSection />
    </>
  );
}
