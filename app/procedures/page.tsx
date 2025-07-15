"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClubIdentityCard from "@/components/ClubIdentityCard";
import HistoryAccordion from "@/components/HistoryAccordion";
import HistoryIntro from "@/components/HistoryIntro";
import JoinUs from "@/components/JoinUs";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="video-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <img
          src="/ped_pulmo.jpg"
          alt="History Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10"></div>
      </div>
      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 w-full">
            <div className="flex-shrink-0">
              <ClubIdentityCard />
            </div>
            <div className="flex-1 w-full">
              <HistoryIntro />
            </div>
          </div>
          <HistoryAccordion />
        </div>
        <JoinUs />
      </section>
      <Footer />
    </div>
  );
}
