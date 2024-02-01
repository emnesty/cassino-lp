import Image from "next/image";
import { TabsSection } from "./components/TabsSection";
import HeroSection from "./components/HeroSection";
import { InfiniteMovingCardsSection } from "./components/InfiniteCardsSection";
import { CardHoverEffect } from "./components/CardsHover";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsSection />
      <TabsSection />
      <CardHoverEffect />
      <StatsSection />
    </>
  );
}
