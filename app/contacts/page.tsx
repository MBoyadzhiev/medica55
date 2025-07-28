import Navbar from "@/components/Navbar";
import LocationMap from "@/components/LocationMap";
import ContactInfo from "@/components/ContactInfo";
import WorkingHours from "@/components/WorkingHours";
import Image from "next/image";

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <Navbar />
      {/* Hero Image */}
      <div
        id="video-hero-section"
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] relative"
      >
        <Image
          src="/pediatrics.jpg"
          alt="Медика 55 - Контакти и адрес на детски медицински център във Варна"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Main Content */}
      <main>
        <section className="py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Контакти и адрес на Медика 55 | Medica 55
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-4">
            Медика 55 – детски медицински център във Варна. Адрес: бул.
            Владислав Варненчик №142-144, ет. 2. Email: medicа55varna@gmail.com
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
              image: "https://medica55.bg/logo.PNG",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Иван Сусанин 55",
                addressLocality: "София",
                addressCountry: "BG",
              },
              telephone: "0899 83 48 10",
              email: "medicа55varna@gmail.com",
              url: "https://medica55.bg/",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.6666,
                longitude: 23.3333,
              },
              openingHours: "Mo-Fr 08:00-18:00",
            }),
          }}
        />
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Contact Info & Working Hours */}
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 flex items-stretch">
                <ContactInfo />
              </div>
              <div className="flex-1 flex items-stretch">
                <WorkingHours />
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="py-12 px-4">
          <LocationMap />
        </section>
      </main>
    </div>
  );
};

export default ContactsPage;
