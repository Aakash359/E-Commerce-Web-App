import { createSlice } from "@reduxjs/toolkit";

const ProductListReducer = createSlice({
  name: "productList",
  initialState: {
    productArray: [],
  },
  reducers: {
    getProductSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { getProductSlice } = ProductListReducer.actions;

export default ProductListReducer.reducer;
