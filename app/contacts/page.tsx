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
          alt="Water Polo Action"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
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
    </div>
  );
};

export default ContactsPage;
