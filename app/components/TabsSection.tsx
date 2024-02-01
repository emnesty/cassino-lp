"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/Tabs";

const tabs = [
  {
    title: "Flyperama",
    value: "Flyperama",
    imageUrl: "/images/games/flyperama.png",
    // ...
  },
  {
    title: "AngryBirds Cash",
    value: "AngryBirds Cash",
    imageUrl: "/images/games/angrybirdscash.png",
    // ...
  },
  {
    title: "Jetpackpix",
    value: "Jetpackpix",
    imageUrl: "/images/games/jetpackpix.png",
    // ...
  },
  {
    title: "Subwaysurf",
    value: "Subwaysurf",
    imageUrl: "/images/games/Subwaysurf.png",
    // ...
  },
  // ... outras abas
];

export function TabsSection() {
  return (
    <div className="bg-gray-900 h-[55rem]">
      <div className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-[77rem] mx-auto w-full  items-start justify-start">
        <Tabs
          tabs={tabs.map((tab) => ({
            ...tab,
            content: (
              <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700 to-blue-900"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <p>{tab.title}</p>
                <DummyContent imageUrl={tab.imageUrl} />
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}

interface DummyContentProps {
  imageUrl: string;
}

const DummyContent = ({ imageUrl }: DummyContentProps) => {
  return (
    <Image
      src={imageUrl}
      alt="Product Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
