import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BiSolidQuoteRight } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtons } from "../components";

const Testimonial = () => {
  const testimonial = [
    {
      comment:
        "ENDISSE DO IN POTENTI NULLAM SE DONNEI TORTORE PURUS VITAE FAUCIBUS ODIO UISON MODI",
      name: "Sherifdeen Ishola",
      role: "Web Developer",
    },
    {
      comment:
        "ENDISSE DO IN POTENTI NULLAM SE DONNEI TORTORE PURUS VITAE FAUCIBUS ODIO UISON MODI",
      name: "Rhia Dunlap",
      role: "POS.com",
    },
    {
      comment:
        "ENDISSE DO IN POTENTI NULLAM SE DONNEI TORTORE PURUS VITAE FAUCIBUS ODIO UISON MODI",
      name: "Rhia Dunlap",
      role: "POS.com",
    },
  ];

  const pagination = {
    clickable: true,
    // dynamicBullets: true,
  };

  return (
    <div className="testimonial w-full container mx-auto px-5 md:px-0 lg:px-8 py-28 flex flex-col gap-10">
      <div className="mx-auto">
        <BiSolidQuoteRight size={50} />
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={pagination}
          className="w-full"
        >
          {testimonial.map((t, i) => (
            <SwiperSlide key={t.name + i} className="py-2 text-center">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] font-grotesk">
                {t.comment}
              </h4>
              <p className="text-base font-nunito font-[500] mt-8">
                By {t.name}, {t.role}
              </p>
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
