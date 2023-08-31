import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../rtk/ui-slice";

const CartButton = (props) => {
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const showCartHandler = () => {
		dispatch(uiActions.showCart());
	};

	return (
		<button onClick={showCartHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
