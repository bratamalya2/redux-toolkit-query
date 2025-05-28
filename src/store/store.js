import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./slices/userSlice";
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
});

setupListeners(store.dispatch);
