import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Page");
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    router.push("/", { locale: newLocale, scroll: false });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 text-white shadow-lg transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 desktop-ui:hidden">
      <div className="flex items-center justify-between w-full px-4">
        <Image
          className="w-[80px] hidden mobile-ui:block"
          src="/media/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          style={{ objectFit: "contain" }}
        />

        <div className="flex items-center space-x-6">
          <button
            id="language-toggle"
            onClick={toggleLanguage}
            className="bg-transparent border border-white cursor-pointer text-xs font-thin text-white px-2 py-1 rounded-[7px] transition-colors duration-300 ease-in-out hover:bg-[#ec6629] hover:text-white flex items-center"
          >
            <span className="text-white font-regular">
              {locale === "vi" ? "VI" : "EN"}
            </span>
            <span className="text-white px-1 flex items-center justify-center font-regular">
              |
            </span>
            <span className="text-white font-regular">
              {locale === "vi" ? "EN" : "VI"}
            </span>
          </button>

          <div className="hidden desktop-ui:flex space-x-6">
            <Link href="#slide2" className="hover:text-[#ec6629]">
              {t("home")}
            </Link>
            <Link href="#slide3" className="hover:text-[#ec6629]">
              {t("about")}
            </Link>
            <Link href="#slide4" className="hover:text-[#ec6629]">
              {t("services")}
            </Link>
            <Link href="#slide5" className="hover:text-[#ec6629]">
              {t("projects")}
            </Link>
            <Link href="#slide6" className="hover:text-[#ec6629]">
              {t("clients")}
            </Link>
            <Link href="#slide7" className="hover:text-[#ec6629]">
              {t("contact")}
            </Link>
          </div>

          <button
            className="desktop-ui:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="desktop-ui:hidden flex flex-col absolute top-[60px] right-[20px] bg-[#333] w-[200px] rounded-lg overflow-hidden p-4 items-center space-y-2">
          <Link href="#slide2" className="hover:text-[#ec6629]">
            {t("home")}
          </Link>
          <Link href="#slide3" className="hover:text-[#ec6629]">
            {t("about")}
          </Link>
          <Link href="#slide4" className="hover:text-[#ec6629]">
            {t("services")}
          </Link>
          <Link href="#slide5" className="hover:text-[#ec6629]">
            {t("projects")}
          </Link>
          <Link href="#slide6" className="hover:text-[#ec6629]">
            {t("clients")}
          </Link>
          <Link href="#slide7" className="hover:text-[#ec6629]">
            {t("contact")}
          </Link>
        </div>
      )}
    </nav>
  );
}
