import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentsList from "@/components/AppointmentsList";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Записване на час | Медика 55 - Детски медицински център Варна",
  description:
    "Запишете час при детски специалист в Медика 55 Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Телефон: 0899 83 48 10.",
  alternates: {
    canonical: "https://medica55.bg/appointments",
  },
};

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
          alt="Медика 55 - Записване на час при детски специалист във Варна"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10"></div>
      </div>
      <main>
        <section className="py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Записване на час - Медика 55 | Medica 55
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-medium px-4">
            Моля при записване в календар добавете телефонен номер в полето за
            допълнителна информация
          </p>
        </section>
        {/* Local business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Медика 55 | Medica 55",
              address: {
                "@type": "PostalAddress",
                streetAddress: "бул. Владислав Варненчик №142-144, ет. 2",
                addressLocality: "Варна",
                addressCountry: "BG",
              },
              telephone: "0899 83 48 10",
              url: "https://medica55.bg/",
            }),
          }}
        />
        <AppointmentsList />
      </main>
      <Footer />
    </div>
  );
}
