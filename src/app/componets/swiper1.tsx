"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct way to import Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';


const AutoSwiper = () => {
  const items = [
    { text: "PROTACTIVE", imgUrl: "/assets/Vector.svg" },
    { text: "BRUTAL", imgUrl: "/assets/SV.svg" },
    { text: "PROACTIVE", imgUrl: "/assets/Vector (2).svg" },
    { text: "PROFESSIONAL ", imgUrl: "/assets/SV.svg" },
    { text: "COMPREHENSIVE", imgUrl: "/assets/Vector (2).svg" },

    { text: "REBELLIOUS", imgUrl: "/assets/Vector.svg" },
    { text: "DEDICATED", imgUrl: "/assets/SV.svg" },
    { text: "INNOVATIVE", imgUrl: "/assets/Vector (2).svg" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1000, 
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={20} 
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, 
        768: { slidesPerView: 2, spaceBetween: 10 }, 
        1024: { slidesPerView: 6, spaceBetween: 10 }, 
      }}
      className="w-full text-green-500 text-lg flex items-center"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center">
            <div className='d-flex align-items-center gap-1'>
            <Image
            src={item.imgUrl}
            className="object-contain sm:w-[50px] w-[30px] "
            width={50}
            height={50}
            alt="Image"
          />
          <p className="mx-2 text-[#EA9A4A] font-[cd-m] sm:text-[18px] text-[16px] p-0 m-0">{item.text}</p>
            </div>
     
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoSwiper;
