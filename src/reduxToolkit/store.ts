import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiMessageSlice } from '@api/apiMessageSlice';
import authorizationSlice from './authorizationSlice';
import messagesSlice from './messagesSlice';

const store = configureStore({
  reducer: {
    [apiMessageSlice.reducerPath]: apiMessageSlice.reducer,
    authorization: authorizationSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMessageSlice.middleware),
});

type FuncType = typeof store.getState;

export type TRootState = ReturnType<FuncType>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
