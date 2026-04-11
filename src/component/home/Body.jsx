import React from "react";
import Hero from "./HomeBody/Section1/Hero";
import Welcome from "./HomeBody/Section2/Welcome";
// import SuccessStories from "./HomeBody/Section3/SuccessStories";
// import Demo from "./HomeBody/Section4/Demo";
import OurPartners from "./HomeBody/Section5/OurPartners";
import DreamDestination from "./HomeBody/Section6/DreamDestination";
import PopularStudy from "./HomeBody/Section7/PopularStudy";
// import FreeCounselling from "../freecounselling/FreeCounselling";
import TrendingCourses from "../TrendingCourses/TrendingCourses";
import Blogs from "../Blogs/Blogs";
// import CounselingDemo from "../freecounselling/CounselingDemo";
import SlotSelector from "../freecounselling/SlotSelecter";
import BookingForm from "../freecounselling/Booking";
import "../freecounselling/FreeCounselling.css";
import FormCounsalting from "../freecounselling/FormCounsalting";
const Body = () => {

  return (
    <>
      <Hero />
      <Welcome />
      {/* <SuccessStories /> */}
      <OurPartners />

      {/* event section  */}
      {/* <Demo /> */}

      <DreamDestination />
      <div id="free-counselling" className="counselling-booking">
        {/* <SlotSelector
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <BookingForm selectedSlot={selectedSlot} selectedDate={selectedDate} /> */}
        <FormCounsalting />
      </div>
      {/* <CounselingDemo /> */}
      {/* <FreeCounselling /> */}
      <PopularStudy />
      <TrendingCourses />
      <Blogs isHome={true} />
    </>
  );
};

export default Body;
