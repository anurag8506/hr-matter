"use client"


import Footer from '@/app/componets/footer'
import Header from "@/app/componets/header";
import Image from "next/image";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider4 from '@/app/componets/swiper4';
import MyTeam from '@/app/componets/myteam';
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header activePage="ServicesPage" />

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
             <section className="bg-[#000] overflow-hidden min-h-[100vh] pt-[100px]">
                <div className="container-fluid p-0 min-h-[100vh]">
                    <div className="relative sm:min-h-[100vh]">
                        <Image src='/assets/hrt3.png' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[100px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b] uppercase">Permanent Talent For Your Team</p>
                                        <p className="font-[cd-r]  sm:text-[25px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">
                                        Our purpose is to deliver recruitment as a professional service and our experienced team of HR recruiters has a proven track record for customised staffing solutions and matching companies and talent.


                                        </p>

                                        <div className="framer-box">

                                            <div className="pt-4 pb-4 relative text-scroll">
                                                <p className="text-white rotate-90 p-0 m-0">SCROLL</p>
                                            </div>


                                            <div className="lineContainer">
                                                <motion.div
                                                    className="animatedLine"
                                                    initial={{ top: "-60%" }}
                                                    animate={{ top: "100%" }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                ></motion.div>
                                            </div>
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
                                    <p className="text-[#000] text-[25px] font-[cd-b]  uppercase pt-3">
                                    hr heads offers a comprehensive approach to permanent recruitment
                                    </p>
                                    <p className="text-[#000] text-[18px] font-[cd-r] ">
                                    We employ both passive and active sourcing methods such as headhunting, job boards, and social media. We meticulously screen candidates for technical skills and cultural fit, recommend the best candidates, and conduct thorough background checks. Our talent acquisition services encompass salary negotiations, onboarding, and consultation to enhance the hiring processes
                                    </p>
                                    <p className="text-[#000] text-[18px] font-[cd-m] ">We specialise in bespoke recruitment campaigns, with effective talent acquisition strategies tailored your organisation’s unique needs, ensuring you secure exceptional talent.</p>
                                
                                    </div>

                                    {/* Vertical Border */}
                                    <div className="border border-dark border-end h-full sm:block hidden "></div>
                                </div>

                                {/* Right Column with Text */}
                                <div className="col-md-6 mb-4">
                                    <p className="text-[#000] text-[25px] font-[cd-b]  uppercase pt-3">
                                    Our services at HR Heads:
                                    </p>
                                    <p className="text-[#000] text-[18px] font-[cd-r] ">
                                    Connecting top-tier HR professionals with leading organisations across the UK and Europe.
                                    </p>
                                    <p className="text-[#000] text-[18px] font-[cd-r] ">Specialising in roles such as HR Business Partner, HR Manager, Head of HR, Chief People Officer, and niche positions like Talent Acquisition, Talent Development, Organisational Design, Wellbeing, ED&I, and Reward.</p>
                                    <p className="text-[#000] text-[18px] font-[cd-r] ">Offering personalised recruitment solutions backed by expert market insights.</p>
                                  <p className="text-[#000] text-[18px] font-[cd-m] ">Explore our current HR job openings here.</p>
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








            <section className="overflow-hidden pt-4  ">
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
                                        Quality-driven approach
                                    </p>
                                    <p className="text-[#fff] uppercase sm:text-[25px] text-[20px]">
                                        Our Team
                                    </p>
                                    <p className="text-[#fff] text-[18px] pt-4">
                                        The team has a combined experience of more than 30 years in HR recruitment, enabling deep and longstanding relationships with leading HR teams across the UK.
                                    </p>
                                    <p className="text-[#fff] text-[16px] pt-4">
                                        Our quality-driven approach sees us share expertise to solve complex hiring challenges, so people choose to work with us again and again.
                                    </p>

                                    {/* Button */}
                                    <div className="pt-4">
                                        <Link
                                            href="#"
                                            className="no-underline bg-[rgb(151 214 239)] border hover:bg-[#fff] hover:text-[#000] text-[#fff] px-4 py-2 rounded-md text-center uppercase"
                                        >
                                            SEe our Team
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
<MyTeam/>

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



            <Slider4 />




            <Footer />





        </>
    );
}
