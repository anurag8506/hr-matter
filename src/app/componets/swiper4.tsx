"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "I was well briefed by Rosie, both when the role was first introduced to me before I met with the company. She helped me prepare for interviews and provided detailed feedback.",
    author: "Talent Acquisition",
  },
  {
    text: "I was well briefed by Rosie, both when the role was first introduced to me before I met with the company. She helped me prepare for interviews and provided detailed feedback.",
    author: "Compensation Specialist",
  },
  {
    text: "I was well briefed by Rosie, both when the role was first introduced to me before I met with the company. She helped me prepare for interviews and provided detailed feedback",
    author: "HR Manager",
  },
  {
    text: "I was well briefed by Rosie, both when the role was first introduced to me before I met with the company. She helped me prepare for interviews and provided detailed feedback",
    author: "Senior Analyst",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop (3 items)
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet (2 items)
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile (1 item full width)
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-[#285673] p-8 text-white sm:py-[100px] py-[50px]">
      <h2 className="text-center text-[25px] font-[cd-b] mb-6">TESTIMONIALS</h2>
      <div className="mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="p-6 bg-[#2485a1] rounded-lg shadow-md text-center flex flex-col justify-between">
                <p className="font-[cd-m] text-[16px] flex-grow leading-relaxed">
                  “{testimonial.text}”
                </p>
                <h4 className="mt-4 font-[cd-m] text-[16px]">{testimonial.author}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
