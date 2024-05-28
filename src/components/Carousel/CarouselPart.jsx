// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://cdn1.concung.com/img/adds/2024/05/1716542537-HOME.png"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn1.concung.com/img/adds/2024/05/1716522893-HOME.png"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn1.concung.com/img/adds/2024/05/1716542537-HOME.png"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn1.concung.com/img/adds/2024/05/1716542537-HOME.png"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
