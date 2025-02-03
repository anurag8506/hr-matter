import Image from "next/image";

const AutoSwiper = () => {
  const items = [

    { imgUrl: "/assets/david-lloyd-logo-trimmed-400x157.png" },
    { imgUrl: "/assets/OIP-400x250.jpg" },


    { imgUrl: "/assets/rsm-logo-trimmed-400x170.png" },
    { imgUrl: "/assets/secret-escapes-logo-trimmed-400x242.png" },
    
    { imgUrl: "/assets/david-lloyd-logo-trimmed-400x157.png" },
    { imgUrl: "/assets/OIP-400x250.jpg" },


    { imgUrl: "/assets/rsm-logo-trimmed-400x170.png" },
    { imgUrl: "/assets/secret-escapes-logo-trimmed-400x242.png" },

    
    { imgUrl: "/assets/david-lloyd-logo-trimmed-400x157.png" },
    { imgUrl: "/assets/OIP-400x250.jpg" },


    { imgUrl: "/assets/rsm-logo-trimmed-400x170.png" },
    { imgUrl: "/assets/secret-escapes-logo-trimmed-400x242.png" },
   
    { imgUrl: "/assets/david-lloyd-logo-trimmed-400x157.png" },
    { imgUrl: "/assets/OIP-400x250.jpg" },


    { imgUrl: "/assets/rsm-logo-trimmed-400x170.png" },
    { imgUrl: "/assets/secret-escapes-logo-trimmed-400x242.png" },

  ];

  return (
    <div className="relative overflow-hidden bg-transparent py-4">
      {/* <div className="flex animate-marquee">

        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center  min-w-[200px]"
          >
            <Image
              src={item.imgUrl}
              alt="Image"
              width={1080}
              height={1080}
              className="object-contain sm:w-[120px] w-[30px] "
              priority
            />

          </div>
        ))}
      </div> */}
   
      <section className="bg-[#fff] overflow-hidden">
        <div className="w-[100vw]"><div className="flex justify-start items-center marquee-anim w-[400vw]">
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center  sm:min-w-[300px] min-w-[200px]"
          >
            <Image
              src={item.imgUrl}
              alt="Image"
              width={1080}
              height={1080}
              className="object-contain sm:w-[160px] w-[120px]   "
              priority
            />
          </div>
        ))}
   </div>        
    </div>
          </section>
   
   
    </div>
  );
};

export default AutoSwiper;
