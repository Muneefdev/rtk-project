import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../rtk/cart-slice";

const CartItem = (props) => {
	const { title, quantity, total, price, id } = props.item;
	const dispatch = useDispatch();

	const addCartToItemHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id: id,
				title: title,
				price: price,
				quantity: quantity,
				totalPrice: total,
			})
		);
	};

	const removeItemFromCartHandler = () => {
		dispatch(cartActions.removeItemFromCart(id));
	};
	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>(${price}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeItemFromCartHandler}>-</button>
					<button onClick={addCartToItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
