"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Button from "@/components/ui/Button";

export function JoinUs() {
  const imageUrl = "/join-us.jpg";
  return (
    <div className="h-[40rem] w-full relative flex items-center justify-center">
      <div className="w-full h-full">
        <DirectionAwareHover
          imageUrl={imageUrl}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="bg-white/70 rounded-xl shadow-lg px-8 py-8 flex flex-col items-center max-w-md mx-auto mx-4 md:mx-auto">
            <Button className="mb-4">Join Whittier Club Water Polo!</Button>
            <p className="font-normal text-sm text-black text-center">
              Contact us to learn more and become part of our team.
            </p>
          </div>
        </DirectionAwareHover>
      </div>
    </div>
  );
}

export default JoinUs;
