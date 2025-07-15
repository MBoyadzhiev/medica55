import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/ui/aurora-background";
import VideoHero from "@/components/VideoHero";
import CoreValues from "@/components/CoreValues";
import JoinUs from "@/components/JoinUs";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VideoHero />
      <AuroraBackground>
        <CoreValues />
      </AuroraBackground>
      <div className="mb-8 mt-8 text-center text-black">
        <Image
          src="/logo.PNG"
          alt="Медицински център Медика 55"
          className="mx-auto mb-8 w-60 h-60 object-contain mt-8"
          width={240}
          height={240}
        />
      </div>
      <JoinUs />
      <OurTeam />
      <Gallery />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
