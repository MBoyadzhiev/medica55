"use client";

import { Carousel } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

export function Gallery() {
  const router = useRouter();
  const slideData = [
    {
      title: "Детска Гастроентерология",
      button: "Виж всички снимки",
      src: "/medica1.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Пулмология",
      button: "Виж всички снимки",
      src: "/medica2.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Алергология",
      button: "Виж всички снимки",
      src: "/medica4.jpg",
      onClick: () => router.push("/gallery"),
      width: 800,
      height: 600,
    },
    {
      title: "Детска Ендокринология",
      button: "Виж всички снимки",
      src: "/medica5.jpg",
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
