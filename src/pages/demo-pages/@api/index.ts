import { ApiRequestParams } from '@/interfaces/request';
import { apiRoutes } from '@/routes/api';
import { starterAPI } from '@/store/api';

export const usersApi = starterAPI.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    fetchDataUsers: builder.query<any, ApiRequestParams>({
      query: (params) => ({
        url: apiRoutes.users,
        method: 'GET',
        params: { ...params },
      }),
      providesTags: ['DataUsers'],
    }),
  }),
});

export const { useFetchDataUsersQuery } = usersApi;
