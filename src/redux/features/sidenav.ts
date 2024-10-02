import { createSlice } from "@reduxjs/toolkit";

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

export const { toggle } = sideNavSlice.actions;

export default sideNavSlice.reducer;
