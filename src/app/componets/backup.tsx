


"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-black"
        }`}
    >
      <header className="sm:px-24 px-6 sm:flex  justify-between items-center py-4 px-6  ">
        <div className="col-12   justify-between items-center">
          <div className="row justify-between align-items-center">
            <div className="col-md-3">
              <div className="sm:flex  items-center space-x-2">
                <Link href="/"
                >
                  <Image src="/assets/logo1.png" width={200}
                    height={100}
                    alt="no-img"
                    className="rounded-[50px] sm:w-[200] w-[150px] m-0 p-0"
                  />

                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <nav className={isMenuOpen ? "block sm:flex  justify-between items-center bg-[#000]   text-white font-medium fixed sm:relative  sm:w-[auto] w-[90vw] sm:left-[0px] left-[0px] sm:px-[0px] pl-[30px] sm:top-[0px] top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200" : "block sm:flex  gap-4  text-white font-medium fixed sm:relative  sm:w-[auto] w-[90vw] sm:left-[0px] left-[-100%] sm:px-[0px] pl-[30px] sm:top-[0px] top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200 justify-between"}>
                    <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] sm:pt-[0px] pt-[10px]">
                      <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
                        Home
                      </li>
                    </Link>
                    <Link href="/about"   className="text-white text-[18px] no-underline block sm:py-[0px] sm:pt-[0px] pt-[10px]">
                      <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
                        ABOUT
                      </li>
                    </Link>
                    <Link href="/services"   className="text-white text-[18px] no-underline block sm:py-[0px] sm:pt-[0px] pt-[10px]">
                      <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
                        Services
                      </li>
                    </Link>
              </nav>
            </div>
            <div className="col-md-3">
              <div className="sm:flex justify-end sm:block hidden ">
             <Link href='#'>
             <button className="text-[#fff] border border-white rounded-full py-2 px-4 text-[14px]">
              Contact Us
             </button>
             </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden absolute right-[20px] top-[30px] text-gray-600 text-3xl"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </header>
    </section>
  );
};

export default Header;
