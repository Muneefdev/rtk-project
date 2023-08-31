import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
	{
		id: 1,
		title: "Product 1",
		price: 19.99,
		description: "This is the description for Product 1.",
	},
	{
		id: 2,
		title: "Product 2",
		price: 29.99,
		description: "This is the description for Product 2.",
	},
	{
		id: 3,
		title: "Product 3",
		price: 39.99,
		description: "This is the description for Product 3.",
	},
	{
		id: 4,
		title: "Product 4",
		price: 49.99,
		description: "This is the description for Product 4.",
	},
	{
		id: 5,
		title: "Product 5",
		price: 59.99,
		description: "This is the description for Product 5.",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{products.map((prod) => {
					return (
						<ProductItem
							key={prod.id}
							id={prod.id}
							title={prod.title}
							price={prod.price}
							description={prod.description}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
