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
    <section className="relative w-full h-screen flex items-center justify-center flex-col">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/media/black-silk.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
       <div className="contact fade-in-section flex flex-col md:flex-row gap-16 p-4 z-10 mt-[2%]">
      {/* Phần bên trái: Thông tin liên hệ */}
      <div className="inf fade-in-section space-y-6">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-black text-[#ec6629] mb-4 whitespace-nowrap font-sans">{t.contact}</h1>

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
            {t.addressTitle}
            <br />
            <strong className="text-white">{t.address}</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>

        <div className="social-icons space-y-2 flex items-center gap-[10%]">
          <strong className = "flex-shrink-0 w-[10em]">{t.FollowUs}</strong>
          <div className="flex gap-[7%] justify-center items-center">
            <Link
              href="https://www.facebook.com/ygcompany.vn"
              target="_blank"
              aria-label="Facebook"
            >
              <img
                src="/media/Facebook_Logo.png"
                alt="Facebook"
                width="55"
                height="55"
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
                width="55"
                height="55"
              />
            </Link>
            <Link
              href="https://www.whatsapp.com/"
              target="_blank"
            >
              <img
                src="/media/whatsapp2.png"
                alt="Whatsapp"
                width="80"
                height="80"
              />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
            >
              <img
                src="/media/Youtube_Logo.png"
                alt="Youtube"
                width="70"
                height="70"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Phần bên phải: Form liên hệ */}
      <div className="contact-form flex-1 bg-[rgba(34,34,34,0.4)] text-white p-5 rounded-[15px] shadow-[0_8px_12px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out w-[20em] mx-auto">
        <h2 className="text-[1.5rem] font-semibold mb-4 ml-[5%] text-[#ec6629]">{t.informationToContact}</h2>
        <form action="/submit-contact" method="POST" className="space-y-4 flex flex-col items-center">
          <div className="contain-input w-full">
            <label htmlFor="name" className="block font-medium ml-[5%]">{t.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t.placeHolderName}
              required
              className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
            />
          </div>

          <div className="contain-input w-full">
            <label htmlFor="phone" className="block font-medium ml-[5%]">{t.numberPhone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t.placeHolderPhone}
              pattern="[0-9]{10,11}"
              required
              className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
            />
          </div>

          <div className="contain-input w-full">
            <label htmlFor="email" className="block font-medium ml-[5%]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.placeHolderEmail}
              required
              className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
            />
          </div>

          <div className="contain-input w-full">
            <label htmlFor="message" className="block font-medium ml-[5%]">{t.message}</label>
            <input
              id="message"
              name="message"
              placeholder={t.placeHolderMessage}
              required
              className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
            />
          </div>

          <button
            className="w-[90%] bg-gradient-to-r from-[#ff7a00] to-[#ff4d00] text-white border-none rounded-[5px] px-4 py-2 mt-6 text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:from-[#ff4d00] hover:to-[#ff7a00] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg"
            type="submit"
          >
            {t.send}
          </button>
        </form>
      </div>
      </div>
      <p className = "text-gray-500 z-10">© 2024 YG. All rights reserved.</p>

    
    </section>
    
  );
};

export default ContactSection;
