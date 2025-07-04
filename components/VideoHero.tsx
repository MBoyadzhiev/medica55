"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const VideoHero = () => {
  const router = useRouter();
  return (
    <section
      id="video-hero-section"
      className="relative h-[250px] md:h-[350px] lg:h-[600px] 2xl:h-[1064px] flex items-center justify-center overflow-hidden shadow-lg"
    >
      <video
        src="/video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        If you see this text, the video cannot be loaded or played.
      </video>
      <div className="absolute bottom-8 left-8 hidden lg:block z-10">
        <Button
          className="bg-sky-700 hover:bg-sky-800 text-black border-2 border-white/20 shadow-lg"
          onClick={() => router.push("/contacts")}
        >
          Join Us
        </Button>
      </div>
    </section>
  );
};

export default VideoHero;
