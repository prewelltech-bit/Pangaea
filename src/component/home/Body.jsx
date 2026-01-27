import React from 'react'
import Hero from './HomeBody/Section1/Hero';
import Welcome from './HomeBody/Section2/Welcome'
import SuccessStories from './HomeBody/Section3/SuccessStories';
import Demo from './HomeBody/Section4/Demo'
import OurPartners from './HomeBody/Section5/OurPartners';
import DreamDestination from './HomeBody/Section6/DreamDestination';

const Body = () => {
  return (
    <>
            <Hero/>
            <Welcome />
            <SuccessStories />
            <OurPartners />
            <Demo />
            <DreamDestination/>
    </>
  )
}

export default Body;