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
      {/* <div className="w-10 md:w-14 lg:w-20 text-center mx-auto">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="m3.378 20c-.76 0-1.378-.608-1.378-1.355 0-.531.315-1.018.843-1.302 1.212-.645 2.614-2.735 2.983-4.286-2.38-.538-3.8-2.394-3.8-4.564 0-2.169 1.859-4.493 4.627-4.493 3.501 0 5.096 2.882 5.096 5.561 0 5.742-6.32 10.439-8.371 10.439zm10.251 0c-.76 0-1.378-.608-1.378-1.355 0-.531.315-1.018.843-1.302 1.212-.645 2.614-2.735 2.983-4.286-2.38-.538-3.8-2.394-3.8-4.564 0-2.169 1.859-4.493 4.627-4.493 3.501 0 5.096 2.882 5.096 5.561 0 5.742-6.32 10.439-8.371 10.439zm-6.21-8.428c.112 3-1.984 5.754-3.649 6.966 1.911-.782 6.479-4.857 6.479-8.977 0-1.869-.942-4.051-3.596-4.051-1.871 0-3.127 1.542-3.127 2.983 0 1.453.862 3.166 3.893 3.079zm10.251 0c.112 3-1.984 5.754-3.649 6.966 1.911-.782 6.479-4.857 6.479-8.977 0-1.869-.942-4.051-3.596-4.051-1.871 0-3.127 1.542-3.127 2.983 0 1.453.862 3.166 3.893 3.079z"
            fill-rule="nonzero"
          />
        </svg>
      </div> */}
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
