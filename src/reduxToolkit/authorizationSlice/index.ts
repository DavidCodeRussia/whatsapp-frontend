import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TActionPayload = {
  idInstance: string;
  apiTokenInstance: string;
  phoneNumber: string;
};

const initialState = {
  idInstance: '',
  apiTokenInstance: '',
  phoneNumber: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TActionPayload>) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { setData } = authorizationSlice.actions;
export default authorizationSlice.reducer;
