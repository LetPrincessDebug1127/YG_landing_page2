"use client";
import Image from "next/image";
import translations from "../../public/translation/translations";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsNavbarVisible(true); 
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80 transition-all duration-300 ease-in-out hidden desktop-ui:block ${
        isNavbarVisible ? 'opacity-100' : 'opacity-0' 
      }`}>
      <div className="flex justify-between items-center w-full">
        <Image
          className="imgNav w-full sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[5rem] 2xl:w-[6rem] 3xl:w-[8rem] ml-[3%]"
          src="/media/logo.svg"
          alt="Logo"
          width={20}
          height={20}
          style={{ objectFit: "contain" }}
        />

        <ul className="flex space-x-4 mr-[3%]">
          <li>
            <a
              href="#slide2"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.home}
            </a>
          </li>
          <li>
            <a
              href="#slide3"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              href="#slide4"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.services}
            </a>
          </li>
          <li>
            <a
              href="#slide5"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              href="#slide6"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.clients}
            </a>
          </li>
          <li>
            <a
              href="#slide7"
              className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]"
            >
              {t.contact}
            </a>
          </li>
          <li>
            <button
              id="language-toggle"
              onClick={toggleLanguage}
              className="bg-transparent border border-white cursor-pointer text-xs font-thin text-white px-0.5 py-0.5 rounded-[7px] transition-colors duration-300 ease-in-out hover:bg-[#ec6629] hover:text-white flex items-center leading-[0.8rem] lg:leading-[0.8rem] xl:leading-[1.1rem] 2xl:leading-[1.5rem] 3xl:leading-[1.6rem]"
            >
              <span className="text-white px-1 font-regular">
                {language === "vi" ? "VI" : "EN"}
              </span>
              <span className="text-white px-1 flex items-center justify-center font-regular">
                |
              </span>
              <span className="text-white px-1 font-regular">
                {language === "vi" ? "EN" : "VI"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
