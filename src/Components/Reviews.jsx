import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Reviews.css";

const reviews = [
  "/1 (1).png",
  "/2 (1).png",
  "/3 (1).png",
  "/4 (1).png",
  "/5 (1).png",
  "/6 (1).png",
  "/7 (1).png",
  "/8 (1).png",
  "/9 (2).png",
  "/11 (1).png",
];

const Reviews = () => {
  return (
    <section className="review-section">
      <h2>WHAT CLIENTS SAY</h2>

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <img src={review} alt={`Review ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;