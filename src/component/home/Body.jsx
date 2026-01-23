import React from 'react'
import Hero from './HomeBody/Section1/Hero';
import SuccesStories from './HomeBody/Section2/SuccesStories';
import Demo from './HomeBody/Section3/demo';
import Welcome from './HomeBody/Section2/Welcome';

const Body = () => {
  return (
    <>
            <Hero/>
            <Welcome/>
            <SuccesStories />
            <Demo/>

    </>
  )
}

export default Body;