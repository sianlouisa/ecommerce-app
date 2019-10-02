import { createSelector } from "reselect";

// input selectors

// get cart state from state object
const selectCart = state => state.cart;

// memoize selectors, prevents re-rendering when not required

// get cartItems from cart state
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems,
);

// use cartItems to accumalate quantity
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQuanity, cartItem) => accumalatedQuanity + cartItem.quantity,
			0,
		),
);
