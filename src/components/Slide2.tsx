"use client";

import { useState, useEffect } from "react";

const backgroundImages = [
  "/media/slide2.1.jpg",
  "/media/slide2.2.jpg",
  "/media/slide2.3.jpg",
  "/media/slide2.4.jpg",
  "/media/slide2.5.png",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex w-[100%] h-full transition-transform duration-[2000ms] ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-screen h-screen object-cover"
            />
          </div>
        ))}
      </div>

      {/* Nội dung phía trên */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Chào mừng bạn!</h1>
        <p className="text-lg">Ảnh nền sẽ đổi tự động mỗi 5 giây bằng hiệu ứng lướt chậm.</p>
      </div>
    </div>
  );
}
