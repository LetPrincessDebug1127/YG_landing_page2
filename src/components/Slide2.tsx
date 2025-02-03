"use client";

import { useState, useEffect } from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";


const backgroundImages = [
  "/media/slide2.5.png",
  "/media/slide2.1.jpg",
  "/media/slide2.2.jpg",
  "/media/slide2.3.jpg",
  "/media/slide2.4.jpg",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // Điều khiển hiệu ứng chuyển động
  const { language } = useLanguage();
  const t = translations[language]; 

 // IntersectionObserver setup
  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.fade-in-section') as NodeListOf<HTMLElement>;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeInSections.forEach((section) => observer.observe(section));

    return () => {
      fadeInSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const totalImages = backgroundImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === totalImages) {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true); // Bật lại hiệu ứng sau khi nhảy
        }, 50); // Đợi 50ms để tránh hiệu ứng xảy ra
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval); // Dọn dẹp interval
  }, [currentIndex]);

  return (
 <div className="relative w-full h-screen overflow-hidden snap-start">
    <div
      className={`flex h-full transition-transform ${
        isTransitioning ? "duration-[2000ms]" : ""
      } ease-in-out`}
      style={{
        transform: `translateX(-${(currentIndex * 100) / (totalImages + 1)}%)`,
        width: `${(totalImages + 1) * 100}%`,
      }}
    >
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full h-full"
          style={{ width: `${100 / (totalImages + 1)}%` }}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div
        className="flex-shrink-0 w-full h-full"
        style={{ width: `${100 / (totalImages + 1)}%` }}
      >
        <img
          src={backgroundImages[0]}
          alt="Background duplicate"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="absolute inset-0 bg-black/65 pointer-events-none z-0"></div>


    <div className="absolute left-4 sm:left-32 top-1/2 transform -translate-y-1/2 z-10 text-white">
      <div className="fade-in-section flex flex-col space-y-4 sm:space-y-4">
        <h1 className="text-[42px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold">
          <a
            href="#slide3"
            className="text-white transition-transform transform scale-100"
          >
            {t.ABOUT}
          </a>{" "}
          <a
            href="#slide3"
            className="text-[#ec6629] transition-transform transform scale-110"
          >
            {t.US}
          </a>
        </h1>

        <div className="flex items-center gap-[10px]">
          <img
            src="/media/icon1.png"
            className="inline-block mr-2 max-w-full h-auto"
            width={35}
            height={35}
          />
          <a
            href="#slide4"
            className="text-[26px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] transition-transform transform scale-100 hover:scale-110 hover:text-[#ec6629]"
          >
            {t.SERVICES}
          </a>
        </div>

        <div className="flex items-center gap-[10px]">
          <img
            src="/media/icon2.png"
            className="inline-block mr-2 max-w-full h-auto"
            width={35}
            height={35}
          />
          <a
            href="#slide5"
            className="text-[26px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] transition-transform transform scale-100 hover:scale-110 hover:text-[#ec6629]"
          >
            {t.PROJECTS}
          </a>
        </div>

        <div className="flex items-center gap-[13px]">
          <img
            src="/media/icon3.png"
            className="inline-block mr-2 max-w-full h-auto"
            width={33}
            height={33}
          />
          <a
            href="#slide6"
            className="text-[26px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] transition-transform transform scale-100 hover:scale-110 hover:text-[#ec6629]"
          >
            {t.CLIENTS}
          </a>
        </div>

        <div className="flex items-center gap-[16px]">
          <img
            src="/media/icon4.png"
            className="inline-block mr-2 max-w-full h-auto"
            width={30}
            height={30}
          />
          <a
            href="#slide7"
            className="text-[26px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] transition-transform transform scale-100 hover:scale-110 hover:text-[#ec6629]"
          >
            {t.CONTACT}
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}