"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../public/translation/translations";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const MIN_SLIDES_TO_SHOW = 6;
let triggerVideoAutoPlayFirstTime = false;

const videos = ["video1", "video2", "video3"];

export default function Slide5() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <>
      <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold text-[#ec6629]">
        {t.projects}
      </h1>
      <SlideShow onVideoIndexChange={setCurrentVideoIndex} />
      <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Slide {currentVideoIndex + 1}
      </div>
    </>
  );
}

function SlideShow({
  onVideoIndexChange,
}: {
  onVideoIndexChange?: (videoIndex: number) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = Math.max(MIN_SLIDES_TO_SHOW, videos.length);
  const [screenWidth, setScreenWidth] = useState(
    () => document.body.clientWidth
  );

  useEffect(() => {
    const abortController = new AbortController();
    document.querySelector<HTMLDivElement>(".slick-list")!.style.overflow =
      "visible";

    window.addEventListener(
      "resize",
      () => {
        console.log("resize");
        setScreenWidth(document.body.clientWidth);
        document
          .querySelectorAll<HTMLDivElement>("[data-offset-index-from-center]")
          .forEach((elem) => {
            elem.style.setProperty(
              "--init-scale",
              screenWidth < 640 ? "1" : "2"
            );
          });
      },
      { signal: abortController.signal }
    );

    return () => {
      abortController.abort();
    };
  }, [screenWidth]);

  useEffect(() => {
    document
      .querySelectorAll<HTMLDivElement>("[data-offset-index-from-center]")
      .forEach((elem) => {
        elem.style.setProperty("--init-scale", screenWidth < 640 ? "1" : "2");
        elem.style.setProperty("--offset", elem.dataset.offsetIndexFromCenter!);
      });

    // use IntersectionObserver to increase the volume of videos gradually
    // as they come into view

    let intervalId: unknown;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target as HTMLVideoElement;
          if (intervalId) {
            clearInterval(intervalId as number);
          }

          if (entry.isIntersecting) {
            videoElement.play();
            if (!triggerVideoAutoPlayFirstTime) {
              triggerVideoAutoPlayFirstTime = true;
              return;
            }
            intervalId = setInterval(() => {
              videoElement.volume = Math.min(1, videoElement.volume + 0.1);
            }, 500);
          } else {
            videoElement.pause();
            videoElement.volume = 0;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document
      .querySelectorAll(".slick-slide > div > div > video")
      .forEach((elem) => elem.remove());

    const videoIndex = currentSlide % videos.length;
    onVideoIndexChange?.(videoIndex);

    const videoElement = document.createElement("video");
    videoElement.src = `/media/${videos[videoIndex]}/video.mp4`;
    videoElement.loop = true;
    videoElement.playsInline = true;
    videoElement.volume = 0;
    videoElement.style.position = "absolute";
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.objectFit = "cover";
    videoElement.style.zIndex = "100";
    videoElement.style.opacity = "0";
    videoElement.style.transition = "opacity 300ms";
    videoElement.style.cursor = "pointer";

    videoElement.onclick = () => {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    };

    const currentSlideElement = document.querySelector<HTMLDivElement>(
      `.slick-current > div > div`
    );

    if (currentSlideElement) {
      currentSlideElement.appendChild(videoElement);
      observer.observe(videoElement);
      setTimeout(() => {
        videoElement.style.opacity = "1";
      }, 500);
    }
  }, [currentSlide]);

  return (
    <div className="w-full px-4">
      <Slider
        infinite
        speed={300}
        slidesToShow={screenWidth < 640 ? 1 : screenWidth < 768 ? 3 : 5}
        centerMode
        centerPadding="0px"
        nextArrow={<NextArrowIcon />}
        prevArrow={<PrevArrowIcon />}
        beforeChange={(_, next) => setCurrentSlide(next)}
        afterChange={() => console.log("afterChange")}
        swipeToSlide={false}
        draggable={false}
        swipe={false}
        className="relative"
      >
        {Array.from({ length: slidesToShow }).map((_, index) => {
          const offsetIndexFromCenter =
            (index - currentSlide + slidesToShow) % slidesToShow;
          const adjustedOffsetIndexFromCenter =
            Math.abs(offsetIndexFromCenter) > slidesToShow / 2
              ? offsetIndexFromCenter - slidesToShow
              : offsetIndexFromCenter;

          const videoIndex = (currentSlide + index) % videos.length;
          console.log("videoIndex", videoIndex);

          if (
            Math.abs(adjustedOffsetIndexFromCenter) >
            (screenWidth < 640 ? 0 : screenWidth < 768 ? 1 : 2)
          ) {
            return (
              <div
                key={index}
                data-offset-index-from-center={adjustedOffsetIndexFromCenter}
                className="w-full h-1/2 aspect-video !flex justify-center items-center bg-red-500 transition-all duration-[25ms] shadow-2xl relative opacity-0"
              >
                <Image
                  src={`/media/${videos[videoIndex]}/thumbnail.png`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            );
          }

          return (
            <div
              key={index}
              data-offset-index-from-center={adjustedOffsetIndexFromCenter}
              className="w-full h-1/2 aspect-video !flex justify-center items-center bg-red-500 transition-all duration-300 shadow-2xl relative sm:scale-[calc(var(--init-scale)-max(var(--offset),-1*var(--offset))*0.15)] sm:z-[calc(50-max(var(--offset),-1*var(--offset)))] sm:translate-x-[calc(50%*-1*var(--offset))]"
            >
              <Image
                src={`/media/${videos[videoIndex]}/thumbnail.png`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

function NextArrowIcon({ onClick }: ComponentProps<"div">) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute z-[60] right-0 top-1/2 -translate-y-1/2"
    >
      <CircleChevronRight className="size-10 focus-visible:text-[#ec6629] transition-all" />
    </div>
  );
}

function PrevArrowIcon({ onClick }: ComponentProps<"div">) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute z-[60] left-0 top-1/2 -translate-y-1/2"
    >
      <CircleChevronLeft className="size-10 focus-visible:text-[#ec6629] transition-all" />
    </div>
  );
}
