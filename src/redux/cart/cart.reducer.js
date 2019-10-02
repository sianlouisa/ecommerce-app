import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
	isHidden: true,
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				isHidden: !state.isHidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
