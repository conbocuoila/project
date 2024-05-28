// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function SubCarousel({ numberOfSlice }) {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={numberOfSlice}
        pagination={true}
        modules={[Pagination]}
        className="subcarousel"
      >
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/image/2024-02-05_62bf88a5-7e7c-4fb8-bc2f-b16ed060615a.jpg/origin"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/image/2024-02-05_d9501cbc-fb79-4bd1-ac6a-f88483083967.jpg/origin"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/image/2024-05-03_ff53320a-f2bb-446d-a249-09b8785ecffe.jpg/origin"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
