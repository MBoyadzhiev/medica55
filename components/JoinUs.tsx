"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function JoinUs() {
  const router = useRouter();
  const imageUrl = "/pediatrics.jpg";
  return (
    <div className="h-[32rem] md:h-[40rem] w-full relative flex items-center justify-center">
      <div className="w-full h-full">
        <DirectionAwareHover
          imageUrl={imageUrl}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="bg-white/80 rounded-xl shadow-lg px-4 py-6 flex flex-col items-center max-w-xs w-full mx-2 md:max-w-md md:px-8 md:py-8 md:mx-auto">
            <Button
              className="mb-4"
              onClick={() => router.push("/appointments")}
            >
              Запазете час онлайн
            </Button>
            <p className="font-normal text-sm text-black text-center">
              Запишете онлайн час за консултация с нашите специалисти
            </p>
          </div>
        </DirectionAwareHover>
      </div>
    </div>
  );
}

export default JoinUs;
