import portfolio1 from "@assets/images/portfolio/portfolio-1.png";
import portfolio2 from "@assets/images/portfolio/portfolio-2.png";
import portfolio3 from "@assets/images/portfolio/portfolio-3.png";
import portfolio4 from "@assets/images/portfolio/portfolio-4.png";
import portfolio5 from "@assets/images/portfolio/portfolio-5.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PortfolioCarousel.css";

const PortfolioCarousel = () => {
  const works = [
    { id: 1, image: portfolio1 },
    { id: 2, image: portfolio2 },
    { id: 3, image: portfolio3 },
    { id: 4, image: portfolio4 },
    { id: 5, image: portfolio5 },
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

export default PortfolioCarousel;
