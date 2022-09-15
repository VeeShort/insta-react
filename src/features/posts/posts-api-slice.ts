import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const BASE_URL = 'https://5b27755162e42b0014915662.mockapi.io/api/v1';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

interface Post {
  id: string;
  imageUrl: string;
  description: string;
  likes: number;
  userName: string;
  userId: string;
}

export type PostsResponse = Post[];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query<PostsResponse, string>({
        query(userId: string) {
          return `/users/${userId}/posts`;
        }
      })
    }
  }
});

export const { useFetchPostsQuery } = apiSlice;
