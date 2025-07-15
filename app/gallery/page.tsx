import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPage from "@/components/GalleryPage";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="video-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <img
          src="/waterpolo2.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Gallery
          </h1>
        </div>
      </div>
      <GalleryPage />
      <Footer />
    </div>
  );
}
