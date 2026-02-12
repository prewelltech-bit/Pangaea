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
          speed={900}
          autoplay={{
            delay: 3500,
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
                  Meet with 80+ <br />
                  Universities at the
                  <span>
                    <br />
                    World Education Fair
                  </span>
                  <br />
                  In Your City!
                </h1>
                <p>
                  Meet representatives from top universities from UK, USA,
                  <br />
                  Australia, New Zealand, Singapore...
                </p>
              </div>

              <div className="right-hero">
                <img
                  src="/assets/Img/h1.png"
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-container">
              <div className="left-hero">
                <h1>
                  Get Started with a Free <br />
                  <span>Instant Virtual</span>
                  <br /> Meet with Experts
                </h1>
                <p>
                  Turn your study abroad aspirations into reality through a
                  <br />
                  personalized virtual interaction.
                </p>
              </div>

              <div className="right-hero">
                <img
                  src="/assets/Img/h2.png"
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="hero-container">
              <div className="left-hero">
                <h1>
                  Dream, Discover & <br />
                  Conquer with <span>Pangaea</span>
                  <br />
                  Your Study Abroad Partner
                </h1>
                <p>
                  Ready to start your overseas education journey?
                  <br />
                  Talk to our expert counselors today.
                </p>
              </div>

              <div className="right-hero">
                <img
                  src="/assets/Img/h3.png"
                  alt="hero"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
