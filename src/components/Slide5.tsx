"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../public/translation/translations";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const MIN_SLIDES_TO_SHOW = 6;
let triggerVideoAutoPlayFirstTime = false;

const videos = [
  "/media/video1/video.mp4",
  "/media/video2/video.mp4",
  "/media/video3/video.mp4",
  "/media/video4/video.mp4",
  "/media/video5/video.mp4",
  "/media/video6/video.mp4",
  "/media/video7/video.mp4",
  "/media/video8/video.mp4",
  "/media/video9/video.mp4",
  "/media/video10/video.mp4",
];

const backgroundImages = [
  "/media/video1/thumbnail.png",
  "/media/video2/thumbnail.png",
  "/media/video3/thumbnail.png",
  "/media/video4/thumbnail.png",
  "/media/video5/thumbnail.png",
  "/media/video6/thumbnail.png",
  "/media/video7/thumbnail.png",
  "/media/video8/thumbnail.png",
  "/media/video9/thumbnail.png",
  "/media/video10/thumbnail.png",
];

const projectNames = [
  "event1",
  "event2",
  "event3",
  "event4",
  "event5",
  "event6",
  "event7",
  "event8",
  "event9",
  "event10",
  "event11",
];

const urls = [
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114764&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "",
  "",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114346&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114798&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2113760&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114797&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114796&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114763&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2114345&parId=C3686AE64453CEA3%2114762&o=OneUp",
  "https://onedrive.live.com/?authkey=%21AHE8jL2tnOme5Bk&cid=C3686AE64453CEA3&id=C3686AE64453CEA3%2113758&parId=C3686AE64453CEA3%2114762&o=OneUp",
];

export default function Slide5() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  return (
    <>
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>
      <div className="absolute size-full z-20 flex flex-col justify-center items-center gap-6 sm:gap-24 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32">
        <h1 className="text-[42px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] 3xl:text-[96px] font-bold text-[#ec6629] lg:pt-[52px] xl:pt-[65.17px] 2xl:pt-[78px] 3xl:pt-[104px]">
          {t.projects}
        </h1>
        <SlideShow onVideoIndexChange={setCurrentVideoIndex} />
        <div className="flex flex-col gap-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center">
          <span>{t[projectNames[currentVideoIndex] as keyof typeof t]}</span>
          <span>
            {t.linkDetail}{" "}
            <a
              href={urls[currentVideoIndex]}
              target="_blank"
              className="text-[#ec6629] underline font-semibold"
            >
              LINK
            </a>
          </span>
        </div>
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
  const [screenWidth, setScreenWidth] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const calculatedVideos = useMemo(() => {
    if (videos.length < MIN_SLIDES_TO_SHOW) {
      const missingItems = MIN_SLIDES_TO_SHOW - videos.length;
      return videos.concat(videos.slice(0, missingItems));
    }
    return videos;
  }, [videos, MIN_SLIDES_TO_SHOW]);

  const calculatedBackgroundImages = useMemo(() => {
    if (backgroundImages.length < MIN_SLIDES_TO_SHOW) {
      const missingItems = MIN_SLIDES_TO_SHOW - backgroundImages.length;
      return backgroundImages.concat(backgroundImages.slice(0, missingItems));
    }
    return backgroundImages;
  }, [backgroundImages, MIN_SLIDES_TO_SHOW]);

  useEffect(() => {
    const abortController = new AbortController();
    document.querySelector<HTMLDivElement>(".slick-list")!.style.overflow =
      "visible";

    window.addEventListener(
      "resize",
      () => {
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

    setScreenWidth(document.body.clientWidth);
    document
      .querySelectorAll<HTMLDivElement>("[data-offset-index-from-center]")
      .forEach((elem) => {
        elem.style.setProperty("--init-scale", screenWidth < 640 ? "1" : "2");
      });

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

    document
      .querySelectorAll(".slick-slide > div > div > video")
      .forEach((elem) => elem.remove());

    document.querySelector("#slide5 > video")?.remove();

    const videoIndex = currentSlide % videos.length;
    onVideoIndexChange?.(videoIndex);

    const backgroundVideoElement = document.createElement("video");
    backgroundVideoElement.src = videos[videoIndex];
    backgroundVideoElement.playsInline = true;
    backgroundVideoElement.muted = true;
    backgroundVideoElement.style.position = "absolute";
    backgroundVideoElement.style.width = "100%";
    backgroundVideoElement.style.height = "100%";
    backgroundVideoElement.style.objectFit = "cover";
    backgroundVideoElement.style.zIndex = "0";
    backgroundVideoElement.style.transition = "opacity 300ms";
    backgroundVideoElement.style.left = "0";
    backgroundVideoElement.style.top = "50%";
    backgroundVideoElement.style.transform = "translateY(-50%)";

    const videoElement = document.createElement("video");
    videoElement.src = videos[videoIndex];
    videoElement.playsInline = true;
    videoElement.volume = 0;
    videoElement.style.position = "absolute";
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.objectFit = "cover";
    videoElement.style.zIndex = "40";
    videoElement.style.opacity = "0";
    videoElement.style.transition = "opacity 300ms";
    videoElement.style.cursor = "pointer";

    videoElement.onclick = async () => {
      if (videoElement.paused) {
        backgroundVideoElement.currentTime = videoElement.currentTime;
        await Promise.all([backgroundVideoElement.play(), videoElement.play()]);
      } else {
        backgroundVideoElement.pause();
        videoElement.pause();
        backgroundVideoElement.currentTime = videoElement.currentTime;
      }
    };

    videoElement.onended = () => {
      sliderRef.current?.slickNext();
    };

    window.onblur = () => {
      backgroundVideoElement.pause();
      videoElement.pause();
      backgroundVideoElement.currentTime = videoElement.currentTime;
      videoElement.volume = 0;
    };

    let intervalId: unknown;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (async () => {
            const videoElement = entry.target as HTMLVideoElement;
            if (intervalId) {
              clearInterval(intervalId as number);
            }

            if (entry.isIntersecting) {
              backgroundVideoElement.currentTime = videoElement.currentTime;
              await Promise.all([
                backgroundVideoElement.play(),
                videoElement.play(),
              ]);
              if (!triggerVideoAutoPlayFirstTime) {
                triggerVideoAutoPlayFirstTime = true;
                return;
              }
              intervalId = setInterval(() => {
                videoElement.volume = Math.min(1, videoElement.volume + 0.1);
              }, 500);
            } else {
              backgroundVideoElement.pause();
              videoElement.pause();
              backgroundVideoElement.currentTime = videoElement.currentTime;
              videoElement.volume = 0;
            }
          })();
        });
      },
      {
        threshold: 0.5,
      }
    );

    const currentSlideElement = document.querySelector<HTMLDivElement>(
      `.slick-current > div > div`
    );

    const slide5Element = document.querySelector<HTMLDivElement>("#slide5");

    if (slide5Element) {
      slide5Element.appendChild(backgroundVideoElement);
    }

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
        ref={sliderRef}
        infinite
        speed={300}
        slidesToShow={screenWidth < 640 ? 1 : screenWidth < 768 ? 3 : 5}
        centerMode
        centerPadding="0px"
        nextArrow={<NextArrowIcon />}
        prevArrow={<PrevArrowIcon />}
        beforeChange={(_, next) => setCurrentSlide(next)}
        swipeToSlide={false}
        draggable={false}
        swipe={false}
        className="relative z-30"
      >
        {Array.from({ length: calculatedVideos.length }).map((_, index) => {
          const offsetIndexFromCenter =
            (index - currentSlide + slidesToShow) % slidesToShow;
          const adjustedOffsetIndexFromCenter =
            Math.abs(offsetIndexFromCenter) > slidesToShow / 2
              ? offsetIndexFromCenter - slidesToShow
              : offsetIndexFromCenter;

          if (
            Math.abs(adjustedOffsetIndexFromCenter) >
            (screenWidth < 640 ? 0 : screenWidth < 768 ? 1 : 2)
          ) {
            return (
              <div
                key={index}
                data-offset-index-from-center={adjustedOffsetIndexFromCenter}
                className="w-full h-1/2 aspect-video !flex justify-center items-center bg-transparent transition-all duration-[25ms] shadow-2xl relative opacity-0"
              >
                <Image
                  src={calculatedBackgroundImages[index]}
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
              className="w-full h-1/2 aspect-video !flex justify-center items-center bg-transparent transition-all duration-300 shadow-2xl relative sm:scale-[calc(var(--init-scale)-max(var(--offset),-1*var(--offset))*0.15)] sm:z-[calc(50-max(var(--offset),-1*var(--offset)))] sm:translate-x-[calc(50%*-1*var(--offset))]"
            >
              <Image
                src={calculatedBackgroundImages[index]}
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
      className="cursor-pointer absolute z-[60] right-0 md:right-5 lg:right-10 top-1/2 -translate-y-1/2"
    >
      <CircleChevronRight className="xl:size-20 lg:size-16 md:size-12 size-10 opacity-40 focus-visible:text-[#ec6629] transition-all" />
    </div>
  );
}

function PrevArrowIcon({ onClick }: ComponentProps<"div">) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute z-[60] left-0 md:left-5 lg:left-10 top-1/2 -translate-y-1/2"
    >
      <CircleChevronLeft className="xl:size-20 lg:size-16 md:size-12 size-10 opacity-40 focus-visible:text-[#ec6629] transition-all" />
    </div>
  );
}
