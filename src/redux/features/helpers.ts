import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Cookies from '@/utils/cookies'
import axios from "axios";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_BASE_URL,
  prepareHeaders: (headers) => {
    // const token = Cookies.getToken()
    const token = "testduma";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  },
});

// export const getAuthToken = () => {
//   return Cookies.getToken();
// };
