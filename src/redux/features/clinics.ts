import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helpers";

type DataPagination<T> = {
  data: T[];
  metadata: {
    total: number;
    page: number;
  };
};

export type Clinic = {
  id: string;
  name: string;
};

export const clinicApi = createApi({
  reducerPath: "clinic",
  baseQuery,
  endpoints: (builder) => ({
    getAllClinics: builder.query<Clinic[], void>({
      query: () => "clinic",
    }),
    getClinicById: builder.query<Clinic, string>({
      query: (clinicId: string) => `clinic/${clinicId}`,
    }),
    getClinics: builder.query<
      DataPagination<Clinic>,
      { perPage: number; page: number; query?: { [key: string]: string } }
    >({
      query: (params) => {
        let query = "";
        if (params.query) {
          Object.keys(params.query).forEach((key) => {
            if (!query) {
              query += "?";
            } else {
              query += "&";
            }
            query += `${key}=${params.query![key]}`;
          });
        }

        return {
          url: `clinics/${params.perPage}/${params.page}${query}`,
        };
      },
    }),
  }),
});

export const { useLazyGetAllClinicsQuery, useGetAllClinicsQuery } = clinicApi;
