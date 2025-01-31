"use client";

import { useState, useEffect } from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Image from 'next/image';


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

    {/* Overlay che nền để dễ đọc chữ */}
    <div className="absolute inset-0 bg-black/65 pointer-events-none z-0"></div>

    {/* Nội dung hiển thị */}
    <div className="absolute fade-in-section w-[100%] top-0 left-1/2 transform -translate-x-1/2 text-center text-white z-10 mt-[7%]">
      <p className="text-base sm:text-lg md:text-xl">
        YG cung cấp dịch vụ và tối ưu những yêu cầu của khách hàng dựa trên mô hình 4C trong marketing:
      </p>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#ec6629]">
        CUSTOMER SOLUTION - CUSTOMER COST - CONVENIENCE - COMMUNICATION
      </h3>
      <p className="text-base sm:text-lg md:text-xl">
        Giải pháp cho khách hàng - Chi phí khách hàng bỏ ra - Sự tiện lợi - Truyền thông
      </p>
    </div>
      <div className="absolute fade-in-section w-[100%] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          {
            icon: "/media/iconBox1.svg",
            title: "DECORATION",
            description: "Thi công trang trí",
          },
          {
            icon: "/media/iconBox2.svg",
            title: "EVENT MANAGEMENT",
            description: "Tổ chức sự kiện",
          },
          {
            icon: "/media/iconBox3.svg",
            title: "COMMERCIAL ACTIVITIES",
            description: "Hoạt động kích hoạt thương mại",
          },
          {
            icon: "/media/iconBox4.svg",
            title: "DESIGN",
            description: "Tư vấn thiết kế",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[rgba(34,34,34,0.4)] backdrop-blur-md p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <h3 className="text-lg font-bold mt-3">{item.title}</h3>
            <p className="text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute fade-in-section w-[100%] top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
      <p className="text-base sm:text-lg md:text-xl">
        Chúng tôi cam kết mang đến những giải pháp hiệu quả,
      </p>
      <p className="text-base sm:text-lg md:text-xl">
        sáng tạo khác biệt dựa trên tinh thần hợp tác, trách nhiệm và giá trị cảm xúc.
      </p>
    </div>
  </div>
);

}
