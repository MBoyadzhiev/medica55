"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Button from "@/components/ui/Button";
import Link from "next/link";

export function JoinUs() {
  const imageUrl = "/pediatrics.jpg";
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Запазете час при нас
          </h2>
          <div className="w-24 h-1 bg-sky-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получете специализирана грижа за вашето дете от водещи детски
            специалисти
          </p>
        </div>

        {/* Main Content */}
        <div className="h-[50rem] w-full relative flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <DirectionAwareHover
              imageUrl={imageUrl}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl px-6 py-8 md:px-12 md:py-12 flex flex-col items-center max-w-lg mx-auto border border-white/20">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    Запишете час при нашите висококвалифицирани детски
                    специалисти и получите най-добрата грижа за вашето дете
                  </h3>
                </div>

                {/* Desktop only bullet points */}
                <div className="hidden md:block space-y-6 mb-8 w-full">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Висококвалифицирани детски специалисти с дългогодишен опит
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Специализирана диагностика и лечение на детски заболявания
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Модерно медицинско оборудване и съвременни методи
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Индивидуален подход и внимателна грижа за всяко дете
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link href="/appointments" className="contents w-full">
                    <Button className="w-full">Запазете час онлайн</Button>
                  </Link>
                  <Link href="/contacts" className="contents w-full">
                    <Button className="w-full">Контакти</Button>
                  </Link>
                </div>

                <p className="text-sm text-gray-500 text-center mt-4 md:mt-6">
                  Свържете се с нас за повече информация и запишете час за
                  преглед
                </p>
              </div>
            </DirectionAwareHover>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
