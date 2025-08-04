"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const images = [
  // "/inside-1.jpg",
  "/inside-2.png",
  "/inside-3.png",
  "/medica1.jpg",
  "/medica2.jpg",
  "/medica3.jpg",
  "/medica4.jpg",
  "/medica5.jpg",
  "/medica6.jpg",
];

const PhotoHero = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds total cycle (5 seconds display + 5 seconds transition)
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="photo-hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden shadow-lg"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Hero Gallery"
        />
      </AnimatePresence>

      {/* Desktop content */}
      <div className="absolute bottom-8 left-8 hidden lg:block z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-white text-4xl font-bold tracking-wide drop-shadow-2xl">
            Медика 55
          </div>
          <div className="text-white/90 text-xl font-medium tracking-wide drop-shadow-lg mt-1">
            с грижа за децата
          </div>
        </motion.div>
        <Button
          className="bg-sky-700 hover:bg-sky-800 text-black border-2 border-white/20 shadow-lg"
          onClick={() => router.push("/appointments")}
        >
          Запазете час онлайн
        </Button>
      </div>

      {/* Mobile content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center lg:hidden z-20 px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-2xl">
              Медика 55
            </div>
            <div className="text-white/90 text-lg md:text-xl font-medium tracking-wide drop-shadow-lg mt-1">
              с грижа за децата
            </div>
          </motion.div>
          <Button
            className="bg-sky-700 hover:bg-sky-800 text-black border-2 border-white/20 shadow-lg px-6 py-3 text-base font-semibold"
            onClick={() => router.push("/appointments")}
          >
            Запазете час онлайн
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotoHero;
