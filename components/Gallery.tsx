"use client";

import { Carousel } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import Image from "next/image";
export function Gallery() {
  const router = useRouter();
  const slideData = [
    {
      title: "Детска Гастроентерология",
      button: "Виж всички снимки",
      src: "/ped_gastro.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Пулмология",
      button: "Виж всички снимки",
      src: "/ped_pulmo.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Алергология",
      button: "Виж всички снимки",
      src: "/ped_alergy.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Ендокринология",
      button: "Виж всички снимки",
      src: "/ped_endo.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-white">
      <Carousel slides={slideData} />
    </div>
  );
}

export default Gallery;
