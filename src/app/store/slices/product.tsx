import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  name: string;
  category: string;
  qty: number;
}

const initialState: ProductState[] = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {},
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;