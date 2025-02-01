"use client"
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language]; 

  // Dynamic logos array (1 to 18 logos)
  const logos = Array.from({ length: 18 }, (_, i) => ({
    src: `/media/logo/logo${i + 1}.png`,
    alt: `${t.clientLogoAlt} ${i + 1}`, // Using translation for alt text
  }));

  return (
    <div className="relative w-full h-screen overflow-hidden fade-in-section z-10 top-[13%]">
      <div className="text-center">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold text-[#ec6629]">{t.clientTitle}</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center text-gray-200 ">
          {t.clientDescription}
          <br />
          <strong>{t.clientIndustries}</strong>
        </p>
        <div className="logo-grid fade-in-section grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                loading="lazy"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
