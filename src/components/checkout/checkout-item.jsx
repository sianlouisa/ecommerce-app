import React from "react";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	removeItem,
	addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItems, removeItem, addItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">£{price * quantity}</span>
			<div className="remove-button" onClick={() => clearItems(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItems: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(
	null,
	mapDispatchToProps,
)(CheckoutItem);
