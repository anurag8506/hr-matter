"use client"

import Footer from '@/app/componets/footer'
import Header from '@/app/componets/header'
import Image from 'next/image';

import AOS from 'aos';

import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";



export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [loading, setLoading] = useState(false);
    const [retailer, setRetailer] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const SubmitForm = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("email", retailer.email);
        formData.append("name", retailer.name);
        formData.append("phone", retailer.phone);
        formData.append("message", retailer.message);

        fetch(process.env.API_URL + "subject/", {
            method: "POST",
            body: formData, 
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setLoading(false); // Set loading to false once the response is received
                if (data.status) {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            })
            .catch((error) => {
                setLoading(false); // Set loading to false if an error occurs
                console.error("Error:", error);
            });
    };

    const handleChangeEvent = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setRetailer({
            ...retailer,
            [name]: value,
        });
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            <Header activePage="ContactPage" />
            <section className="bg-[#000] overflow-hidden bg-gradient-to-l from-[#fff] to-[#77FB38] pt-[140px]  sm:px-20 px-6 " data-aos="fade-up"
     data-aos-duration="2000">
                <div className="container-fluid p-0 ">
                    <div className='row align-items-center' >
                        <div className='col-md-6 mb-4'>
<div className='pr-4'>
<p className="text-[#000] uppercase  sm:text-[55px] text-[25px] sm:leading-[60px] leading-[30px] font-[cd-b] ">Contact Us</p>
<p className="text-[#000]   font-[cd-m] sm:text-[35px] text-[25px] sm:leading-[40px] leading-[30px] ">Thinking About Hiring? Our team would love to hear from you</p>
</div>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='flex sm:justify-end'>
                                <div className='col-md-12'>
                                       <Image src="/assets/DSC_0287-1200x900.jpg" className="w-full rounded"  width={1080}  height={1080} alt="Image"/>
                                </div>
                            </div>
                       
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#ffff] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px] " >
                <div className="container-fluid p-0">
                    <div className="row" data-aos="fade-up"
     data-aos-duration="2000">
                        <div className="col-md-6 mb-4">
                            <p className="text-[25px] text-[#ffff] font-[cd-m]">Visit us</p>

                            <div className="d-flex gap-3 align-items-center pb-2">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4C16.5522 4 13.2456 5.36964 10.8076 7.80761C8.36964 10.2456 7 13.5522 7 17C7 25.775 18.4563 35.6875 18.9438 36.11C19.2381 36.3618 19.6127 36.5001 20 36.5001C20.3873 36.5001 20.7619 36.3618 21.0562 36.11C21.625 35.6875 33 25.775 33 17C33 13.5522 31.6304 10.2456 29.1924 7.80761C26.7544 5.36964 23.4478 4 20 4ZM20 32.6812C16.5387 29.4312 10.25 22.4275 10.25 17C10.25 14.4141 11.2772 11.9342 13.1057 10.1057C14.9342 8.27723 17.4141 7.25 20 7.25C22.5859 7.25 25.0658 8.27723 26.8943 10.1057C28.7228 11.9342 29.75 14.4141 29.75 17C29.75 22.4275 23.4613 29.4475 20 32.6812ZM20 10.5C18.7144 10.5 17.4577 10.8812 16.3888 11.5954C15.3199 12.3097 14.4868 13.3248 13.9948 14.5126C13.5028 15.7003 13.3741 17.0072 13.6249 18.2681C13.8757 19.529 14.4948 20.6872 15.4038 21.5962C16.3128 22.5052 17.471 23.1243 18.7319 23.3751C19.9928 23.6259 21.2997 23.4972 22.4874 23.0052C23.6752 22.5132 24.6903 21.6801 25.4046 20.6112C26.1188 19.5423 26.5 18.2856 26.5 17C26.5 15.2761 25.8152 13.6228 24.5962 12.4038C23.3772 11.1848 21.7239 10.5 20 10.5ZM20 20.25C19.3572 20.25 18.7289 20.0594 18.1944 19.7023C17.6599 19.3452 17.2434 18.8376 16.9974 18.2437C16.7514 17.6499 16.687 16.9964 16.8124 16.366C16.9378 15.7355 17.2474 15.1564 17.7019 14.7019C18.1564 14.2474 18.7355 13.9378 19.366 13.8124C19.9964 13.687 20.6499 13.7514 21.2437 13.9974C21.8376 14.2434 22.3452 14.6599 22.7023 15.1944C23.0594 15.7289 23.25 16.3572 23.25 17C23.25 17.862 22.9076 18.6886 22.2981 19.2981C21.6886 19.9076 20.862 20.25 20 20.25Z" fill="#0000" />
                                </svg>

                                <p className="text-[#000] m-0 p-0 text-[18px]">HR Heads
Heads Resourcing Group,
West Wing, Ground Floor,
Burlington House,
Hedge End,
Southampton,
SO30 2AF</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.3374 20.8873L21.4 19.192V13C21.4 12.6287 21.2525 12.2726 20.99 12.01C20.7274 11.7475 20.3713 11.6 20 11.6C19.6287 11.6 19.2726 11.7475 19.0101 12.01C18.7475 12.2726 18.6 12.6287 18.6 13V20C18.5999 20.2458 18.6646 20.4873 18.7875 20.7002C18.9104 20.913 19.0871 21.0898 19.3 21.2127L22.9374 23.3127C23.0967 23.4047 23.2725 23.4645 23.4548 23.4885C23.6372 23.5126 23.8225 23.5005 24.0002 23.4529C24.1779 23.4053 24.3444 23.3232 24.4904 23.2113C24.6363 23.0993 24.7588 22.9597 24.8507 22.8004C24.9427 22.641 25.0023 22.4652 25.0263 22.2828C25.0503 22.1004 25.0381 21.9151 24.9904 21.7375C24.9427 21.5598 24.8605 21.3933 24.7485 21.2474C24.6364 21.1015 24.4968 20.9792 24.3374 20.8873ZM20 6C17.2311 6 14.5243 6.82109 12.222 8.35943C9.91973 9.89776 8.12532 12.0843 7.06569 14.6424C6.00607 17.2006 5.72882 20.0155 6.26901 22.7313C6.80921 25.447 8.14258 27.9416 10.1005 29.8995C12.0584 31.8574 14.553 33.1908 17.2687 33.731C19.9845 34.2712 22.7994 33.9939 25.3576 32.9343C27.9157 31.8747 30.1022 30.0803 31.6406 27.778C33.1789 25.4757 34 22.7689 34 20C33.9959 16.2882 32.5196 12.7297 29.8949 10.1051C27.2703 7.48045 23.7118 6.00413 20 6ZM20 31.2C17.7849 31.2 15.6194 30.5431 13.7776 29.3125C11.9358 28.0818 10.5003 26.3326 9.65256 24.2861C8.80485 22.2395 8.58306 19.9876 9.01521 17.815C9.44737 15.6424 10.5141 13.6468 12.0804 12.0804C13.6468 10.5141 15.6424 9.44736 17.815 9.0152C19.9876 8.58305 22.2395 8.80485 24.2861 9.65255C26.3326 10.5003 28.0818 11.9358 29.3125 13.7776C30.5431 15.6194 31.2 17.7848 31.2 20C31.1966 22.9694 30.0155 25.8162 27.9158 27.9158C25.8162 30.0155 22.9694 31.1966 20 31.2Z" fill="#0000" />
                                </svg>


                                <p className="text-[#000] m-0 p-0 text-[18px]">Monday - Saturday, 10:00 AM -6:00 PM </p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.6 10H30.4C31.83 10 33 11.17 33 12.6V28.2C33 29.63 31.83 30.8 30.4 30.8H9.6C8.17 30.8 7 29.63 7 28.2V12.6C7 11.17 8.17 10 9.6 10Z" stroke="#0000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M33 12.6001L20 21.7001L7 12.6001" stroke="#0000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <p className="text-[#000] m-0 p-0 text-[18px]">speaktous@hrheads.co.uk</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.8731 25.601L30.4622 23.1901C29.7435 22.4772 28.7735 22.0753 27.7612 22.071C26.749 22.0667 25.7756 22.4603 25.0509 23.1671C24.6642 23.556 24.154 23.7979 23.6082 23.8513C23.0624 23.9048 22.515 23.7662 22.0603 23.4597C20.2655 22.2619 18.7236 20.723 17.5223 18.9305C17.2212 18.4707 17.0877 17.9211 17.1444 17.3744C17.2011 16.8277 17.4445 16.3172 17.8336 15.929C18.5339 15.2036 18.9225 14.2329 18.9162 13.2246C18.9098 12.2163 18.509 11.2506 17.7996 10.5341L15.3887 8.12321C14.6669 7.4039 13.6895 7 12.6705 7C11.6514 7 10.674 7.4039 9.95219 8.12321L9.25852 8.81798C5.6422 12.4343 5.91288 20.0373 13.437 27.5571C17.9738 32.095 22.5403 33.9952 26.2431 33.9952C27.3332 34.0315 28.4195 33.8505 29.4388 33.4627C30.4582 33.075 31.3902 32.4882 32.1805 31.7367L32.8753 31.0419C33.5959 30.3198 34.0004 29.3411 34 28.321C33.9996 27.3008 33.5943 26.3225 32.8731 25.601ZM31.3235 29.4923L30.6288 30.1871C27.7795 33.0363 21.4904 32.5158 14.9844 26.0086C8.47827 19.5015 7.95664 13.208 10.8059 10.3587L11.4952 9.66507C11.8055 9.35584 12.2258 9.18221 12.6639 9.18221C13.102 9.18221 13.5223 9.35584 13.8326 9.66507L16.2435 12.0759C16.5482 12.3822 16.7212 12.7954 16.7255 13.2274C16.7298 13.6594 16.5651 14.076 16.2665 14.3882C15.526 15.1334 15.0641 16.1105 14.9582 17.1557C14.8522 18.2009 15.1087 19.2507 15.6846 20.1294C17.0495 22.1719 18.8048 23.9246 20.8494 25.2865C21.7254 25.8625 22.7725 26.1204 23.8158 26.0173C24.8591 25.9142 25.8355 25.4562 26.5818 24.7199C26.8934 24.4178 27.3112 24.2501 27.7452 24.2527C28.1792 24.2554 28.5949 24.4283 28.9028 24.7342L31.3137 27.145C31.469 27.2982 31.5926 27.4805 31.6772 27.6816C31.7619 27.8827 31.8059 28.0985 31.8069 28.3166C31.8078 28.5348 31.7655 28.751 31.6826 28.9528C31.5996 29.1545 31.4776 29.3379 31.3235 29.4923Z" fill="#0000" />
                                </svg>

                                <p className="text-[#000] m-0 p-0 text-[18px]">01962 432001</p>
                            </div>
                            <p className="text-[25px] text-[#0000] font-[cd-m] pt-4">Our Social Media</p>
                          
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex sm:justify-end">
                                <div className="col-md-10">
                                    <p className="text-[25px] text-[#0000] font-[cd-m]">Question? Send us a message. Don&apos;t be shy</p>
                                    <div>
                                        <div className="row" >
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="First" className="text-[#000]  text-[18px]">First</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        placeholder="Your Name"
                                                        name="firstName"
                                                        onChange={handleChangeEvent}
                                                        className=" border  text-black  rounded px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="First" className="text-[#000]  text-[18px]">Last Name</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        placeholder="Your Name"
                                                        name="lastName"
                                                        onChange={handleChangeEvent}
                                                        className=" border  text-black  rounded px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="text-[#000]  text-[18px]">Email</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        onChange={handleChangeEvent}
                                                        placeholder="Enter your email"
                                                        className=" border  text-black   rounded px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="text-[#000]  text-[18px]">Phone</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        placeholder="+91"
                                                        name="phone"
                                                        onChange={handleChangeEvent}
                                                        className=" border text-black   rounded px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label htmlFor="name" className="text-[#000]  text-[18px]">Message</label>
                                                <div className="pt-2">
                                                <input
                                                        type="text"
                                                        id="company"
                                                        placeholder="company"
                                                        name="phone"
                                                        onChange={handleChangeEvent}
                                                        className=" border text-black   rounded px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label htmlFor="name" className="text-[#000]  text-[18px]">Message</label>
                                                <div className="pt-2">
                                                    <textarea
                                                        id="message"
                                                        placeholder="Your Message"
                                                        name="message"
                                                        onChange={handleChangeEvent}
                                                        rows={2}
                                                        className="border  text-black  rounded px-4 py-4 focus:outline-none w-full"
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label htmlFor="name" className="text-[#000]  text-[18px]">Upload File</label>
                                                <div className="pt-2">
                                                <input
                                                        type="file"
                                                        id="company"
                                                        placeholder="upload file"
                                                        name="file"
                                                        onChange={handleChangeEvent}
                                                        className=" border text-black rounded w-full"
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-md-12 mb-4 pt-4">
                                                <button
                                                    type="submit" onClick={() => { SubmitForm() }}
                                                    disabled={loading} className="border  hover:bg-[#000] text-[#000] hover:text-[#fff]  py-2 px-6 rounded w-full transition-all duration-300"
                                                >
                                                    {loading ? (
                                                        <div className="spinner-border text-light" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    ) : (
                                                        "Submit"
                                                    )}
                                                </button>


                                            </div>

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
                <div className="h-96 ">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.150841398175!2d77.1125!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0353b1f3cdff%3A0x872d4ecb51638d6f!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1694431696578!5m2!1sen!2sus"
                                    allowFullScreen // Pass as a boolean without any value
                                    loading="lazy"
                                ></iframe>

                            </div>

                </div>
            </section>
           







     <div className='pt-4'>
     <Footer />
     </div>






        </>
    );
}
