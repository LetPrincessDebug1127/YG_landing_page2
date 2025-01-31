"use client"
import React, { useEffect, useRef } from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";

const VideoBackgroundSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const imageContainerRef = useRef<HTMLDivElement>(null); // Tham chiếu tới container
  const imageRef = useRef<HTMLImageElement>(null); // Tham chiếu tới hình ảnh
  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;

    if (!imageContainer || !image) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = imageContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((centerY - y) / centerY) * 15; // Góc nghiêng tối đa là ±15 độ
      const rotateY = ((x - centerX) / centerX) * 15;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "rotateX(0) rotateY(0)";
    };

    imageContainer.addEventListener("mousemove", handleMouseMove);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/media/black-silk.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="fade-in-section">
      <div className="relative z-10 w-full h-full flex mt-[2em]">
        {/* Phần bên trái - Hình ảnh */}
        <div
          ref={imageContainerRef} // Gắn ref vào container
          className="container w-[50%] h-full flex items-center justify-center mt-4"
        >
          <img
            ref={imageRef}
            src="/media/banner-turning.jpg"
            alt="Banner"
            className="w-full sm:w-[90%] md:w-[60%] lg-custom:w-[84%] xl-custom:w-[63%] 2xl-custom1:w-[65%] 2xl-custom2:w-[50%] 3xl:w-[55%] max-w-[90%] h-auto rounded-lg shadow-custom-orange"
          />
        </div>

        {/* Phần bên phải - Văn bản */}
        <div className="flex flex-col justify-center items-start text-white w-fit h-auto p-3 mr-[1em]">
          <h1 className="text-[#ec6629] text-[24px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[60px] 2xl:text-[70px] font-bold mb-4 whitespace-nowrap">
            Young Generation Agency
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:w-[30em] xl:w-[38.5em] 2xl:w-[31.5em] text-justify mb-3">
            {t.text}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:w-[30em] xl:w-[38.5em] 2xl:w-[31.5em] text-justify">
            {t.textP}
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default VideoBackgroundSection;
