import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";
import playerSlice from "../features/playerSlice";

export const store = configureStore({
  reducer: {
    // The key is the reducerPath we defined in our API service, and the value is the reducer

    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    player: playerSlice,
  },

  // Add any additional middleware
  // getDefaultMiddleware is a function that returns the default middleware used by Redux Toolkit
  // We're concatenating our API service's middleware to the array of default middleware
  // This means that when we dispatch an action, the API service's middleware will have a chance to handle it

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export const { useGetPlayersQuery } = puppyBowlApi;