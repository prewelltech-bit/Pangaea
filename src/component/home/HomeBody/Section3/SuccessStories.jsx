import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from "../../../../hooks/useRevealAnimation";

import storiesData from "../../../../jsonFiles/SuccessStories.json";

import "./SuccessStories.css";
import "swiper/css";
import "swiper/css/navigation";

const SuccessStories = () => {
  const { ref, isInView } = useRevealAnimation(0.2);
  const bgColors = ["#daedff", "#dcfce7", "#f3e8ff", "#fff7ed", "#fce7f3"];
  const quoteColors = ["#b3d7ff", "#bbf7d0", "#e9d5ff", "#fed7aa", "#fbcfe8"];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.h1 className="wap" variants={getDirectionVariants('down', 30)}>Success Stories</motion.h1>
    </motion.div>
    <motion.div
      className="page-wrapper"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
      style={{
        background: `linear-gradient(to right, ${bgColors[activeIndex]} 32%, #ffffff 32%)`,
        transition: "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="main-wrapper-inner">
        <div className="custom-nav-wrapper">
          <button ref={prevRef} className="nav-btn">
            ←
          </button>
          <button ref={nextRef} className="nav-btn">
            →
          </button>
        </div>

        <div className="card-container">
          {/* eslint-disable react-hooks/rules-of-hooks */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex % storiesData.length)
            }
            className="mySwiper"
          >
            {storiesData.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="slanted-card">
                  {/* Left Content Side */}
                  <div className="content-part">
                    {/* Animated Quote - Slightly below and closer as requested */}
                    <motion.div
                      key={`quote-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 0.6, scale: 1, x: 0 }}
                      className="large-quote"
                      style={{ color: quoteColors[activeIndex] }}
                    >
                      “
                    </motion.div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`text-${activeIndex}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h2 className="title-text">
                          Great start for <br /> my career.
                        </h2>
                        <p className="story-para">{story.text}</p>

                        <div className="user-meta">
                          <strong className="name-bold">{story.name}</strong>
                          <span className="role-light">{story.role}</span>
                        </div>

                        {/* Premium Animated Stars */}
                        <motion.div
                          className="stars-container"
                          variants={starContainerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              variants={starVariants}
                              className="star-icon"
                            >
                              ★
                            </motion.span>
                          ))}
                          <span className="rating-num">{story.rating}</span>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Image Side */}
                  <div
                    className="image-part"
                    // style={{ backgroundColor: bgColors[activeIndex] }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`img-${activeIndex}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        src={story.img}
                        alt={story.name}
                        className="person-img"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default SuccessStories;
