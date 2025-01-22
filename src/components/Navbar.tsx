import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80">
      <div className="flex justify-between items-center w-full">
        <Image
          className="imgNav w-full sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[5rem] 2xl:w-[6rem] 3xl:w-[8rem] ml-[3%]"
          src="/media/logo.svg"
          alt="Logo"
          width={20} 
          height={20} 
          style={{ objectFit: 'contain' }} 
 
        />

        <ul className="flex space-x-4 mr-[3%]">
          <li>
            <a href="#slide2" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Trang chủ</a>
          </li>
          <li>
            <a href="#slide3" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Về chúng tôi</a>
          </li>
          <li>
            <a href="#slide4" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Dịch vụ</a>
          </li>
          <li>
            <a href="#slide5" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Dự án</a>
          </li>
          <li>
            <a href="#slide6" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Khách hàng</a>
          </li>
          <li>
            <a href="#slide7" className="text-white text-sm lg:text-sm xl:text-lg 2xl:text-[1.6rem] 3xl:text-[2rem] hover:text-[#ec6629]">Liên hệ</a>
          </li>
          <li>
            <button
              id="language-toggle"
              className="bg-transparent border border-white cursor-pointer text-xs font-thin text-white px-0.5 py-0.5 rounded-[7px] transition-colors duration-300 ease-in-out hover:bg-[#ec6629] hover:text-white flex items-center leading-[0.8rem] lg:leading-[0.8rem] xl:leading-[1.1rem] 2xl:leading-[1.5rem] 3xl:leading-[1.6rem]"
            >
              <span className="text-white px-1 font-regular">VI</span>
              <span className="text-white px-1 flex items-center justify-center font-regular">|</span>
              <span className="text-white px-1 font-regular">EN</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
//lam tiep
export default Navbar;
