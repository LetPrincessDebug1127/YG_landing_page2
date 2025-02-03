import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80 text-white p-4 shadow-lg hidden mobile-ui:block">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyWebsite
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-400 focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-900 shadow-md rounded-lg">
                <Link href="/service1" className="block px-4 py-2 hover:bg-gray-200">
                  Service 1
                </Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-200">
                  Service 2
                </Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-200">
                  Service 3
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-gray-800 p-4">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-400 focus:outline-none"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="ml-4 space-y-2">
              <Link href="/service1" className="block hover:text-gray-400">
                Service 1
              </Link>
              <Link href="/service2" className="block hover:text-gray-400">
                Service 2
              </Link>
              <Link href="/service3" className="block hover:text-gray-400">
                Service 3
              </Link>
            </div>
          )}
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
