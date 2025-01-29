"use client"
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import Image from 'next/image';


const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
 
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
       <div className="contact fade-in-section flex flex-col md:flex-row gap-16 p-8 z-10">
      {/* Phần bên trái: Thông tin liên hệ */}
      <div className="inf fade-in-section space-y-6">
        <h1 className="text-[#ec6629] text-[24px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[60px] 2xl:text-[70px] font-black mb-4 whitespace-nowrap font-sans">Liên hệ</h1>

        <div className="item-contact flex items-center space-x-4">
          <Image src="/media/phone.svg" alt="My SVG" width={20} height={20} />
          <span className = "text-[#ec6629]">
            Hotline
            <br />
            <strong className="text-white">(+84) 377 711 139</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>

        <div className="item-contact flex items-center space-x-4">
          <Image src="/media/email.svg" alt="My SVG" width={20} height={20} />
          <span className="text-[#ec6629]">
            Email
            <br />
            <strong className="text-white">YGAGENCY@gmail.com</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>
        <div className="item-contact flex items-center space-x-4">
          <Image src="/media/location.svg" alt="My SVG" width={20} height={20} />
          <span className ="text-[#ec6629]">
            Địa chỉ
            <br />
            <strong className="text-white">288/10 Nguyễn Văn Đậu, Bình Thạnh, TP. Hồ Chí Minh</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>

        <div className="social-icons space-y-2 flex">
          <strong>Theo dõi chúng tôi</strong>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/ygcompany.vn"
              target="_blank"
              aria-label="Zalo"
            >
              <img
                src="/media/Facebook_Logo.png"
                alt="Zalo"
                width="40"
                height="40"
              />
            </Link>
            <Link
              href="https://zalo.me"
              target="_blank"
              aria-label="Zalo"
            >
              <img
                src="/media/zalo_icon.png"
                alt="Zalo"
                width="40"
                height="40"
              />
            </Link>
            <Link
              href="https://www.whatsapp.com/"
              target="_blank"
            >
              <img
                src="/media/whatsapp2.png"
                alt="Zalo"
                width="40"
                height="40"
              />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
            >
              <img
                src="/media/Youtube_Logo.png"
                alt="Youtube"
                width="40"
                height="40"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Phần bên phải: Form liên hệ */}
<div className="contact-form flex-1 bg-[rgba(34,34,34,0.4)] text-white p-5 rounded-[15px] shadow-[0_8px_12px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out w-[20em] mx-auto">
  <h2 className="text-xl font-semibold mb-4 text-center">Thông tin liên hệ</h2>
  <form action="/submit-contact" method="POST" className="space-y-4 flex flex-col items-center">
    <div className="contain-input w-full">
      <label htmlFor="name" className="block font-medium text-center">Tên</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nhập tên của bạn"
        required
        className="w-[90%] p-2 border rounded-[5px] block mx-auto"
      />
    </div>

    <div className="contain-input w-full">
      <label htmlFor="phone" className="block font-medium text-center">Điện thoại</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Nhập số điện thoại"
        pattern="[0-9]{10,11}"
        required
        className="w-[90%] p-2 border rounded-[5px] block mx-auto"
      />
    </div>

    <div className="contain-input w-full">
      <label htmlFor="email" className="block font-medium text-center">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Nhập địa chỉ email"
        required
        className="w-[90%] p-2 border rounded-[5px] block mx-auto"
      />
    </div>

    <div className="contain-input w-full">
      <label htmlFor="message" className="block font-medium text-center">Lời nhắn</label>
      <input
        id="message"
        name="message"
        placeholder="Nhập lời nhắn của bạn"
        required
        className="w-[90%] p-2 border rounded-[5px] block mx-auto"
      />
    </div>

    <button
      className="w-[90%] bg-gradient-to-r from-[#ff7a00] to-[#ff4d00] text-white border-none rounded-[5px] px-4 py-2 mt-6 text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:from-[#ff4d00] hover:to-[#ff7a00] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg"
      type="submit"
    >
      Gửi
    </button>
  </form>
</div>

    </div>
    </section>
  );
};

export default ContactSection;
