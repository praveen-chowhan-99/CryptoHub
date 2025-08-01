import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi'; // Import your API slice
import {cryptoNewsApi} from '../services/cryptoNewsApi'; // Import your API slice
export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, // Add the cryptoApi reducer
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer, // Add the cryptoNewsApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware), // Add both middlewares // Add RTK Query middleware
});

export default store;
