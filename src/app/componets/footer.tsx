
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>


            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0 sm:py-[50px] py-[30px]">
                    <div className="row pt-[90px]  ">
                        <div className="col-md-3 pb-4">
                            <div className="col-md-8">
                                <Link href="/">
                                    <Image
                                        src="/assets/Asset 1.svg"
                                        className="p-0 m-0 w-[200px]"
                                        width={1080}
                                        height={1080}
                                        alt="Image"
                                    />
                                </Link>

                                <p className="text-[#C0C0C0] text-[16px] pt-2 ">Welcome to Strix Productions – where creativity meets strategy to deliver outstanding digital solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-3 pb-4">
                            <div className="flex sm:justify-center">
                                <div >
                                    <p className="text-[18px] text-[#fff] font-[cd-r]">Know more about my portfolio </p>
                                    <Link href='https://strixproductions.myportfolio.com/' className="no-underline">
                                        <p className="text-[18px] text-[#EA9A4A] font-[cd-r] d-flex align-items-center gap-2">
                                            Click Here<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.799805 12.99H8.7998M4.7998 0.98999V10.3233M4.7998 10.3233L8.1331 6.98999M4.7998 10.3233L1.46647 6.98999" stroke="#EA9A4A" strokeLinecap="square" />
                                            </svg>

                                        </p>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-2 pb-4">
                            <div>

                                <p className="text-[18px] text-[#fff] font-[cd-m]">   Quick Link</p>
                                <Link href='/' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                        Home
                                    </p>
                                </Link>
                                <Link href='/project' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                        Project
                                    </p>
                                </Link>
                                <Link href='/about' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                        About Us
                                    </p>
                                </Link>
                                <Link href='/contact' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                       Contact Us
                                    </p>
                                </Link>


                            </div>

                        </div>
                        <div className="col-md-2 pb-4">
                            <div>

                                <p className="text-[18px] text-[#fff] font-[cd-m]">Services</p>
                                <Link href='/' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    Media Productivity
                                    </p>
                                </Link>
                                <Link href='/project' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    UI/UX Design
                                    </p>
                                </Link>
                                <Link href='/about' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    Branding & Identity
                                    </p>
                                </Link>
                                <Link href='/contact' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    Creative Designs
                                    </p>
                                </Link>


                            </div>

                        </div>
                        <div className="col-md-2 pb-4">
                            <div>

                                <p className="text-[18px] text-[#000] font-[cd-m]"> .k</p>
                                <Link href='/' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    Social Media Management
                                    </p>
                                </Link>
                                <Link href='/project' className="no-underline">
                                    <p className="text-[16px] text-[#C5C5C5]  font-[cd-r] ">
                                    Digital Marketing
                                    </p>
                                </Link>
                            </div>
                        </div>
                       

                    </div>
                    <div className="row">
                    <div className="col-md-12">
                            <div className="border border-[1px] border[#fff]"></div>
                            <p className="text-[#fff] text-[16px] font-[cd-m] text-center pt-4">
                                STRIX PRODUCTION © 2025-2026 ALL RIGHTS RESERVED</p>
                        </div>
                    </div>

                </div>
            </section>









        </>
    );
}
