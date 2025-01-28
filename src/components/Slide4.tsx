"use client";

import { useState, useEffect } from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";


const backgroundImages = [
  "/media/slide4.1.jpg",
  "/media/slide4.2.jpg",
  "/media/slide4.3.jpg",
  "/media/slide4.4.jpg",
  "/media/slide4.5.jpg",
  "/media/slide4.6.jpg",
  "/media/slide4.7.jpg",
  "/media/slide4.8.jpg",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { language } = useLanguage();
  const t = translations[language]; 


  const totalImages = backgroundImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === totalImages) {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true); 
        }, 50);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
 <div className="relative w-full h-screen overflow-hidden">
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


   
  </div>
  );
}
