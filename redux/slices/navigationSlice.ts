//libraries
import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSlice {
	isNavActive: boolean;
}

const initialState: NavigationSlice = {
	isNavActive: false,
};

export const navigationSlice = createSlice({
	name: "navigation",
	initialState,
	reducers: {
		toggleNavigation: state => {
			state.isNavActive = !state.isNavActive;
		},
	},
});

export const { toggleNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
