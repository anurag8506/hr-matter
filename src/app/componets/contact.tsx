"use client"
import { toast } from "react-hot-toast";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "react-hot-toast";
export default function Home() {

    const [retailer, setRetailer] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false); // Loading state

    const SubmitForm = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("email", retailer.email);
        formData.append("name", retailer.name);
        formData.append("subject", retailer.subject);
        formData.append("message", retailer.message);

        fetch(process.env.API_URL + "subject/", {
            method: "POST",
            body: formData, // Add form data to the request body
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

<Toaster position="top-center" reverseOrder={false}  />
            <section className="flex items-center justify-center bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] pb-4 py-[30px] sm:pt-[50px] pt-[20px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-end sm:pt-[40px] sm:pb-[40px]"  >
                        <div className="col-md-6 mb-4" 
                          >
                            <div className="col-md-10">
                                <p className="sm:text-[45px] text-[30px] sm:leading-[45px] leading-[33px] font-[cd-se] text-[#fff] font-[cd-b] p-0 m-0 ">Get your<span className="text-[#EA9A4A]"> project</span>
                                    estimate for <span className="text-[#EA9A4A]">free</span></p>

                            </div>
                        </div>
                        <div className="col-md-6 mb-4"
                          >


                            <div className="space-y-6">

                                <div className="relative">
                                    <div className="row align-items-center">
                                        <div className="d-flex justify-between align-center">
                                            <p className="font-[cd-r] text-[18px] text-[#fff] m-0 p-0 ">DROP A LINE </p>
                                            <div className="d-flex justify-end">
                                                <p className="font-[cd-r] text-[18px] text-[#000] d-flex  gap-2 m-0 p-0 ">COPY EMAIL
                                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3 0H5.30005C5.10114 0 4.91037 0.0790201 4.76972 0.21967C4.62907 0.36032 4.55005 0.55109 4.55005 0.75V4.5H0.800049C0.601139 4.5 0.410369 4.57902 0.269719 4.71967C0.129069 4.86032 0.0500488 5.05109 0.0500488 5.25V17.25C0.0500488 17.4489 0.129069 17.6397 0.269719 17.7803C0.410369 17.921 0.601139 18 0.800049 18H12.8C12.9989 18 13.1897 17.921 13.3303 17.7803C13.471 17.6397 13.55 17.4489 13.55 17.25V13.5H17.3C17.4989 13.5 17.6897 13.421 17.8303 13.2803C17.971 13.1397 18.05 12.9489 18.05 12.75V0.75C18.05 0.55109 17.971 0.36032 17.8303 0.21967C17.6897 0.0790201 17.4989 0 17.3 0ZM12.05 16.5H1.55005V6H12.05V16.5ZM16.55 12H13.55V5.25C13.55 5.05109 13.471 4.86032 13.3303 4.71967C13.1897 4.57902 12.9989 4.5 12.8 4.5H6.05005V1.5H16.55V12Z" fill="black" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-[cd-m] sm:text-[35px] text-[20px] text-[#EA9A4A] text-end">strix.production@yahoo.com</p>
                                        <div className="col-md-12 mb-4">

                                            <label className="block text-sm font-[cd-m] text-white mb-3  pt-4">
                                                subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                onChange={handleChangeEvent}

                                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r]"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <label className="block text-sm font-[cd-m] text-white mb-3  pt-4">
                                                NAME *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={handleChangeEvent}

                                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r]"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <label className="block text-sm font-[cd-m] text-white mb-3 pt-4 ">
                                                EMAIL *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChangeEvent}

                                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r] "
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>


                                <div className="relative">
                                    <label className="block text-sm font-[cd-m] text-white mb-3 ">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        onChange={handleChangeEvent}

                                        className="w-full bg-transparent  text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r]"
                                        rows={4}
                                    ></textarea>

                                </div>

                              
                                
                                <button
                                    onClick={SubmitForm}
                                    type="submit"
                                    className="w-full bg-[#000] border border-[#fff] text-white py-2 font-semibold hover:bg-[#EA9A4A] hover:border hover:border-[#EA9A4A] transition font-[cd-m]"
                                    disabled={loading} // Disable the button while loading
                                >
                                    {loading ? (
                                        <div className="spinner-border text-light" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        "HIT US UP"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>








        </>
    );
}
