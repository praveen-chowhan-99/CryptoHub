import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API headers (Authentication)
const cryptoApiHeaders = {
  'x-rapidapi-key': '4fcfec9424mshc0394f8e04b5a8ap17eb11jsn5f210b6f0356',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
};

// Base URL for the API(all requests starting with base URL)
const baseUrl = 'https://coinranking1.p.rapidapi.com';

// Function to attach headers
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Create the API slice // createApi automatically generates all the reducers and actions
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),//cryptocurrencies

    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),//cryptodetails
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

  }),
});

// Export the generated hook correctly
export const { useGetCryptosQuery ,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi;
