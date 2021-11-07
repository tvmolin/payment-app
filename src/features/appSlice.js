import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  userId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    changeCurrentUser: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

export const { enterRoom, changeCurrentUser } = appSlice.actions;
export const selectRoomId = (state) => state.app.roomId;

export const selectUserId = (state) => state.app.userId;

export default appSlice.reducer;
