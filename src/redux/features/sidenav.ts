import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: true,
};

const sideNavSlice = createSlice({
  name: "sidenav",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const sideNavPersistConfig = {
  key: "sideNav",
  storage,
};

export const { toggle } = sideNavSlice.actions;

export default sideNavSlice.reducer;
