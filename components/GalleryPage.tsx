"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  // { src: "/inside-1.jpg", alt: "Медика 55 Варна" },
  { src: "/inside-2.png", alt: "Медика 55 Варна" },
  { src: "/inside-3.png", alt: "Медика 55 Варна" },
  { src: "/medica1.jpg", alt: "Медика 55 Варна" },
  { src: "/medica2.jpg", alt: "Медика 55 Варна" },
  { src: "/medica3.jpg", alt: "Медика 55 Варна" },
  { src: "/medica4.jpg", alt: "Медика 55 Варна" },
  { src: "/medica5.jpg", alt: "Медика 55 Варна" },
  { src: "/medica6.jpg", alt: "Медика 55 Варна" },
];

const GalleryPage = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Close on ESC
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIdx]);

  return (
    <div className="py-8 px-2 md:px-8 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={img.src + idx} className="flex flex-col items-center">
            <Image
              className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              onClick={() => setLightboxIdx(idx)}
            />
            <span className="mt-2 text-sm text-gray-700 text-center">
              {img.alt}
            </span>
          </div>
        ))}
      </div>
      {/* Lightbox Overlay */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out"
          onClick={() => setLightboxIdx(null)}
        >
          <Image
            src={images[lightboxIdx].src}
            alt={images[lightboxIdx].alt}
            width={1200}
            height={800}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
