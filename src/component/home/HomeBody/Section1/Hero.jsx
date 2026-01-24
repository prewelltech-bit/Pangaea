import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from "../../../../hooks/useRevealAnimation";
import "./Hero.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const { ref, isInView } = useRevealAnimation(0.3);

  return (
    <motion.div 
      className="hero-main"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
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
            <motion.div 
              className="hero-container"
              variants={getDirectionVariants('up')}
            >
              <motion.div className="left-hero" variants={getDirectionVariants('left', 50)}>
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
              </motion.div>

              <motion.div className="right-hero" variants={getDirectionVariants('right', 50)}>
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <motion.div 
              className="hero-container"
              variants={getDirectionVariants('up')}
            >
              <motion.div className="left-hero" variants={getDirectionVariants('left', 50)}>
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
              </motion.div>

              <motion.div className="right-hero" variants={getDirectionVariants('right', 50)}>
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <motion.div 
              className="hero-container"
              variants={getDirectionVariants('up')}
            >
              <motion.div className="left-hero" variants={getDirectionVariants('left', 50)}>
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
              </motion.div>

              <motion.div className="right-hero" variants={getDirectionVariants('right', 50)}>
                <img src="/public/assets/img/hero.jpg" alt="logo" />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section>
    </motion.div>
  );
};

export default Hero;
