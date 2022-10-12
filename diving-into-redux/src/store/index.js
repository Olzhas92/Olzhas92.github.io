// const redux = require("redux");
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

export default store;
