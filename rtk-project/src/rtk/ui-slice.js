import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
	name: "ui",
	initialState: { cartIsVisible: false },
	reducers: {
		showCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

export const uiActions = uiSlice.actions;
