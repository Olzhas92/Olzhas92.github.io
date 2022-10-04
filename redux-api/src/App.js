import React, { useEffect, useState } from "react";
// import Countries from "./components/Countries";
import { countries } from "./ListOfCountries";
import { useSelector } from "react-redux";

const App = () => {
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    console.log("countries", countries);
  }, []);

  const [myCountries, setMyCountries] = useState(countries);
  // const [error, setError] = useState();
  const [enteredInput, setEnteredInput] = useState("");

  // const getCountries = async () => {
  //   try {
  //     const response = await fetch("https://restcountries.com/v3.1/all");
  //     if (!response.ok) {
  //       throw new Error("No data available");
  //     }
  //     const data = await response.json();
  //     setMyCountries(data);
  //     console.log("countries", data);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   getCountries();
  // }, []);

  const inputHandler = (event) => {
    event.preventDefault();
    setEnteredInput(event.target.value);
    console.log(enteredInput);
  };

  return (
    <React.Fragment>
      <h1>Redux-Toolkit-API</h1>
      {/* <Countries /> */}
      <input type="text" value={enteredInput} onChange={inputHandler} />

      {myCountries.map((country) => (
        <div key={country.cca2}>
          <h3>Country: {country.name.common}</h3>
          <h4>Capital: {country.capital}</h4>
          <h4>Flag</h4>
          <img src={country.flags.png} alt="Redux-Toolkit-Api" />
          <hr />
        </div>
      ))}
      {/* {myCountries.filter(
        (item) => item.name.common.includes(enteredInput).map 
      )} */}
    </React.Fragment>
  );
};

export default App;
