import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./rtk/cart-slice";

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
