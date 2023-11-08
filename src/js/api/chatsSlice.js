// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import * as api from '../api/chats';

// export const fetchChats = createAsyncThunk(
//     'fetchChats',
//     async () => {
//         const chats = await api.fetchChats()
//         // const data = await res.data
//         console.log('Chats abhishek => ', chats);
//         return chats;
//     }
// )

// const initialState = {
//     chats: [],
//     isLoading: false,
//     error: null,
// }


// export const chatsSlice = createSlice({
//     name: 'chats',
//     initialState,
//     reducers: {
//         // getChats(state, action) {
            
//         //     state.push(async () => {
//         //         const chats = await api.fetchChats()
//         //         // const data = await res.data
//         //         // console.log('Chats abhishek => ', chats);
//         //         return chats
//         //     });
//         // }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchChats.pending, (state) => {
//         return (state = {
//             ...state,
//             status: "loading",
//             isLoading: "true"
//           });
//         })
//         builder.addCase(fetchChats.fulfilled, (state, action) => {
//           return (state = {
//             ...state,
//             status: "idle",
//             chats: action.payload,
//             isLoading: "false"
//           });
//         })
//         builder.addCase(fetchChats.rejected, (state, action) => {
//         return (state = {
//             ...state,
//             status: "failed",
//             isLoading: "false"
//           });
//         })
//       },
// })

// export default chatsSlice.reducer;
// // export const {getChats} = chatsSlice.actions;