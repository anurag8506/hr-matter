import React from "react"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Image from "next/image";

const SliderComponent: React.FC = () => {
  const items = [
    { text: "Video Editing", imgUrl: "/assets/slider.svg" },
    { text: "Photo Editing", imgUrl: "/assets/slider.svg" },
    { text: "Video Editing", imgUrl: "/assets/slider.svg" },
    { text: "Photo Editing", imgUrl: "/assets/slider.svg" },

 
  ];

  const settings = {
    centerMode: true,
    centerPadding: "450px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: React.ReactNode) => <div>{dots}</div>,
    customPaging: () => <span className="dot" />,
  };

  return (
    <section className="overflow-hidden" >
      <div className="slider-container pt-5  ">
      <div className="container-fluid  px-4 ">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="px-2 relative " key={index}>
                 
              <Image
                src={item.imgUrl}
                alt='...'
                width={800}
                height={1080}
                className="rounded-md"
              />
              <h2 className="text-white  top-0   absolute text-[cd-b] text-[30px]">{item.text}</h2>
           
            </div>
          ))}
        </Slider>
      </div>

      </div>
    </section>
  );
};

function SampleNextArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      onClick={onClick}
      style={{ right: "500px" }}
    ></div>
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      onClick={onClick}
      style={{ left: "500px" }}
    ></div>
  );
}

export default SliderComponent;
