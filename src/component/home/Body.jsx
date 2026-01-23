import React from 'react'
import Hero from './HomeBody/Section1/Hero';
import SuccessStories from './HomeBody/Section2/SuccessStories';
import Demo from './HomeBody/Section3/demo';
import Welcome from './HomeBody/Section4/Welcome';

const Body = () => {
  return (
    <>
            <Hero/>
            <Welcome />
            <SuccessStories />
            <Demo />
    </>
  )
}

export default Body;