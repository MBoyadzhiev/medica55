"use client";

import { Carousel } from "@/components/ui/carousel";
export function Gallery() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "See All Photos",
      src: "/gallery1.jpg",
    },
    {
      title: "Urban Dreams",
      button: "See All Photos",
      src: "/gallery2.jpg",
    },
    {
      title: "Neon Nights",
      button: "See All Photos",
      src: "/gallery3.jpg",
    },
    {
      title: "Desert Whispers",
      button: "See All Photos",
      src: "/gallery4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

export default Gallery;
