"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/Tabs";

const tabs = [
  {
    title: "Flyperama",
    value: "Flyperama",
    imageUrl: "/images/games/flyperama_mac.png",
    // ...
  },
  {
    title: "AngryBirds Cash",
    value: "AngryBirds Cash",
    imageUrl: "/images/games/angrybirds_mac.png",
    // ...
  },
  {
    title: "Jetpackpix",
    value: "Jetpackpix",
    imageUrl: "/images/games/jetpack_mac.png",
    // ...
  },
  {
    title: "Subway Surf",
    value: "Subway Surf",
    imageUrl: "/images/games/subway_mac.png",
    // ...
  },
  // ... outras abas
];

export function TabsSection() {
  return (
    <div className="bg-gray-900 h-[1130px]">
      <div className=" h-[65rem]  md:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-[77rem] mx-auto w-full  items-start justify-start">
        <h2
          className="text-2xl font-semibold leading-7 text-indigo-400"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Produtos
        </h2>
        <p
          className="mt-2 text-3xl mb-10 font-bold tracking-tight text-white sm:text-4xl"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Lorem Ipsum
        </p>
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
      className="object-none md:object-cover sm:object-cover object-left-top h-[60%]  md:h-[80%] absolute bottom-10  inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
