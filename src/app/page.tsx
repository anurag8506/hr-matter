"use client"

import Swiper2 from "./componets/swiper2";
import Footer from './componets/footer'
import Header from "./componets/header";

import Image from "next/image";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header activePage="HomePage" />

            {/* <section className=" overflow-hidden   sm:pt-[70px] pt-[70px]">
                <div className="container-fluid p-0" >
                    <section className="relative w-full  overflow-hidden">
                        <div className="d-flex justify-center pt-5">
                            <div className="col-md-12 mb-4">
                                <video
                                    className="relative  sm:h-full h-a  w-full  "
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src="/assets/7255352-hd_1920_1080_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                            </div>

                        </div>

                        <div className="absolute  z-10 flex items-center justify-center w-full h-full top-0">
                            <div className="row sm:px-20 px-6">
                                <div >
                                    <p className="text-center font-[cd-r] text-[#fff] sm:text-[25px] text-[16px]">Make your next move with HR Heads</p>
                                    <p className="font-[cd-b] text-center text-[#fff] z-10 flex items-center justify-center sm:text-[80px] text-[30px]  sm:leading-[85px] leading-[35px] ">
                                        YOUR PARTNER IN FINDING TOP TALENT
                                    </p>

                                    <div className="d-flex justify-center">
                                        <div className="col-md-8 mb-4">
                                            <p className="text-center font-[cd-r] text-[#fff] sm:text-[25px] text-[16px]">HR Heads specialises in recruiting Senior HR Professionals across the Consumer, Financial & Professional Services, Industrial, Pharmaceutical & Life Sciences & Public Sectors.</p>

                                        </div>

                                    </div>
                                    <div className="d-flex justify-center">
                                        <div className="col-md-2 mb-4">

                                            <div className="flex justify-center">
                                                <Link href='#' className="no-underline bg-[rgb(151 214 239)]  border hover:bg-[#fff] hover:text-[#000] text-[#fff] px-4 py-2 rounded-md text-center">WORK WITH HR HEADS</Link>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>



                </div>
            </section> */}
            <section className="overflow-hidden sm:pt-[70px] pt-[70px]">
                <div className="container-fluid p-0">
                    <section className="relative w-full overflow-hidden min-h-screen">
                        <div className="d-flex justify-center pt-5">
                            <div className="col-md-12 mb-4">
                                <video
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src="/assets/7255352-hd_1920_1080_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                            <p className="font-[cd-r] text-[#fff] sm:text-[25px] text-[18px] max-w-[90%] sm:max-w-[60%]">
                                Make your next move with HR Heads
                            </p>
                            <p className="font-[cd-b] text-[#fff] sm:text-[80px] text-[30px] sm:leading-[85px] leading-[35px] max-w-[90%] sm:max-w-[60%]">
                                YOUR PARTNER IN FINDING TOP TALENT
                            </p>

                            <div className="max-w-[90%] sm:max-w-[60%] mt-4">
                                <p className="font-[cd-r] text-[#fff] sm:text-[25px] text-[16px]">
                                    HR Heads specialises in recruiting Senior HR Professionals across the Consumer, Financial & Professional Services, Industrial, Pharmaceutical & Life Sciences & Public Sectors.
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-6">
                                <Link href="#" className="no-underline bg-[rgb(151 214 239)] border hover:bg-[#fff] hover:text-[#000] text-[#fff] px-4 py-2 rounded-md text-center">
                                    WORK WITH HR HEADS
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="flex items-center justify-center bg-[#fff] sm:px-20 px-6 pt-4 ">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center sm:relative sm:top-[-120px] z-10">
                        <div className="col-md-8">
                            <div className="row align-items-stretch">
                                {/* Clients Box */}
                                <div className="col-md-6 mb-4" data-aos="fade-up">
                                    <div className="border shadow-lg sm:p-[50px] p-[30px] bg-[#fff] rounded h-full flex flex-col">
                                        <div className="flex justify-center">
                                            <Image
                                                src="/assets/david-lloyd-logo-trimmed-400x157.png"
                                                className="object-contain sm:w-[50px] w-[30px]"
                                                width={300}
                                                height={50}
                                                alt="Image"
                                            />
                                        </div>
                                        <p className="text-[#2d4e6b] text-center text-[18px] font-[cd-b] pt-4 uppercase">
                                            Clients
                                        </p>
                                        <p className="text-[#000] text-center text-[18px] font-[cd-m] uppercase">
                                            Hire Into Your HR Function
                                        </p>
                                        <p className="text-[#000] text-center text-[18px] font-[cd-r] flex-grow">
                                            For +15 years, we’ve been expertly placing high-calibre talent to drive businesses.
                                            Our specialist consultants tailor solutions to your needs, saving you time and
                                            resources through our commitment to excellence. Speak to us today to elevate your
                                            recruitment process.
                                        </p>
                                        <div className="flex justify-center mt-auto">
                                            <Link
                                                href="#"
                                                className="no-underline  border 
                    hover:bg-[#000] hover:text-[#fff] text-[#000] px-4 py-2 
                    rounded-md text-center uppercase"
                                            >
                                                Work With HR Heads
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Candidates Box */}
                                <div className="col-md-6 mb-4" data-aos="fade-up">
                                    <div className="border shadow-lg  sm:p-[50px] p-[30px] bg-[#fff] rounded h-full flex flex-col">
                                        <div className="flex justify-center">
                                            <Image
                                                src="/assets/david-lloyd-logo-trimmed-400x157.png"
                                                className="object-contain sm:w-[50px] w-[30px]"
                                                width={300}
                                                height={50}
                                                alt="Image"
                                            />
                                        </div>
                                        <p className="text-[#2d4e6b] text-center text-[18px] font-[cd-b] pt-4 uppercase">
                                            Candidates
                                        </p>
                                        <p className="text-[#000] text-center text-[18px] font-[cd-m] uppercase">
                                            Progress Your HR Career
                                        </p>
                                        <p className="text-[#000] text-center text-[18px] font-[cd-r] flex-grow">
                                            Are you an experienced HR Professional ready to make a career move?
                                            We specialise in placing top talent across the UK. Our dedicated consultants
                                            work closely with you to understand your skills, aspirations, and needs.
                                            We’re committed to finding the perfect fit for you, saving you time in your
                                            job search. Speak to us today to get started.
                                        </p>
                                        <div className="flex justify-center mt-auto">
                                            <Link
                                                href="#"
                                                className="no-underline  border 
                    hover:bg-[#000] hover:text-[#fff] text-[#000] px-4 py-2 
                    rounded-md text-center uppercase"
                                            >
                                                Upload CV
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0">
                    <p className="text-[#2d4e6b] text-center uppercase text-[25px] ">We&apos;ve partnered with...</p>
                    <Swiper2 />

                </div>
            </section>




            <section className="overflow-hidden  ">
                <div className="container-fluid p-0">

                    <div className="row align-items-stretch min-h-full bg-[#fff] p-0 m-0">
                        <div className="col-md-6  m-0 p-0" data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="h-full">
                                <Image
                                    src="/assets/pexels-edmond-dantes-4344860.jpg"
                                    className="object-cover w-full h-full p-0 m-0"
                                    width={1080}
                                    height={1080}
                                    alt="Image"
                                />
                            </div>
                        </div>

                        {/* Right Content Section - Ensures Both Sides Are Equal */}
                        <div className="col-md-6 bg-[#323f48]" data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="col-md-8 flex-grow flex flex-col justify-center h-full">
                                <div className="px-12 sm:p-[60px] p-[30px]">
                                    <p className="text-[#97d6e5] uppercase sm:text-[30px] sm:leading-[35px] text-[25px] leading-[30px]">
                                        Specialist Recruiters of HR Talent
                                    </p>
                                    <p className="text-[#fff] uppercase sm:text-[25px] text-[20px]">
                                        Delivering HR recruitment as a professional service.
                                    </p>
                                    <p className="text-[#fff] text-[18px] pt-4">
                                        We are passionate about recruiting Senior HR professionals across the UK and Europe and operate on a retained, exclusive, and contingent basis to supply the best, not just the available talent.
                                    </p>
                                    <p className="text-[#fff] text-[16px] pt-4">
                                        We partner with leading businesses looking to attract Senior HR talent into their organisations. We offer tailored HR recruitment solutions for all skills sitting within the broader HR function to include reward, compensation and benefits, learning and development, business partnering, talent acquisition, and organisational design and development.
                                    </p>

                                    {/* Button */}
                                    <div className="pt-4">
                                        <Link
                                            href="#"
                                            className="no-underline bg-[rgb(151 214 239)] border hover:bg-[#fff] hover:text-[#000] text-[#fff] px-4 py-2 rounded-md text-center"
                                        >
                                            WORK WITH HR HEADS
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="overflow-hidden bg-[#fff] sm:px-20 px-6 pt-4 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="flex justify-center" data-aos="fade-up"
     data-aos-duration="2000">
                        <div className="col-md-10 pt-5">
                            <div className="sm:flex align-items-center justify-between ">
                                <p className="text-[#2d4e6b] uppercase text-[25px] ">Current Opportunities</p>
                                <div >
                                    <Link href='#' className="no-underline bg-[rgb(151 214 239)]  border hover:bg-[#000] hover:text-[#fff] text-[#000] px-4 py-2 rounded-md text-center uppercase">view all</Link>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-4 mb-4">
                                    <p className="text-[#2d4e6b] text-[25px] ">Payroll Specialist</p>
                                    <div className="flex align-items-center gap-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                        Hertfordshire
                                    </div>
                                    <p className="text-[#000] font-[cd-m] text-[16px] pt-4">£45,000 - £50,000 +benefits</p>
                                    <p className="text-[#000] font-[cd-r] text-[16px] " >Join us as an EMEA Senior Payroll Specialist! Manage payroll for multiple countries, collaborate with teams, and enjoy great benefits. Apply now!</p>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <p className="text-[#2d4e6b] text-[25px] ">Director of People</p>
                                    <div className="flex align-items-center gap-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                        Hertfordshire
                                    </div>
                                    <p className="text-[#000] font-[cd-m] text-[16px] pt-4">£45,000 - £50,000 +benefits</p>
                                    <p className="text-[#000] font-[cd-r] text-[16px] " >Looking for Director of People in the charitable sector to lead the People Strategy in the Hampshire area</p>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <p className="text-[#2d4e6b] text-[25px] ">Payroll Specialist</p>
                                    <div className="flex align-items-center gap-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                        Hertfordshire
                                    </div>
                                    <p className="text-[#000] font-[cd-m] text-[16px] pt-4">£45,000 - £50,000 +benefits</p>
                                    <p className="text-[#000] font-[cd-r] text-[16px] " >HR Advisor at Luton Airport location: Manage employee relations, training, and admin support. CIPD Level 5 preferred.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-gradient-to-l from-[#fff] to-[#77FB38] sm:px-20 px-6 pt-4 sm:py-[100px] py-[30px]" data-aos="fade-up"
     data-aos-duration="2000">
                <div className="container-fluid p-0">
                    <div className="flex justify-center" >
                        <div className="col-md-10 pt-5">
                            <div>
                                <p className="text-[#000] uppercase text-[25px] font-[cd-b] ">Employment Market Insight</p>

                            </div>
                            <div className="row pt-4 align-items-stretch">
                                <div className="col-md-3 mb-4">
                                    <div className="bg-[#000]">
                                        <div className="p-5">
                                            <p className="text-[#fff] uppercase text-[30px] font-[cd-b] text-center">5.4%</p>
                                            <p className="text-[#fff]  text-[18px] font-[cd-r] p-text text-center">Annual earnings growth rate. April – June 2024</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mb-4">
                                    <div className="bg-[#000]">
                                        <div className="p-5">
                                            <p className="text-[#fff] uppercase text-[30px] font-[cd-b] text-center">74.2%</p>
                                            <p className="text-[#fff]  text-[18px] font-[cd-r] p-text text-center">UK Employment rate. April – June 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="bg-[#000]">
                                        <div className="p-5">
                                            <p className="text-[#fff] uppercase text-[30px] font-[cd-b] text-center">884K</p>
                                            <p className="text-[#fff]  text-[18px] font-[cd-r] p-text text-center">Estimated vacancies. May – July 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="bg-[#000]">
                                        <div className="p-5">
                                            <p className="text-[#fff] uppercase text-[30px] font-[cd-b] text-center">4.2%</p>
                                            <p className="text-[#fff]  text-[18px] font-[cd-r] p-text text-center">Unemployment rate. (16-64 yrs old) April – June 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden bg-[#fff] sm:px-20 px-6 pt-4 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="flex justify-center">
                        <div className="col-md-10 pt-5">

                            <div className="row pt-4 align-items-stretch " data-aos="fade-up"
     data-aos-duration="2000">
                                {/* Left Column with Image and Vertical Border */}
                                <div className="col-md-6 mb-4 d-flex justify-between">
                                    <div className="col-md-8">
                                        <Image
                                            src="/assets/Asset 1.svg"
                                            width={1080}
                                            height={1080}
                                            className="w-full"
                                            alt=".."
                                        />
                                    </div>

                                    {/* Vertical Border */}
                                    <div className="border border-dark border-end h-full sm:block hidden "></div>
                                </div>

                                {/* Right Column with Text */}
                                <div className="col-md-6 mb-4">
                                    <p className="text-[#000] text-[25px] font-[cd-b]  uppercase pt-3">
                                        Contact HR Heads
                                    </p>
                                    <p className="text-[#000] text-[18px] font-[cd-r] ">
                                        For more information about our HR recruitment processes or to begin a hiring process, you can call us on 01962 432001 or email us at speaktous@hrheads.co.uk.
                                    </p>
                                    <div className="flex pt-4">
                                        <Link
                                            href="#"
                                            className="no-underline  border 
                    hover:bg-[#000] hover:text-[#fff] text-[#000] px-4 py-2 
                    rounded-md text-center uppercase"
                                        >
                                            COntact us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />





        </>
    );
}
