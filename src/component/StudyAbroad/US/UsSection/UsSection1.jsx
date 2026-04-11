import React from "react";
import "./UsSection1.css";
import Country from "../../../../jsonFiles/UsCountry.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import USAUniversity from "../../../../jsonFiles/UniversityList/USA.json";
import UsCourse from "./UsCourse/UsCourse";
import UsTabs from "./AdditionalInfo/UsTabs";
const UsSection1 = () => {
  return (
    <>
      {/* Usa hero section */}
      {Country.map((section, index) => (
        <div className="Us-section" key={index}>
          <section className="Us-country-hero">
            <div className="Us-container">
              <h1>{section.name}</h1>
            </div>
          </section>
        </div>
      ))}

      {/* Usa Overview Section */}
      {Country.map((section, index) => {
        return (
          <div className="Us-overview" key={index}>
            <div className="Us-overview-container">
              <div className="Us-left-overview">
                <img src={section.image} alt={section.name} />
              </div>
              <div className="Us-right-overview">
                <h1 className="Us-right-overview-h1">
                  Overview of{" "}
                  <span className="Us-right-overview-h1-span">
                    {section.name}
                  </span>
                </h1>
                <p>{section.overview}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Usa- Why Study in Usa Section */}
      {Country.map((section, index) => {
        return (
          <div className="Us-why-study" key={index}>
            <div className="Us-why-study-container">
              <div className="Us-why-study-text">
                <h1 className="Us-why-study-h1">
                  Why Study in{" "}
                  <span className="Us-why-study-h1-span">{section.name} ?</span>
                </h1>
                <div className="Us-why-study-cards">
                  {section.whyStudyInUSA.map((item) => (
                    <div className="Us-why-study-card" key={item.id}>
                      <div className="Us-why-study-icon">{item.icon}</div>
                      <h3 className="Us-why-study-card-h3">{item.title}</h3>
                      <p className="Us-why-study-card-p">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Usa Universities Section */}
      <section className="uni-swiper-section">
        <h2 className="uni-h1">
          Explore <span className="uni-h1-span">Top Universities</span> In
            USA
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {USAUniversity.map((uni, index) => (
            <SwiperSlide key={index}>
              <div className="uni-card">
                {/* Use first image if images is an array and normalize public path */}
                <img src={uni.images} alt={uni.name} className="uni-card-img" />
                <div className="uni-card-body">
                  <h3>{uni.name}</h3>
                  <p>{uni.country}</p>

                  <div className="uni-meta">
                    <span>
                      🎓{" "}
                      {Array.isArray(uni.type_of_course)
                        ? uni.type_of_course.join(", ")
                        : uni.type_of_course}
                    </span>
                    <span>💰 {uni.fees_approx}</span>
                    <span>🗼 {uni.city}</span>

                    {/* <span>🏆 Rank #{uni.ranking}</span> */}
                  </div>

                  <a href={uni.link}>
                    <button className="apply-btn-uni">View Details</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <UsCourse />
      <UsTabs />
    </>
  );
};

export default UsSection1;
