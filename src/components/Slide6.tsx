"use client";
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Dynamic logos array (1 to 12 logos)
  const logos = Array.from({ length: 12 }, (_, i) => ({
    src: `/media/logo/logo${i + 1}.png`,
    alt: `${t.clientLogoAlt} ${i + 1}`, // Using translation for alt text
  }));

  // Split logos into two equal parts (6 logos in each row)
  const firstRowLogos = logos.slice(0, 6);
  const secondRowLogos = logos.slice(6, 12);

  return (
    <div className="relative w-full h-screen overflow-hidden fade-in-section z-10">
      <img
        src="/media/introduction-banner.svg"
        alt="Background duplicate"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="text-center fade-in-section visible lg:mt-[4%]">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold text-[#ec6629]">
          {t.clientTitle}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center text-gray-200">
          {t.clientDescription}
          <br />
          <strong>{t.clientIndustries}</strong>
        </p>

        {/* First row of logos */}
        <div className="logo-grid fade-in-section gap-6 mt-8">
          {firstRowLogos.map((logo, index) => (
            <div key={index} className="logo-item flex justify-center animate-left-to-right">
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

        {/* Second row of logos */}
        <div className="logo-grid fade-in-section gap-6 mt-8">
          {secondRowLogos.map((logo, index) => (
            <div key={index} className="logo-item flex justify-center animate-left-to-right">
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
