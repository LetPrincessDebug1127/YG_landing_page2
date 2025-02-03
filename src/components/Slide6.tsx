"use client";
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Dynamic logos array (1 to 12 logos)
  const logos = Array.from({ length: 8 }, (_, i) => ({
    src: `/media/logo/logo${i + 1}.png`,
    alt: `${t.clientLogoAlt} ${i + 1}`, 
  }));

  const firstRowLogos = [...logos, ...logos];
  const secondRowLogos = [...logos, ...logos];

  return (
    <div className="relative w-full h-screen overflow-hidden fade-in-section z-10">
      <img
        src="/media/introduction-banner.svg"
        alt="Background duplicate"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="fade-in-section text-center fade-in-section visible lg:mt-[4%]">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold text-[#ec6629]">
          {t.clientTitle}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center text-gray-200 mb-[3%]">
          {t.clientDescription}
          <br />
          <strong>{t.clientIndustries}</strong>
        </p>

        {/* First row (Left to Right) */}
        <div className="logo-container fade-in-section mt-8 mb-[9%]">
          <div className="logo-track animate-left-to-right">
            {firstRowLogos.map((logo, index) => (
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

        {/* Second row (Right to Left) */}
        <div className="logo-container fade-in-section mt-8">
          <div className="logo-track animate-right-to-left">
            {secondRowLogos.map((logo, index) => (
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
    </div>
  );
};

export default ClientSection;
