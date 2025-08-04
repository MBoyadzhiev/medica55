"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Doctor {
  name: string;
  url: string;
  title: string;
  photo: string;
  type: "phone" | "coming-soon" | "tidycal" | "calendly";
  phoneInfo?: string;
}

const doctors: Doctor[] = [
  {
    name: "Проф. д-р Миглена Георгиева",
    url: "https://tidycal.com/medica55varna/prof-georgieva",
    title: "Календар за проф. д-р Миглена Георгиева",
    photo: "/georgieva.jpg",
    type: "phone",
    phoneInfo: "Звъннете на телефон 0885 39 77 60 между 10 и 16 часа в неделя.",
  },
  {
    name: "Д-р Ния Рашева",
    url: "https://tidycal.com/medica55varna/dr-rasheva",
    title: "Календар за д-р Ния Рашева",
    photo: "/rasheva.jpg",
    type: "phone",
    phoneInfo:
      "Звъннете на телефон 0889 57 00 55 между 12 и 16 часа всеки делничен ден.",
  },
  {
    name: "Д-р Мартина Гълъбова",
    url: "https://tidycal.com/medica55varna/dr-galabova",
    title: "Календар за д-р Мартина Гълъбова",
    photo: "/galabova.jpg",
    type: "coming-soon",
  },
  {
    name: "Д-р Мариана Москова",
    url: "https://superdoc.bg/lekar/mariana-moskova",
    title: "Календар за д-р Мариана Москова",
    photo: "/moskova.jpg",
    type: "tidycal",
  },
  {
    name: "Д-р Мартин Бояджиев",
    url: "https://calendly.com/boyadzhiev-martin/30min",
    title: "Календар за д-р Мартин Бояджиев",
    photo: "/boyadzhiev.jpg",
    type: "calendly",
  },
];

interface CalendlyWindow extends Window {
  Calendly?: {
    initPopupWidget: (options: { url: string }) => void;
  };
}

export default function AppointmentsList() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showPhoneInfo, setShowPhoneInfo] = useState<number | null>(null);

  // Load Calendly script
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const handleAppointmentClick = (doctor: Doctor, idx: number) => {
    if (doctor.type === "calendly") {
      // Open Calendly widget for Dr. Boyadzhiev
      if (
        typeof window !== "undefined" &&
        (window as CalendlyWindow).Calendly
      ) {
        (window as CalendlyWindow).Calendly?.initPopupWidget({
          url: doctor.url,
        });
      }
    } else if (doctor.type === "phone") {
      // Show phone information for Prof. Georgieva and Dr. Rasheva
      setShowPhoneInfo(showPhoneInfo === idx ? null : idx);
    } else {
      // Open TidyCal modal for other doctors
      setOpenIdx(idx);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-black dark:text-black">
        Запазете час при нашите специалисти
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, idx) => (
          <div
            key={doctor.name}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl"
          >
            <Image
              src={doctor.photo}
              alt={doctor.name}
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-sky-100 shadow"
            />
            <h2 className="text-xl font-semibold mb-4 text-center text-black dark:text-black">
              {doctor.name}
            </h2>

            {doctor.type === "coming-soon" ? (
              <div className="text-center">
                <p className="text-gray-600 font-medium px-4 py-2 bg-gray-100 rounded-lg">
                  Очаквайте информация скоро
                </p>
              </div>
            ) : (
              <>
                <button
                  className="px-6 py-2 bg-sky-700 text-white rounded-lg font-semibold shadow hover:bg-sky-800 transition"
                  onClick={() => handleAppointmentClick(doctor, idx)}
                >
                  Запази час
                </button>

                {/* Phone information display */}
                {showPhoneInfo === idx && doctor.type === "phone" && (
                  <div className="mt-4 p-4 bg-sky-50 rounded-lg border border-sky-200 w-full">
                    <p className="text-sm text-sky-800 font-medium text-center">
                      {doctor.phoneInfo || ""}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Modal for TidyCal calendar (only for non-Calendly doctors) */}
            {openIdx === idx && doctor.type === "tidycal" && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
                <div className="bg-white rounded-xl shadow-2xl p-4 max-w-2xl w-full max-h-[90vh] overflow-auto relative">
                  <button
                    className="sticky top-2 right-2 float-right text-2xl text-gray-500 hover:text-black z-10 bg-white rounded-full px-2"
                    onClick={() => setOpenIdx(null)}
                    aria-label="Затвори"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg font-bold mb-2 text-center text-black dark:text-black">
                    {doctor.name}
                  </h3>
                  <iframe
                    src={doctor.url}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ minWidth: "320px", borderRadius: "0.5rem" }}
                    title={doctor.title}
                    allow="camera; microphone; fullscreen;"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
