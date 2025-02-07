"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Slide2 from "../components/Slide2";
import { LanguageProvider } from "../context/LanguageContext";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide7 from "../components/Slide7";
import Slide6 from "../components/Slide6";
import MobileNav from "../components/MobileNavBar";
export default function LandingPage() {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = "auto";

      const slide2 = document.getElementById("slide2");
      if (slide2) {
        slide2.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div
        id="container"
        className={`w-full h-full flex flex-col ${
          scrollEnabled ? "overflow-y-auto" : "overflow-hidden"
        } snap-y snap-mandatory`}
      >
        <Navbar />
        <MobileNav />

        <section
          id="slide1"
          className="w-full bg-black flex justify-center items-center"
          style={{ height: imageHeight ? `${imageHeight}px` : "100vh" }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover hidden sm:block"
            >
              <source src="/media/logo-fix-5.mp4" type="video/mp4" />
            </video>

            <Image
              src="/media/banner-mobile.svg"
              alt="Background"
              layout="intrinsic"
              width={1000} 
              height={600}
              className="absolute top-0 left-0 w-full object-cover hidden image-banner:block"
              priority
              onLoad={(e) => setImageHeight(e.currentTarget.height)}
            />
          </div>
        </section>

        <section
          id="slide2"
          className="w-full bg-black flex justify-center items-center"
        >
          <Slide2 />
        </section>

        <section
          id="slide3"
          className="w-full h-[100vh] bg-white flex justify-center items-center"
        >
          <Slide3 />
        </section>

        <section
          id="slide4"
          className="w-full h-[100vh] iphone-12 iphone-se bg-blue-500 text-white flex justify-center items-center"
        >
          <Slide4 />
        </section>

        <section
          id="slide5"
          className="w-full h-[100vh] bg-purple-600 text-white flex justify-center items-center"
        ></section>

        <section
          id="slide6"
          className="w-full h-[100vh] bg-gray-900 text-white flex justify-center items-center"
        >
          <Slide6 />
        </section>

        <section
          id="slide7"
          className="w-full h-[100vh] bg-gray-900 text-white flex justify-center items-center"
        >
          <Slide7 />
        </section>

      </div>
    </LanguageProvider>
  );
}
