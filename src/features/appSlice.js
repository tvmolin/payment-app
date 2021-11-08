import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  userId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload.transactions;
    },
    setBalance: (state, action) => {
      state.balance = action.payload.balance;
    },
  },
});

export const { setTransactions, setBalance } = appSlice.actions;
export const selectTransactions = (state) => state.app.transactions;
export const selectBalance = (state) => state.app.balance;

export default appSlice.reducer;
