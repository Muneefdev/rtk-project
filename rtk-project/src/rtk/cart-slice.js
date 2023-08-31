import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
	"cartSlice/fetchProducts",
	async () => {
		const res = await fetch("https://fakestoreapi.com/products/");
		const products = await res.json();
		return products;
	}
);

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
		totalCartPrice: 0,
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice =
					existingItem.price * existingItem.quantity;
			}

			state.totalCartPrice += newItem.price;
			state.totalQuantity++;
		},
		removeItemFromCart(state, action) {
			const itemId = action.payload;
			const existingItem = state.items.find((item) => item.id === itemId);

			if (existingItem.quantity === 1) {
				state.items = state.items.filter(
					(cartItem) => cartItem.id !== existingItem.id
				);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice =
					existingItem.price * existingItem.quantity;
			}

			state.totalCartPrice -= existingItem.price;
			state.totalQuantity--;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	},
});

export const cartActions = cartSlice.actions;
