"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations("Page");

  useEffect(() => {
    const isMobile = window.innerWidth <= 1199; 
    const isDesktop = window.innerWidth > 1199;

    let loadedCount = 0;
    let itemsToLoad: string[] = [];

    if (isMobile) {
      itemsToLoad = ["/media/banner-mobile.svg"]; 
    } else if (isDesktop) {
      itemsToLoad = ["/media/logo-fix-5.mp4"]; 
    }

    if (itemsToLoad.length === 0) {
      setIsLoaded(true);
      return;
    }

    itemsToLoad.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.oncanplaythrough = () => {
          loadedCount++;
          if (loadedCount === itemsToLoad.length) setIsLoaded(true);
        };
      } else {
        const img = document.createElement("img");
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === itemsToLoad.length) setIsLoaded(true);
        };
      }
    });
  }, []);

  return isLoaded ? (
    <>{children}</>
  ) : (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>{t("loading")}</p>
    </div>
  );
};

export default LoadingScreen;
