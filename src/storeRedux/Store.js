import { configureStore, createSlice } from "@reduxjs/toolkit";
const TranDetails = createSlice({
  name: "Details",
  initialState: {
    Details: [
      {
        id: 245544,
        timeDate: "2022-06-09",
        time: "07:06 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
      },
      {
        id: 245544,
        timeDate: "2022-06-09",
        time: "07:06 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
      },
      {
        id: 245544,
        timeDate: "2022-06-09",
        time: "07:06 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
      },
      {
        id: 245544,
        timeDate: "2022-06-09",
        time: "07:06 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
      },
      {
        id: 245544,
        timeDate: "2022-06-09",
        time: "07:06 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
      },
    ],
  },
  reducers: {},
});
const selectedSlice = createSlice({
  name: "Selectedtab",
  initialState: { selectedval: "Dashboard" },
  reducers: {
    change: (state, action) => {
      state.selectedval = action.payload;
    },
  },
});
const TranSlice = createSlice({
  name: "tran",
  initialState: {
    tran: [
      {
        id: 1,
        iconName: "TbCoinRupeeFilled",
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: 2,
        iconName: "FaBitcoin",
        text: "BTC Sell",
        amount: "- 12.48513391 BTC",
        timestamp: "2022-05-27 12:32 PM",
      },
      {
        id: 3,
        iconName: "TbCoinRupeeFilled",
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
      },
    ],
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    selectedtab: selectedSlice.reducer,
    tran: TranSlice.reducer,
    Details: TranDetails.reducer,
  },
});
export default store;

export const SelectedAction = selectedSlice.actions;
