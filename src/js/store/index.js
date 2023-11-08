import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import chatsSlice from '../api/chatsSlice';

const store = configureStore({
  reducer: {
    chats : chatsSlice
  },
})

export default store;