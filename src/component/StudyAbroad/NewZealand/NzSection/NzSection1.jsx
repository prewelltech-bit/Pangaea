import React from "react";
import Country from "../../../../jsonFiles/NewZealandCountry.json";
import "./NzSection1.css";
import NzUniversity from "../../../../jsonFiles/UniversityList/NewZealand.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NzCourse from "./NzCourse/NzCourse";
import NzTab from "./NzAdditionalInfo/NzTab";


const NzSection1 = () => {
  return (
    <>
      {/* UK hero section */}
      {Country.map((section, index) => (
        <div className="Nz-section" key={index}>
          <section className="Nz-country-hero">
            <div className="Nz-container">
              <h1>{section.name}</h1>
              {/* <p>{section.overview}</p> */}
            </div>
          </section>
        </div>
      ))}

      {/* UK Overview Section */}
      {Country.map((section, index) => {
        return (
          <div className="Nz-overview" key={index}>
            <div className="Nz-overview-container">
              <div className="Nz-left-overview">
                <img src={section.image} alt={section.name} />
              </div>
              <div className="Nz-right-overview">
                <h1 className="Nz-right-overview-h1">
                  Overview of{" "}
                  <span className="Nz-right-overview-h1-span">
                    {section.name}
                  </span>
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
          <div className="Nz-why-study" key={index}>
            <div className="Nz-why-study-container">
              <div className="Nz-why-study-text">
                <h1 className="Nz-why-study-h1">
                  Why Study in{" "}
                  <span className="Nz-why-study-h1-span">{section.name} ?</span>
                </h1>
                <div className="Nz-why-study-cards">
                  {section.whyStudyInNewZealand.map((item) => (
                    <div className="Nz-why-study-card" key={item.id}>
                      <div className="Nz-why-study-icon">{item.icon}</div>
                      <h3 className="Nz-why-study-card-h3">{item.title}</h3>
                      <p className="Nz-why-study-card-p">{item.description}</p>
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
        <h2 className="Au-why-study-h1">
          Explore <span className="uni-h1-span">Top Universities</span> In New Zealand
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
          {NzUniversity.map((uni, index) => (
            <SwiperSlide key={index}>
              <div className="uni-card">
                <img src={uni.images} alt={uni.name} className="uni-card-img" />
                <div className="uni-card-body">
                  <h3>{uni.name}</h3>
                  <p>{uni.country}</p>

                  <div className="uni-meta">
                    <span>🎓 {uni.type}</span>
                    <span>💰 {uni.fees}</span>
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


      <NzCourse/>
      <NzTab />
      
    </>
  );
};

export default NzSection1;
