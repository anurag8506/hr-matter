"use client"


import Footer from '@/app/componets/footer'
import Header from "../componets/header";
import Image from "next/image";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider4 from '@/app/componets/swiper4';

import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header activePage="AboutPage" />

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
            <section className="bg-[#000] overflow-hidden bg-gradient-to-l from-[#fff] to-[#77FB38] pt-[140px]  sm:px-20 px-6 " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row align-items-center' >
                        <div className='col-md-6 mb-4'>
                            <p  className="text-[#000] uppercase  sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-m] ">Expert HR Recruitment</p>
                            <p  className="text-[#000] uppercase  sm:text-[45px] text-[25px] sm:leading-[50px] leading-[30px] font-[cd-b] ">Your Partner in Finding Top Talent</p>
                            <p className="text-[#000]   font-[cd-r] sm:text-[25px] text-[16px] sm:leading-[30px] leading-[21px] ">Our mission at HR Heads is to deliver exceptional human resources talent solutions as a professional service through our experienced team of HR recruitment specialists creating value within your organisation.</p>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='flex sm:justify-end'>
                                <div className='col-md-12'>
                                    <Image src="/assets/DSC_0287-1200x900.jpg" className="w-full rounded" width={1080} height={1080} alt="Image" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden pt-[140px]  sm:px-20 px-6 " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className="flex justify-center">
                        <div className="col-md-10">
                    <div className='row align-items-center' >
                        <div className='col-md-6 mb-4'>
                            <p  className="text-[#000] uppercase  sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-m] ">Our Story</p>

                            <p className="text-[#000]   font-[cd-r] text-[18px]  ">Founded in 2009 by Jen Gaster, the business delivers recruitment that puts relationships first.</p>
                       <p className="text-[#000]   font-[cd-r] text-[18px] ">With offices in Winchester, Southampton and London, we are part of the Heads Resourcing Group with sister brands Procurement Heads and Executive Heads.</p>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='flex sm:justify-end'>
                                <div className='col-md-12'>
                                    <Image src="/assets/DSC_0287-1200x900.jpg" className="w-full rounded" width={1080} height={1080} alt="Image" />
                                </div>
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
                                    Rewarding Relationships</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">Relationships are pivotal to our existence and we place great value on their development. We are here to do more than connect people to jobs, we are your trusted advisors.</p>
                                  <p className="text-[#000] font-[cd-r] text-[18px] pt-2">We encourage collaboration through our unique referral scheme ‘The Heads Up’ and are driven by a desire to build deep long-standing partnerships. Our goal is to act as an ambassador for the teams and individuals we support.</p>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e22828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    
                                    </div>
                                    <p className="text-[#2d4e6b] text-[25px] uppercase ">
                                    Exceeding Expectations</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">More than just an HR recruitment company, we engage with leaders to deliver the unexpected when it comes to sourcing talent.</p>
                                  <p className="text-[#000] font-[cd-r] text-[18px] pt-2">Going beyond ‘filling the role’, we advise, challenge, champion and are innovative in the value-add solutions we provide.</p>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e22828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    
                                    </div>
                                    <p className="text-[#2d4e6b] text-[25px] uppercase ">
                                    Doing the Right Thing</p>
                                    <p className="text-[#000] font-[cd-r] text-[18px] pt-2">Doing the right thing is not difficult. Knowing what the right thing is, that’s where we come in.</p>
                                  <p className="text-[#000] font-[cd-r] text-[18px] pt-2">Everyone has a responsibility for the choices they make. We pledge to lead the way by championing Equality, Diversity & Inclusion and Sustainability and we are proud to partner with Macmillan Cancer Support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         <Slider4/>


           

            <Footer />





        </>
    );
}
