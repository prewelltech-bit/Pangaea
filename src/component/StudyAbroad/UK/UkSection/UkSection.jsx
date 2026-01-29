import React from 'react'
import "./UkSection.css";
import Country from "../../../../jsonFiles/Country.json"
import { useParams } from 'react-router-dom';

const UkSection = () => {
  const { name } = useParams();
    const country = Country.countries.find(
    c => c.name.toLowerCase() === name.toLowerCase()
  );
  return (
    <>
        <div className="uk-sections">
            {country.countries.map((ukData, index) => (
                <div className="uk-section-card" key={index}>
                    <h2 className="uk-section-h2">{ukData.name}</h2>
                    <p className="uk-section-p">{ukData.overview}</p>
                    <h3 className="uk-section-h3">Study Options:</h3>
                </div>
            ))}
        </div>
    </>
  )
}

export default UkSection
