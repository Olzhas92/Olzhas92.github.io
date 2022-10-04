import { createSlice } from "@reduxjs/toolkit";
import { countries } from "../ListOfCountries";

const initialState = countries;

const countriesSlice = createSlice({
  name: "countries",
  initialState,
});

export default countriesSlice;
