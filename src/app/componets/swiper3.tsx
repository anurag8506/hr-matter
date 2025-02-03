"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct way to import Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';

const AutoSwiper = () => {
  const items = [
    { text: "SPECIAL KUDOS", subtext:'16', imgUrl: "/assets/Vector (7).png" },
    { text: "BRANDING",  subtext:'2',imgUrl: "/assets/Vector (7).png" },
    { text: "SITE OF THE DAY",  subtext:'3', imgUrl: "/assets/3a.png" },
    { text: "XD",   subtext:'16',imgUrl: "/assets/aaa.png" },
    { text: "MOBILE EXCELLENCE",  subtext:'2', imgUrl: "/assets/Vector (7).png" },
    { text: "BEST UI",  subtext:'1', imgUrl: "/assets/3a.png" },
    { text: "SPECIAL KUDOS",  subtext:'16', imgUrl: "/assets/Vector (7).png" },
    { text: "BEST UI",  subtext:'1', imgUrl: "/assets/3a.png" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000, // 4-second auto-slide
        disableOnInteraction: false, // Keep autoplay active after interaction
      }}
      loop={true} // Enable infinite scrolling
      spaceBetween={20} // Add space between slides
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, // Show 2 slides on small screens
        768: { slidesPerView: 4, spaceBetween: 15 }, // Show 4 slides on tablets
        1024: { slidesPerView: 5, spaceBetween: 15 }, // Show 6 slides on larger screens
      }}
      className="w-full text-green-500 text-lg flex items-center"
    >
      {items.map((item, index) => (
   <SwiperSlide key={index} className="flex flex-col items-center">
   <div className="d-flex align-items-center gap-3">
     <div>
       <span className="text-[30px] font-[cd-b] text-[#fff]">{item.subtext}</span>
     </div>
     <div>
       <Image
         src={item.imgUrl}
         className="object-contain mb-2"
         width={50}
         height={50}
         alt="Image"
       />
       <span className="mx-2 text-[#9C9C9C] font-[cd-m] text-[18px]">{item.text}</span>
     </div>
     <svg
     width="10"
     height="14"
     viewBox="0 0 10 14"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
   >
     <path
       d="M3.58599 0.489941H4.70599L1.33199 13.0899H0.23999L3.58599 0.489941ZM8.05669 0.489941H9.17669L5.80269 13.0899H4.71069L8.05669 0.489941Z"
       fill="#77FB38"
     />
   </svg>
   </div>
 
 </SwiperSlide>
 
      ))}
    </Swiper>
  );
};

export default AutoSwiper;
