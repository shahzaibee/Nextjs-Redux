import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  name: string;
  category: string;
  qty: number;
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart(state, { payload }) {
      const obj = state.find((val) => val.name == payload.name);
      if (obj) {
        ++obj.qty;
        const newState = state.filter((val) => val.name !== obj.name);
        state = [...newState, obj];
        return;
      }

      state.push(payload);
    },
    deletecart(state, action) {
      return state.filter((val) => val.name !== action.payload);
    },
  },
});

export const { addcart, deletecart } = cartSlice.actions;

export default cartSlice.reducer;