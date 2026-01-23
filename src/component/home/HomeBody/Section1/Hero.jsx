import React from "react";
import "./Hero.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="hero-main">
      <section className="hero">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="hero-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-container">
              <div className="left-hero">
                <h1>
                  Meet with 80+ <br /> Universities at the
                  <span>
                    <br />
                    World Education Fair
                  </span>
                  <br />
                  In Your City!
                </h1>
                <p>
                  Meet representatives from top universities from UK USA
                  Australia
                  <br /> New Zealand Singapore...
                </p>
              </div>

              <div className="right-hero">
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-container">
              <div className="left-hero">
                <h1>
                  Get Started with a Free <br />
                  <span>Instant Virtual </span>
                  Meet <br /> with Edwise Experts.
                </h1>
                <p>
                  Turn your study abroad aspirations into reality through a{" "}
                  <br />
                  personalized virtual interaction with our experts.
                </p>
              </div>

              <div className="right-hero">
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="hero-container">
              <div className="left-hero">
                <h1>
                  Dream, Discover & <br /> Conquer with
                  <span> Edwise</span>
                  <br />
                  Your Study Abroad <br /> Partner
                </h1>
                <p>
                  Ready to start your overseas education journey? Reach out to
                  one <br /> of Edwise’s expert country counselors today!
                </p>
              </div>

              <div className="right-hero">
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
