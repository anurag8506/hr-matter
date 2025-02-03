"use client"
import Image from "next/image";
import Footer from '@/app/componets/footer'
import Header from '@/app/componets/header'


import AOS from 'aos';
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"





import Slider4 from '@/app/componets/swiper4';
import MyTeam from '@/app/componets/myteam';

import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";

export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>

            <Header activePage="servicesPage" />
            <section className="bg-[#000] overflow-hidden min-h-[100vh] pt-[100px]">
                <div className="container-fluid p-0 min-h-[100vh]">
                    <div className="relative sm:min-h-[100vh]">
                        <Image src='/assets/hrt (2).png' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[100px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b] uppercase">Interim Solutions</p>
                                        <p className="font-[cd-r]  sm:text-[25px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">
                                        HR Heads is a leading Senior HR recruitment consultancy with a dedicated interim management team.
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
        


            <section className="bg-[#fff] overflow-hidden sm:pt-[80px] pt-[40px] sm:px-20 px-6 py-[50px] " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row align-items-center justify-center' >
                     <div className="col-md-10">
                        <p className="text-[#29bfe9] uppercase sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-se]">Grow Your Business With Interim Management</p>
                        <p className="text-[#000]  text-[20px]  font-[cd-r]">We work with a pool of highly experienced professionals, available for both flexible short – medium term cover positions as well as specific change, transformation or project-based remits requiring skilled resource to quickly ‘plug in’ and support for particular programmes.</p>
                        <p className="text-[#000]  text-[20px]  font-[cd-r]">We provide ongoing management and oversight for the full lifecycle of our assignments, ensuring proactive communication and support is available at all times.</p>
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
            <section className="overflow-hidden bg-[#fff] sm:px-20 px-6 pt-4 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="flex justify-center" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="col-md-10 pt-5">
                            <div className="sm:flex align-items-center justify-between ">
                                <p className="text-[#2d4e6b] uppercase text-[25px] ">Our Values</p>
                              
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-4 mb-4">
                                    <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e22828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    
                                    </div>
                                    <p className="text-[#2d4e6b] text-[25px] uppercase ">
                                    Search</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">We efficiently source candidates through our extensive network for roles ranging from Generalist HR and Reward to highly specialised delivery positions or large-scale transformation programmes. We provide identified, assessed, and qualified shortlists within 2-8 business hours.</p>

                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e22828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    
                                    </div>
                                    <p className="text-[#2d4e6b] text-[25px] uppercase ">
                                   
Screening</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">We efficiently source candidates through our extensive network for roles ranging from Generalist HR and Reward to highly specialised delivery positions or large-scale transformation programmes. We provide identified, assessed, and qualified shortlists within 2-8 business hours.</p>

                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e22828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    
                                    </div>
                                    <p className="text-[#2d4e6b] text-[25px] uppercase ">
                                  
Negotiating</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">We efficiently source candidates through our extensive network for roles ranging from Generalist HR and Reward to highly specialised delivery positions or large-scale transformation programmes. We provide identified, assessed, and qualified shortlists within 2-8 business hours.</p>

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
