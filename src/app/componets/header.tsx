"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface activePageProps {
  activePage: string
}
export default function Header(activePage: activePageProps) {
  console.log('activePage', activePage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-black"
        }`}
    >
      <header className="sm:px-20 px-6 sm:flex justify-between items-center py-4 px-6">
        <div className="col-12 sm:flex justify-between">
          <div className="col-md-3">
            <div className="sm:flex items-center ">
              <Link href="/">
                <Image
                  src="/assets/Asset 1.svg"
                  className="object-contain sm:w-[100px] w-[100px]"
                  width={1080}
                  height={1080}
                  alt="Image"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6 sm:flex justify-center items-center">
            <nav
              className={`${isMenuOpen
                ? "block sm:flex gap-4 text-[#fff] font-medium fixed sm:relative bg-[#000] sm:w-auto w-[90vw] sm:left-0 left-0 sm:px-0 pl-[30px] sm:top-0 top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200 overflow-y-scroll"
                : "block sm:flex justify-between text-[#fff] font-medium fixed sm:relative sm:w-full  w-[90vw] sm:left-0 left-[-100%] sm:px-0 pl-[30px] sm:top-0 top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200"
                }`}
            >
              <Link
                href="/"
                className={`no-underline text-[16px] block sm:py-0 py-[10px] ${activePage.activePage === "HomePage"
                  ? "text-[#77FB38] font-bold"
                  : "text-[#fff] hover:text-[#77FB38]"
                  }`}
              >
                <li
                  className={`${activePage.activePage === "HomePage" ? "list-item" : "list-none"
                    }`}
                >
                  HOME
                </li>
              </Link>



              <Link
                href="/about"
                className={(activePage.activePage == "AboutPage") ? "text-[#77FB38] no-underline text-[16px]" : " no-underline block sm:py-0 py-[10px] text-[16px] text-[#fff] hover:text-[#77FB38] no-underline"}
              >
                <li
                  className={`${activePage.activePage === "AboutPage" ? "list-item" : "list-none"
                    }`}
                >
                  ABOUT
                </li>
              </Link>


              <div className="relative sm:flex align-center">
                <div className="relative z-50 group">
                  <button
                    className={`group flex items-center text-[16px] sm:py-0 py-[10px] p-0 m-0 ${activePage.activePage === "servicesPage" ? "text-[#77FB38]" : "text-[#fff]"
                      }`}
                  >
                    <span>SERVICES</span>
                    <span className="ml-1 text-[10px] transform transition-transform duration-300 group-hover:rotate-180">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 7L11 1"
                          stroke={
                            activePage.activePage === "servicesPage" ? "#77FB38" : "currentColor"
                          }
                          strokeWidth="2"
                          className={`transition-colors duration-300 ${activePage.activePage === "servicesPage" ? "stroke-[#77FB38]" : ""
                            }`}
                        />
                      </svg>
                    </span>
                  </button>

                  <div className="sm:absolute relative left-0 sm:top-[30px] sm:p-[10px] p-0 sm:mt-2 w-[280px] bg-black sm:shadow-md rounded-md transition-all ease-in-out group-hover:!opacity-100 opacity-0 invisible group-hover:!visible h-0 sm:h-auto group-hover:h-auto">
                    <ul className="pl-5 py-0 space-y-2 sm:mt-4 mb-0">
                      {[
                        { href: "/services/Interim-Solutions", text: "Interim Solutions" },
                        { href: "/services/retained-Campaigns", text: "Retained Campaigns" },
                        { href: "/services/Permanenttalent", text: "Permanent Talent" },
                     
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`text-[16px] no-underline block sm:py-0 py-[10px] ${activePage.activePage === item.text ? "text-[#77FB38]" : "text-[#fff]"
                            } hover:text-[#77FB38] transition-colors duration-300`}
                        >
                          <li className="mb-3 leading-[18px] text-[16px] font-[500]">{item.text}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* <Link
                href="#"
                className={(activePage.activePage == "BlogsPage") ? "text-[#77FB38] no-underline text-[16px]" : " no-underline block sm:py-0 py-[10px] text-[#fff] text-[16px] hover:text-[#77FB38] no-underline"}
              >
                BLOGS
              </Link> */}
              <Link
                href="/project"
                className={(activePage.activePage == "ProjectPage") ? "text-[#77FB38] no-underline text-[16px]" : " no-underline block sm:py-0 py-[10px] text-[#fff] text-[16px] hover:text-[#77FB38] no-underline"}
              >
                <li
                  className={`${activePage.activePage === "ProjectPage" ? "list-item" : "list-none"
                    }`}
                >VACANCIES</li>
              </Link>
            </nav>
          </div>
          <div className="col-md-3 sm:flex justify-end">
            <div className="hidden md:sm:flex items-center space-x-4">
            <Link
  href="/contact"
  className={`no-underline text-[16px] flex align-items-center px-3 py-2 gap-2 rounded 
    ${activePage.activePage === "ContactPage"
      ? "text-[#000] bg-[#fff] border-none hover:border-none"
      : "text-[#fff] border border-[#fff] hover:border-none hover:bg-[#fff] hover:text-[#000]"
    }`}
>
  CONTACT US
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-black" 
  >
    <path
      d="M14 0.999999C14 0.447714 13.5523 -8.61581e-07 13 -1.11446e-06L4 -3.13672e-07C3.44772 -6.50847e-07 3 0.447715 3 0.999999C3 1.55228 3.44772 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 0.999999ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z"
      fill="currentColor" 
    />
  </svg>
</Link>






            </div>
          </div>
        </div>

        <button
          className="md:hidden absolute right-[20px] top-[30px] text-gray-600 text-3xl"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </header>
    </section>
  );
};
