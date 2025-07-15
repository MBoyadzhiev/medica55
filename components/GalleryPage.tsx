"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/ped_gastro.jpg", alt: "Gallery Image 1" },
  { src: "/ped_pulmo.jpg", alt: "Gallery Image 2" },
  { src: "/ped_alergy.jpg", alt: "Gallery Image 3" },
  { src: "/ped_endo.jpg", alt: "Gallery Image 4" },
  { src: "/ped_rheuma.jpg", alt: "Gallery Image 5" },
  { src: "/pediatrics.jpg", alt: "Gallery Image 6" },
  { src: "/ped_gastro.jpg", alt: "Gallery Image 7" },
  { src: "/ped_pulmo.jpg", alt: "Gallery Image 8" },
  { src: "/ped_alergy.jpg", alt: "Gallery Image 9" },
  { src: "/ped_endo.jpg", alt: "Gallery Image 10" },
  { src: "/ped_rheuma.jpg", alt: "Gallery Image 11" },
  { src: "/pediatrics.jpg", alt: "Gallery Image 12" },
  { src: "/ped_gastro.jpg", alt: "Gallery Image 13" },
  { src: "/ped_pulmo.jpg", alt: "Gallery Image 14" },
  { src: "/ped_alergy.jpg", alt: "Gallery Image 15" },
  { src: "/ped_endo.jpg", alt: "Gallery Image 16" },
  { src: "/ped_rheuma.jpg", alt: "Gallery Image 17" },
  { src: "/pediatrics.jpg", alt: "Gallery Image 18" },
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
          <div key={img.src + idx}>
            <Image
              className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              onClick={() => setLightboxIdx(idx)}
            />
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
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
