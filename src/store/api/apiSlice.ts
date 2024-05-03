import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Tjob = {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  companyName: string;
  maxJdSalary: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  logoUrl: string | null;
};

export const apiSlice = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology/adhoc",
  }),
  endpoints: (builder) => ({
    getJobs: builder.mutation<
      { jobs: Tjob[]; totalCount: number },
      { offset: number }
    >({
      query: ({ offset }: { offset: number }) => ({
        url: "/getSampleJdJSON",
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: { limit: 10, offset },
      }),
      transformResponse: (response: { jdList: Tjob[]; totalCount: number }) => {
        return { jobs: response.jdList, totalCount: response.totalCount };
      },
    }),
  }),
});

export const { useGetJobsMutation } = apiSlice;
