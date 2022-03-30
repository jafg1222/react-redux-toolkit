import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "./reducers";


// redux sagas is a middleware that we apply to the store
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware(),
});

export default store;
