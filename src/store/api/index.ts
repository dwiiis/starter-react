import { apiBaseQuery } from "@/utils/@api";
import { createApi } from "@reduxjs/toolkit/query/react";

export const starterAPI = createApi({
    baseQuery: apiBaseQuery({ baseUrl: "" }),
    keepUnusedDataFor: 0,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    reducerPath: "starterAPI",
    endpoints: () => ({}),
    tagTypes: [
        "DataUsers"
    ]
});