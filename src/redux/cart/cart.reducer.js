import CartActionTypes from "./cart.types";

const initialState = {
	isHidden: true,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				isHidden: !state.isHidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
