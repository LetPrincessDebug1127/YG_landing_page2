"use client"
import React from "react";
import translations from "../../public/translation/translations";
import { useLanguage } from "../context/LanguageContext";

const VideoBackgroundSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language]; 
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
        <div className="relative z-10 w-full h-full flex mt-[2em]">
        {/* Phần bên trái - Hình ảnh */}
        <div className="w-[50%] h-full flex items-center justify-center mt-4">
          <img
            src="/media/banner-turning.jpg" 
            alt="Banner"
            className="w-full sm:w-[90%] md:w-[60%] lg-custom:w-[84%] xl-custom:w-[63%] 2xl-custom1:w-[65%] 2xl-custom2:w-[50%] 3xl:w-[55%] max-w-[100%] h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Phần bên phải - Văn bản */}
        <div className="flex flex-col justify-center items-start text-white w-fit h-auto p-3 mr-[3em]">
        <h1 className="text-[#ec6629] text-[24px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[60px] 2xl:text-[70px] font-bold mb-4 whitespace-nowrap">
            Young Generation Agency
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-3 lg:w-[30em] xl:w-[33.5em] 2xl:w-[31.5em] text-justify">
        {t.text}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:w-[30em] xl:w-[33.5em] 2xl:w-[31.5em] text-justify">
        {t.textP}
        </p>

        </div>


      </div>
    </section>
    
  );
};

export default VideoBackgroundSection;
//    <div>
//                 <img src="/media/banner-turning" />
//             </div>
//             <div >
//                 <h1>Young Generation Agency</h1>
//                 <p>
                // Là đơn vị chuyên cung cấp các dịch vụ tổ chức sự kiện, kích hoạt cho
                // thương hiệu, trang trí… Với đội ngũ nhân sự trẻ trung, nhiệt huyết, đầy
                // sáng tạo, cùng những người dẫn dắt nhiều kinh nghiệm trong lĩnh vực này.
                // Bên cạnh đó, YG không ngừng khẳng định bản sắc riêng, phát huy tư duy đổi
                // mới đầy nhiệt huyết của sức trẻ nhằm mang đến những giá trị thật trong
                // từng công việc mà chúng tôi thực hiện cho khách hàng.
//                 </p>
//                 <p>
                // Hãy để YG được đồng hành và cùng tạo ra những giá trị khác biệt thông qua
                // việc xây dựng hành trình trải nghiệm đầy cảm hứng sáng tạo từ cảm xúc.
//                 </p>
//             </div>
//             </div>