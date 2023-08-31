import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			{totalCartPrice === 0 ? null : <p>${totalCartPrice.toFixed(2)}</p>}
			<ul>
				{cartItems.map((prod) => {
					return (
						<CartItem
							key={prod.id}
							item={{
								id: prod.id,
								title: prod.title,
								price: prod.price,
								quantity: prod.quantity,
								total: prod.totalPrice,
							}}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default Cart;
