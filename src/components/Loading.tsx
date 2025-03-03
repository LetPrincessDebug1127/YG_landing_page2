"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations("Page");

  useEffect(() => {
    const imagesToLoad = [
      "/media/banner-mobile.svg",
      "/media/logo-fix-5.mp4",
    ];

    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.oncanplaythrough = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) setIsLoaded(true);
        };
      } else {
        const img = document.createElement("img"); 
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) setIsLoaded(true);
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
