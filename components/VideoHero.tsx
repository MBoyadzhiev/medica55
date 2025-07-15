"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const images = [
  "/ped_gastro.jpg",
  "/ped_pulmo.jpg",
  "/ped_alergy.jpg",
  "/ped_endo.jpg",
  "/ped_rheuma.jpg",
  "/pediatrics.jpg",
];

const PhotoHero = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="photo-hero-section"
      className="relative h-[250px] md:h-[350px] lg:h-[600px] 2xl:h-[1064px] flex items-center justify-center overflow-hidden shadow-lg"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Hero Gallery"
        />
      </AnimatePresence>
      <div className="absolute bottom-8 left-8 hidden lg:block z-10">
        <Button
          className="bg-sky-700 hover:bg-sky-800 text-black border-2 border-white/20 shadow-lg"
          onClick={() => router.push("/appointments")}
        >
          Запазете час онлайн
        </Button>
      </div>
    </section>
  );
};

export default PhotoHero;
