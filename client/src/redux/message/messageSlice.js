// redux/slices/messageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  conversations: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    setConversations(state, action) {
      state.conversations = action.payload;
    },
  },
});

export const { setMessages, addMessage, setConversations } = messageSlice.actions;
export default messageSlice.reducer;


// updateMessageStart , updateMessageSuccess , updateMessageFailure
// deleteMessageStart , deleteMessageSuccess , deleteMessageFailure