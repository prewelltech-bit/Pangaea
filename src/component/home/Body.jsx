import React from 'react'
import Hero from './HomeBody/Section1/Hero';
import Demo from './HomeBody/Section4/demo';
import SuccessStories from './HomeBody/Section3/SuccessStories';
import Welcome from './HomeBody/Section2/Welcome';

const Body = () => {
  return (
    <>
            <Hero/>
            <Welcome/>
            <SuccessStories/>
            <Demo/>
    </>
  )
}

export default Body;