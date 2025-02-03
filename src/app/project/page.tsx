"use client";
import Footer from '@/app/componets/footer'
import Header from "../componets/header";
import Image from "next/image";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect } from "react";


import "bootstrap/dist/css/bootstrap.min.css"


export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [activeSection, setActiveSection] = useState(1);
    const renderContent = () => {
        if (activeSection === 1) {
            return (
                <div className="row justify-center">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-4">

                                <p className="text-[#29bfe9] uppercase sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-se]">
                                    Payroll Specialist
                                </p>
                                <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    <p className="text-[#000] text-[20px] font-[cd-m] m-0 p-0">Bedfordshire</p>
                                </div>
                                <p className="text-[#2D4E6B] text-[16px]">£45,000 - £50,000 +benefits</p>
                                <p className="text-[#000] text-[16px] font-[cd-r]">
                                    Join us as an EMEA Senior Payroll Specialist! Manage payroll for multiple countries, collaborate with teams, and enjoy great benefits. Apply now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (activeSection === 2) {
            return (
                <div className="row justify-center">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <p className="text-[#29bfe9] uppercase sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-se]">
                                    Payroll Specialist
                                </p>
                                <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    <p className="text-[#000] text-[20px] font-[cd-m] m-0 p-0">Hampshire</p>
                                </div>
                          
                                <p className="text-[#2D4E6B] text-[16px]">£45,000 - £50,000 +benefits</p>
                                <p className="text-[#000] text-[16px] font-[cd-r]">
                                    Join us as an EMEA Senior Payroll Specialist! Manage payroll for multiple countries, collaborate with teams, and enjoy great benefits. Apply now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (activeSection === 3) {
            return (
                <div className="row justify-center">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <p className="text-[#29bfe9] uppercase sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px] font-[cd-se]">
                                    HR Business Partner – 5 month FTC
                                </p>
                                <div className="flex align-items-center pb-2 font-[cd-r] text-[#e22828] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#e22828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    <p className="text-[#000] text-[20px] font-[cd-m] m-0 p-0">London</p>
                                </div>
                        
                                <p className="text-[#2D4E6B] text-[16px]">£45,000 - £50,000 +benefits</p>
                                <p className="text-[#000] text-[16px] font-[cd-r]">
                                    Join us as an EMEA Senior Payroll Specialist! Manage payroll for multiple countries, collaborate with teams, and enjoy great benefits. Apply now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }

    };


    return (
        <>
            <Header activePage="ProjectPage" />
            <section className="bg-[#000] overflow-hidden bg-gradient-to-l from-[#fff] to-[#77FB38] pt-[140px]  sm:px-20 px-6 " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row align-items-center' >
                        <div className='col-md-6 mb-4'>

                            <p className="text-[#000] uppercase  sm:text-[45px] text-[25px] sm:leading-[50px] leading-[30px] font-[cd-b] ">HR Opportunities</p>
                            <p className="text-[#000]   font-[cd-r] sm:text-[25px] text-[16px] sm:leading-[30px] leading-[21px] ">We specialise in recruiting across the breadth of Human Resources. Your experience might be as a generalist, or in a niche area.</p>

                            <p className="text-[#000]   font-[cd-r] sm:text-[25px] text-[16px] sm:leading-[30px] leading-[21px] ">Whatever your skillset, the opportunities are full of possibilities – is yours below</p>
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
            <section className="bg-[#fff] sm:px-20 px-6 pt-4 " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='d-flex justify-end'>
                        <div className='col-md-2'>
                            <select className="border border-gray-300 rounded-lg for py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500" value={activeSection} onChange={(e) => setActiveSection(Number(e.target.value))}>
                                <option value={1}>Bedfordshire</option>
                                <option value={2}>Hampshire</option>
                                <option value={3}>London</option>
                            </select>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#fff] sm:px-20 px-6 pt-4 " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row'>
                        <div className='col-md-10'>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#2D4E6B] sm:px-20 px-6 pt-4 py-[100px] " data-aos="fade-up"
                data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row'>
                        <div className='col-md-12 pt-5'>
                            <label className='text-[#fff] text-[20px] font-[cd-m]  mb-2'>Upload Your  CV</label>
                           <div className='justify-center d-flex '>
                           <input type='file' className='form-control'/>
                           </div>
                        
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

