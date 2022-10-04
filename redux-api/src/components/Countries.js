import React from "react";
import { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("No data available");
      }
      const data = await response.json();
      setCountries(data);
      console.log("countries", data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <React.Fragment>
      <h2>Countries</h2>
      {countries.map((country) => (
        <div key={country.cca2}>
          <h3>Country: {country.name.common}</h3>
          <h4>Capital: {country.capital}</h4>
          <h4>Flag</h4>
          <img src={country.flags.png} alt="Redux-Toolkit-Api" />
          <hr />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Countries;
