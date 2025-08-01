import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up API headers
const cryptoNewsHeaders = {
  'x-rapidapi-key': '4fcfec9424mshc0394f8e04b5a8ap17eb11jsn5f210b6f0356',
  'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
};

// Function to create request with headers
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com' }), // Updated Base URL
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/v1/cointelegraph'), // Updated path
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
