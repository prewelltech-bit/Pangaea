import React from "react";
import "./UkSection1.css";
import Country from "../../../../jsonFiles/Uk.json";
import UkUniversity from "../../../../jsonFiles/UniversityList/UK.json";
// import { p } from "framer-motion/client";
// import Swiper from "swiper";
// import { Autoplay, Pagination } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./UniversitySwiper.css";
const UkSection1 = () => {
  return (
    <>
      {/* UK hero section */}
      {Country.map((section, index) => (
        <div className="uk-section" key={index}>
          <section className="country-hero">
            <div className="container">
              <h1>{section.name}</h1>
              {/* <p>{section.overview}</p> */}
            </div>
          </section>
        </div>
      ))}

      {/* UK Overview Section */}
      {Country.map((section, index) => {
        return (
          <div className="uk-overview" key={index}>
            <div className="overview-container">
              <div className="left-overview">
                <img src={section.image} alt={section.name} />
              </div>
              <div className="right-overview">
                <h1 className="right-overview-h1">
                  Overview of{" "}
                  <span className="right-overview-h1-span">{section.name}</span>
                </h1>
                <p>{section.overview}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* UK- Why Study in UK Section */}
      {Country.map((section, index) => {
        return (
          <div className="uk-why-study" key={index}>
            <div className="why-study-container">
              <div className="why-study-text">
                <h1 className="why-study-h1">
                  Why Study in{" "}
                  <span className="why-study-h1-span">{section.name} ?</span>
                </h1>
                <div className="why-study-cards">
                  {section.whyStudyInUk.map((item) => (
                    <div className="why-study-card" key={item.id}>
                      <div className="why-study-icon">{item.icon}</div>
                      <h3 className="why-study-card-h3">{item.title}</h3>
                      <p className="why-study-card-p">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* University Swiper */}
      <section className="uni-swiper-section">
        <h2 className="section-title">
          Top Universities <span>Uk</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {UkUniversity.map((uni, index) => (
            <SwiperSlide key={index}>
              <div className="uni-card">
                <img src={uni.image} alt={uni.name} className="uni-card-img" />
                <div className="uni-card-body">
                  <h3>{uni.name}</h3>
                  <p>{uni.country}</p>

                  <div className="uni-meta">
                    <span>🎓 12{uni.type}</span>
                    <span>💰 {uni.fees}212</span>
                    <span>🗼 {uni.city}</span>

                    {/* <span>🏆 Rank #{uni.ranking}</span> */}
                  </div>

                  <a href={uni.link}>
                    <button className="apply-btn">View Details</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default UkSection1;
