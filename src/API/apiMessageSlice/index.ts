import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGetNotifications, TGetNotificationsParams } from './types';

export const apiMessageSlice = createApi({
  reducerPath: 'message',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),
  endpoints: (builder) => ({
    getNotification: builder.query<TGetNotifications, TGetNotificationsParams>({
      query: ({ idInstance, apiTokenInstance }) =>
        `waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
    }),
    readNotification: builder.mutation({
      query: ({ idInstance, apiTokenInstance, receiptId }) => ({
        url: `waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${Number(receiptId)}`,
        method: 'DELETE',
      }),
    }),
    sendMessage: builder.mutation({
      query: ({ idInstance, apiTokenInstance, body }) => ({
        url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useGetNotificationQuery, useReadNotificationMutation, useSendMessageMutation } =
  apiMessageSlice;
