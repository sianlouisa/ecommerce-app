export const addItemToCart = (cartItems, cartItemToAdd) => {
	console.log(cartItems);
	const cartItemExists = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id,
	);

	if (cartItemExists) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
