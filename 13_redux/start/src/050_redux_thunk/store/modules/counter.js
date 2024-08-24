import { createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter";
const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
});

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const response = await asyncCount(payload);
    // addはactionCreator
    dispatch(add(response.data));
  };
};

const { add, minus } = counter.actions;

export { add, minus, addAsync };
export default counter.reducer;
