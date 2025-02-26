"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactSection: React.FC = () => {
  const t = useTranslations("Page");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn hành vi submit mặc định

    // Lấy dữ liệu từ form
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // Thay entry.XXXXXX bằng Entry ID của Google Form
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdMjEkzxxD7WfWQ348oP9yUImgTV9PF8MqurFKV-SEer1zGyA/formResponse";

    const formEntries = new URLSearchParams({
      "entry.391856216": data.name as string,
      "entry.86789803": data.phone as string,
      "entry.1983827446": data.email as string,
      "entry.1805973767": data.message as string,
    });

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors", // Bắt buộc do Google Forms không hỗ trợ CORS
        body: formEntries,
      });

      // Hiển thị thông báo thành công (do mode: "no-cors", không thể kiểm tra response)
      alert(t("sendSuccess"));
      formElement.reset();
    } catch (error) {
      console.error("Lỗi khi gửi form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center mobile-ui:block justify-center flex-col">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover iPhoneSE:h-[85%] S8Galaxy:h-[76%]"
        src="/media/black-silk.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="contact fade-in-section flex flex-col md:flex-row gap-16 desktop-ui:gap-[9rem] p-4 z-10 mt-[2%]">
        {/* Phần bên trái: Thông tin liên hệ */}
        <div className="fade-in-section space-y-6 mobile-ui:hidden">
          <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-black text-[#ec6629] mb-4 whitespace-nowrap font-sans">
            {t("contact")}
          </h1>

          <div className="item-contact flex items-center space-x-4">
            <Image src="/media/phone.svg" alt="My SVG" width={20} height={20} />
            <span className="text-[#ec6629]">
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
            <Image
              src="/media/location.svg"
              alt="My SVG"
              width={20}
              height={20}
            />
            <span className="text-[#ec6629]">
              {t("addressTitle")}
              <br />
              <strong className="text-white">{t("address")}</strong>
            </span>
          </div>
          <div className="border-b border-[#ec6629] h-0"></div>

          <div className="social-icons space-y-2 flex items-center gap-[14%]">
            <strong className="flex-shrink-0 w-[10em]">{t("FollowUs")}</strong>
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
              <Link href="https://zalo.me" target="_blank" aria-label="Zalo">
                <img
                  src="/media/zalo_icon.png"
                  alt="Zalo"
                  width="55"
                  height="55"
                />
              </Link>
              <Link href="https://www.whatsapp.com/" target="_blank">
                <img
                  src="/media/whatsapp1.png"
                  alt="Whatsapp"
                  width="55"
                  height="55"
                />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <img
                  src="/media/YoutubeLogo.png"
                  alt="Youtube"
                  width="70"
                  height="70"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Phần bên phải: Form liên hệ */}
        <div className="flex-1 bg-[rgba(34,34,34,0.4)] text-white p-5 rounded-[15px] shadow-[0_8px_12px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out w-[20em] mx-auto custom-size:max-w-[50%] mobile-ui:mt-[15%]">
          <h2 className="text-[1.5rem] font-semibold mb-4 ml-[5%] text-[#ec6629]">
            {t("informationToContact")}
          </h2>
          <form
            onSubmit={handleSubmit}
            id=""
            className="space-y-4 flex flex-col items-center"
          >
            <div className="contain-input w-full">
              <label htmlFor="name" className="block font-medium ml-[5%]">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("placeHolderName")}
                required
                className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
              />
            </div>

            <div className="contain-input w-full">
              <label htmlFor="phone" className="block font-medium ml-[5%]">
                {t("numberPhone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("placeHolderPhone")}
                pattern="[0-9]{10,11}"
                required
                className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
              />
            </div>

            <div className="contain-input w-full">
              <label htmlFor="email" className="block font-medium ml-[5%]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("placeHolderEmail")}
                required
                className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] outline-none rounded-[5px] no-underline block mx-auto"
              />
            </div>

            <div className="contain-input w-full">
              <label htmlFor="message" className="block font-medium ml-[5%]">
                {t("message")}
              </label>
              <input
                id="message"
                name="message"
                placeholder={t("placeHolderMessage")}
                required
                className="w-[90%] h-[2.5em] p-2 text-black border border-[#ff8500] mb-[20px] outline-none rounded-[5px] no-underline block mx-auto"
              />
            </div>

            <button
              className="w-[90%] bg-gradient-to-r from-[#ff7a00] to-[#ff4d00] text-white border-none rounded-[5px] px-4 py-2 text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:from-[#ff4d00] hover:to-[#ff7a00] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg"
              type="submit"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
      <p className="text-gray-500 z-10 mobile-ui:hidden xl:bottom-0 xl:absolute xl:p-[10px]">
        © 2024 YG. All rights reserved.
      </p>
      <footer className="bg-[#333333] text-white pt-[0.5rem] pb-[0.5rem] hidden mobile-ui:flex min-h-1000:flex min-h-1000:pb-[14.5em] w-full absolute flex-col footerIpad:absolute bottom-0 iPhoneSE:static S8Galaxy:static">
        <div className="w-full px-4 hidden mobile-ui:block">
          {/* Contact Section */}
          <div className="mb-6">
            <div className="flex flex-row items-center gap-[10%]">
              <h3 className="text-lg font-bold">{t("contact")}</h3>
              <div className="flex flex-row items-center space-x-6">
                <Link
                  href="https://www.facebook.com/ygcompany.vn"
                  target="_blank"
                  passHref
                  className="pb-[3%]"
                >
                  <div className="flex items-center gap-2 text-sm hover:text-gray-300 cursor-pointer">
                    <Image
                      src="/media/Facebook_Logo.png"
                      alt="Facebook"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </Link>

                <Link
                  href="https://zalo.me"
                  target="_blank"
                  passHref
                  className="pb-[3%]"
                >
                  <div className="flex items-center gap-2 text-sm hover:text-gray-300 cursor-pointer">
                    <Image
                      src="/media/zalo_icon.png"
                      alt="Zalo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.whatsapp.com"
                  target="_blank"
                  passHref
                  className="pb-[3%]"
                >
                  <div className="flex items-center gap-2 text-sm hover:text-gray-300 cursor-pointer">
                    <Image
                      src="/media/whatsapp2.png"
                      alt="Whatsapp"
                      width={42}
                      height={42}
                      className="w-11 h-11"
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  passHref
                  className="pb-[3%]"
                >
                  <div className="flex items-center gap-2 text-sm hover:text-gray-300 cursor-pointer">
                    <Image
                      src="/media/YoutubeLogo.png"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="w-9 h-8"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-t border-[#ec6629] mb-4"></div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-full">
                <Image
                  src="/media/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <a
                  href="tel:+84377711139"
                  className="text-sm text-white hover:text-gray-300 rounded-full"
                >
                  Hotline: (+84) 377 711 139
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/media/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
                <span className="text-sm">Email: YGAGENCY@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/media/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <span className="text-sm">
                  {t("addressTitle")}: {t("address")}
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#ec6629] pt-4 flex flex-col items-center">
            <p className="text-sm text-gray-400">
              © 2024 YG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
