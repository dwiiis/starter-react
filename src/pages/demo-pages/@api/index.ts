import { ApiRequestParams } from '@/interfaces/request';
import { apiRoutes } from '@/routes/api';
import { starterAPI } from '@/store/api';

export const usersApi = starterAPI.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    fetchDataUsers: builder.query<any, any>({
      query: (params) => ({
        url: apiRoutes.users,
        method: 'GET',
        params: { ...params },
      }),
      providesTags: ['DataUsers'],
    }),    
    createUser: builder.mutation({
      query: (data) => ({
        url: apiRoutes.users,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['DataUsers'],
    }),
  }),
});

export const { useFetchDataUsersQuery, useCreateUserMutation } = usersApi;
