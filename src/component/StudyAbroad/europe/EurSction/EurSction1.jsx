import React from "react";
import "./EurSection.css";
import Country from "../../../../jsonFiles/EuropeCountry.json";
import "../../Australia/AuSection/AuSection1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Europe from "../../../../jsonFiles/UniversityList/Europian.json";
import EuCourse from "./EuCourse/EuCourse";
import EuropeTabs from "./AdditionalInfo/EuropeTabs";
const EurSction1 = () => {
  return (
    <>
      {/* Europe hero section */}
      {Country.map((section, index) => (
        <div className="Eu-section" key={index}>
          <section className="Eu-country-hero">
            <div className="Eu-container">
              <h1>{section.name}</h1>
            </div>
          </section>
        </div>
      ))}

      {/* Europe Overview Section */}
      {Country.map((section, index) => {
        return (
          <div className="Au-overview" key={index}>
            <div className="Au-overview-container">
              <div className="Au-left-overview">
                <img src={section.image} alt={section.name} />
              </div>
              <div className="Au-right-overview">
                <h1 className="Au-right-overview-h1">
                  Overview of{" "}
                  <span className="Au-right-overview-h1-span">
                    {section.name}
                  </span>
                </h1>
                <p>{section.overview}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Europe- Why Study in Europe Section */}
      {Country.map((section, index) => {
        return (
          <div className="Au-why-study" key={index}>
            <div className="Au-why-study-container">
              <div className="Au-why-study-text">
                <h1 className="Au-why-study-h1">
                  Why Study in{" "}
                  <span className="Au-why-study-h1-span">{section.name} ?</span>
                </h1>
                <div className="Au-why-study-cards">
                  {section.whyStudyInEurope.map((item) => (
                    <div className="Au-why-study-card" key={item.id}>
                      <div className="Au-why-study-icon">{item.icon}</div>
                      <h3 className="Au-why-study-card-h3">{item.title}</h3>
                      <p className="Au-why-study-card-p">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <section className="uni-swiper-section">
        <h2 className="uni-h1">
          Explore <span className="uni-h1-span">Top Universities</span> In
          Europe
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
          {Europe.map((uni, index) => (
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

      <EuCourse />
      <EuropeTabs />
    </>
  );
};

export default EurSction1;
