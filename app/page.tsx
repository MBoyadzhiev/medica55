import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/ui/aurora-background";
import VideoHero from "@/components/VideoHero";
import CoreValues from "@/components/CoreValues";
import TrainingCalendar from "@/components/TrainingCalendar";
import Coaches from "@/components/Coaches";
import JoinUs from "@/components/JoinUs";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      <Navbar />
      <VideoHero />
      <AuroraBackground>
        <CoreValues />
      </AuroraBackground>
      <div className="mb-8 mt-8 text-center text-black">
        <img
          src="/Whittier.png"
          alt="Whittier Club Water Polo Logo"
          className="mx-auto mb-8 w-60 h-60 object-contain mt-8"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-8 text-center text-black">
          Training Schedule
        </h2>
      </div>
      <TrainingCalendar />
      <Coaches />
      <JoinUs />
      <OurTeam />
      <Gallery />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
