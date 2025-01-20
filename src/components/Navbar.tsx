import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-gray-900 bg-opacity-80">
      <div className="flex justify-between items-center w-full">
        <Image
          className="imgNav w-full sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[5rem] 2xl:w-[8rem]"
          src="/media/logo.svg"
          alt="Logo"
          width={20} 
          height={20} 
          style={{ objectFit: 'contain' }} 
 
        />

        <ul className="flex space-x-4">
          <li>
            <a href="#slide2" className="text-white hover:text-gray-400">Trang chủ</a>
          </li>
          <li>
            <a href="#slide3" className="text-white hover:text-gray-400">Về chúng tôi</a>
          </li>
          <li>
            <a href="#slide4" className="text-white hover:text-gray-400">Dịch vụ</a>
          </li>
          <li>
            <a href="#slide5" className="text-white hover:text-gray-400">Dự án</a>
          </li>
          <li>
            <a href="#slide6" className="text-white hover:text-gray-400">Khách hàng</a>
          </li>
          <li>
            <a href="#slide7" className="text-white hover:text-gray-400">Liên hệ</a>
          </li>
         <li>
          <button id="language-toggle" >
            <span className="text-white" >VI</span>|<span className="text-white">EN</span>
          </button>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
