import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import "./OurPartners.css";

import universityLogos from "../../../../jsonFiles/universityLogos.json";

const OurPartners = () => {
  const navigate = useNavigate();

  // Duplicate logos array to ensure there are enough slides for smooth looping
  const extendedLogos = [...universityLogos, ...universityLogos];
  const pairedLogos = [];

  // Group logos into pairs to create 2 rows within each Swiper slide
  for (let i = 0; i < extendedLogos.length; i += 2) {
    pairedLogos.push([
      extendedLogos[i],
      extendedLogos[i + 1]
    ]);
  }

  return (
    <section className="partners">
      <h1 className="partner-h1">Our Top <span className="partner-h1-span">Ranked Partners</span></h1>

      <div className="partners-card">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="partners-swiper"
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {pairedLogos.map((pair, idx) => (
            <SwiperSlide key={`pair-${idx}`}>
              <div className="avatar-col">
                <div className="avatar">
                  <img src={pair[0]} alt={`university-${idx * 2}`} />
                </div>
                {pair[1] && (
                  <div className="avatar">
                    <img src={pair[1]} alt={`university-${idx * 2 + 1}`} />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="view-more-container">
        <button
          className="view-more-btn"
          onClick={() => navigate("/partnered-universities")}
        >
          View More Partners
        </button>
      </div>
    </section>
  );
};

export default OurPartners;
