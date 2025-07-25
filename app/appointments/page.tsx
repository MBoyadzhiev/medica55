import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentsList from "@/components/AppointmentsList";
import Image from "next/image";

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="appointments-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/pediatrics.jpg"
          alt="Appointments Hero"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10"></div>
      </div>
      <AppointmentsList />
      <Footer />
    </div>
  );
}
