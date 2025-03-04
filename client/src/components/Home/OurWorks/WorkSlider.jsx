import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../../../assets/images/carousels/carousel-1.png";
import carousel2 from "../../../assets/images/carousels/carousel-2.png";
import carousel3 from "../../../assets/images/carousels/carousel-3.png";
import carousel4 from "../../../assets/images/carousels/carousel-4.png";
import carousel5 from "../../../assets/images/carousels/carousel-5.png";
import "./WorkSlider.css";

const WorkSlider = () => {
  const works = [
    { id: 1, image: carousel1 },
    { id: 2, image: carousel2 },
    { id: 3, image: carousel3 },
    { id: 4, image: carousel4 },
    { id: 5, image: carousel5 },
  ];

  return (
    <div className="container mx-auto px-4">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {works.map((work) => (
          <SwiperSlide key={work.id}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={work.image}
                alt={`Work sample ${work.id}`}
                className="h-80 w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
