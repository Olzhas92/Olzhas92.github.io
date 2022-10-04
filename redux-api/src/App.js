import React, { useEffect, useState } from "react";
// import Countries from "./components/Countries";
// import { countries } from "./ListOfCountries";
import { useSelector } from "react-redux";

const App = () => {
  const countries = useSelector((state) => state.countries);

  const [myCountries, setMyCountries] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");

  useEffect(() => {
    setMyCountries(countries);
  }, [countries]);

  const inputHandler = (event) => {
    event.preventDefault();
    setEnteredInput(event.target.value);
    console.log(enteredInput);
  };

  return (
    <React.Fragment>
      <h1>Redux-Toolkit-API</h1>
      {/* <Countries /> */}
      <input
        type="text"
        value={enteredInput}
        onChange={inputHandler}
        placeholder="Enter country name..."
      />
      {/* startsWith, includes */}
      {myCountries
        .filter((country) =>
          country.name.common
            .toLowerCase()
            .startsWith(enteredInput.toLowerCase())
        )
        .map((country) => (
          <div
            key={country.cca2}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>Country: {country.name.common}</h3>
            <h4>Capital: {country.capital}</h4>
            <h4>Flag</h4>
            <img src={country.flags.png} alt="Redux-Toolkit-Api" />
          </div>
        ))}
    </React.Fragment>
  );
};

export default App;
