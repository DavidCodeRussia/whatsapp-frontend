import { createSlice } from '@reduxjs/toolkit';
import { getMessagesFromLS } from '@utils/getMessagesFromLS';

const messages = getMessagesFromLS();

const initialState = {
  messages: messages?.length > 0 ? messages : [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
