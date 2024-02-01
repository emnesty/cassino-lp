import Image from "next/image";
import { TabsSection } from "./components/TabsSection";
import HeroSection from "./components/HeroSection";
import { InfiniteMovingCardsSection } from "./components/InfiniteCardsSection";
import { CardHoverEffect } from "./components/CardsHover";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsSection />
      <TabsSection />
      <CardHoverEffect />
    </>
  );
}
