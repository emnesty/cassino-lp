import Image from "next/image";
import { TabsSection } from "./components/TabsSection";
import HeroSection from "./components/HeroSection";
import { InfiniteMovingCardsSection } from "./components/InfiniteCardsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsSection />
      <TabsSection />
    </>
  );
}
