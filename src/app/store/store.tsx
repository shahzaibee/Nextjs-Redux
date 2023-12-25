import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/slices/product";
import cartSlice from "../store/slices/cart";

export const store = configureStore({
  reducer: {
    // define state or data
    productArray: productSlice,
    cartArray: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
