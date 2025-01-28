"use client"
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";


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
       <div className="contact fade-in-section flex flex-col md:flex-row gap-8 p-8 z-10">
      {/* Phần bên trái: Thông tin liên hệ */}
      <div className="inf flex-1 fade-in-section space-y-6">
        <h1 className="text-2xl font-bold">Liên hệ</h1>

        <div className="item-contact flex items-center space-x-4">
          <i className="fa-solid fa-phone text-xl"></i>
          <span>
            Hotline
            <br />
            <strong>(+84) 377 711 139</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>

        <div className="item-contact flex items-center space-x-4">
          <i className="fas fa-envelope text-xl" aria-hidden="true"></i>
          <span>
            Email
            <br />
            <strong>YGAGENCY@gmail.com</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>
        <div className="item-contact flex items-center space-x-4">
          <i className="fas fa-map-marker-alt text-xl" aria-hidden="true"></i>
          <span>
            Địa chỉ
            <br />
            <strong>288/10 Nguyễn Văn Đậu, Bình Thạnh, TP. Hồ Chí Minh</strong>
          </span>
        </div>
        <div className="border-b border-[#ec6629] h-0"></div>

        <div className="social-icons space-y-2">
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
      <div className="contact-form flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
        <form action="/submit-contact" method="POST" className="space-y-4">
          <div className="contain-input">
            <label htmlFor="name" className="block font-medium">Tên</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nhập tên của bạn"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="contain-input">
            <label htmlFor="phone" className="block font-medium">Điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại"
              pattern="[0-9]{10,11}"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="contain-input">
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập địa chỉ email"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="contain-input">
            <label htmlFor="message" className="block font-medium">Lời nhắn</label>
            <textarea
              id="message"
              name="message"
              placeholder="Nhập lời nhắn của bạn"
              required
              className="w-full p-2 border rounded-md"
            //   rows="4"
            ></textarea>
          </div>

          <button
            className="form-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
