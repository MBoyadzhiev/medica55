import Image from "next/image";

const ClubIdentityCard = () => (
  <div className="flex flex-col items-center justify-center bg-white p-8 w-full max-w-xs mx-auto border-r-4 border-sky-200">
    <Image
      src="/logo.PNG"
      alt="МЦ Медика 55"
      className="w-40 h-40 object-contain mb-4"
      width={160}
      height={160}
    />
    <h2 className="text-2xl font-bold text-sky-700 text-center">
      Медицински център &quot;Медика 55&quot;
    </h2>
  </div>
);

export default ClubIdentityCard;
