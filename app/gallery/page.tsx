import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPage from "@/components/GalleryPage";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерия | Медика 55 - Детски медицински център Варна",
  description:
    "Галерия снимки на Медика 55 - детски медицински център във Варна. Вижте нашите медицински кабинети и екип от специалисти.",
  alternates: {
    canonical: "https://medica55.bg/gallery",
  },
};

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="video-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/ped_rheuma.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <GalleryPage />
      <Footer />
    </div>
  );
}
