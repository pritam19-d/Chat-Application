import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./slicers/apiSlice.js";
// import authSliceReducer from "./slicers/authSlice.js";

const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authSliceReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
  //   (apiSlice.middleware),
  // devTools: true
})

export default store