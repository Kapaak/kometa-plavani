//libraries
import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSlice {
  isNavActive: boolean;
  navbarHeight: number;
}

const initialState: NavigationSlice = {
  isNavActive: false,
  navbarHeight: 0,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isNavActive = !state.isNavActive;
    },
    setNavbarHeight: (state, action) => {
      state.navbarHeight = action.payload;
    },
  },
});

export const { toggleNavigation, setNavbarHeight } = navigationSlice.actions;

export default navigationSlice.reducer;
