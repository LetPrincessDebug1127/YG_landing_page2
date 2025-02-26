"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";

const Navbar = () => {
  const t = useTranslations("Page");
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    router.push("/", { locale: newLocale, scroll: false });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 transition-all duration-300 ease-in-out hidden desktop-ui:block">
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
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="#slide3"
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#slide4"
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("services")}
            </a>
          </li>
          <li>
            <a
              href="#slide5"
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#slide6"
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("clients")}
            </a>
          </li>
          <li>
            <a
              href="#slide7"
              className="text-white text-sm lg:text-sm xl:text-[1rem] 2xl:text-xl 3xl:text-2xl hover:text-[#ec6629]"
            >
              {t("contact")}
            </a>
          </li>
          <li>
            <button
              id="language-toggle"
              onClick={toggleLanguage}
              className="bg-transparent border border-white cursor-pointer text-xs font-thin text-white px-0.5 py-0.5 rounded-[7px] transition-colors duration-300 ease-in-out hover:bg-[#ec6629] hover:text-white flex items-center leading-[0.8rem] lg:leading-[0.8rem] xl:leading-[1.1rem] 2xl:leading-[1.5rem] 3xl:leading-[1.6rem] smallerX-desktop:mt-[0.5em]"
            >
              <span className="text-white px-1 font-regular">
                {locale === "vi" ? "VI" : "EN"}
              </span>
              <span className="text-white px-1 flex items-center justify-center font-regular">
                |
              </span>
              <span className="text-white px-1 font-regular">
                {locale === "vi" ? "EN" : "VI"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
