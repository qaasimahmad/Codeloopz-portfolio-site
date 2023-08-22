import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const SwiperButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", function () {
      setIsEnd(true);
    });
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="w-full left-0 absolute top-[50%] -translate-y-[50%] flex item-center justify-between z-50">
      <button
        className="text-black text-2xl md:text-3xl lg:text-4xl hover:-translate-x-2 transition-all duration-500"
        onClick={() => swiper.slidePrev()}
      >
        <HiArrowLeft />
      </button>
      <button
        className="text-black text-2xl md:text-3xl lg:text-4xl hover:translate-x-2 transition-all duration-500"
        onClick={() => swiper.slideNext()}
      >
        <HiArrowRight />
      </button>
    </div>
  );
};

export default SwiperButtons;
