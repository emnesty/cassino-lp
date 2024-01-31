import Image from "next/image";
import { TabsSection } from "./components/TabsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TabsSection />
    </>
  );
}
