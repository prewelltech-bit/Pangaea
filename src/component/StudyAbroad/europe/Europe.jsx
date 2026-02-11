import React from 'react'
import EurSction1 from './EurSction/EurSction1'
import CountryFAQ from './FAQS/CountryFAQ'

const Europe = () => {
  return (
    <>
        <EurSction1 />
        <CountryFAQ countryName="Europe" />
    </>
  )
}

export default Europe

