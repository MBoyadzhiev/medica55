"use client";

import { useState, useEffect } from "react";

const images = [
  { src: "/gallery1.jpg", alt: "Gallery Image 1" },
  { src: "/gallery2.jpg", alt: "Gallery Image 2" },
  { src: "/gallery3.jpg", alt: "Gallery Image 3" },
  { src: "/gallery4.jpg", alt: "Gallery Image 4" },
  { src: "/waterpolo1.jpeg", alt: "Water Polo 1" },
  { src: "/waterpolo2.jpg", alt: "Water Polo 2" },
  { src: "/waterpolo3.jpg", alt: "Water Polo 3" },
  { src: "/waterpolo4.jpg", alt: "Water Polo 4" },
  { src: "/join-us.jpg", alt: "Join Us" },
  { src: "/trainer2.jpg", alt: "Trainer 2" },
  { src: "/djippov.webp", alt: "Djippov" },
  { src: "/Whittier_bg.png", alt: "Whittier Logo BG" },
  { src: "/Whittier.png", alt: "Whittier Logo" },
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
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              src={img.src}
              alt={img.alt}
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
          <img
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
