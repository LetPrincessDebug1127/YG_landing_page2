import React from "react";

const VideoBackgroundSection: React.FC = () => {
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

      {/* Overlay (optional)
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}


    </section>
  );
};

export default VideoBackgroundSection;
