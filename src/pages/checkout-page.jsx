import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotalPrice,
} from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout/checkout-item";
import StripeCheckoutButton from "../components/stripe/stripe-button";

const CheckoutPage = ({ totalCost, cartItems }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">
			<span>Total: £{totalCost}</span>
		</div>
		<div className="test-warning">
			* Please use following test credit card details for payment *
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeCheckoutButton price={totalCost} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalCost: selectCartTotalPrice,
});

export default connect(
	mapStateToProps,
	null,
)(CheckoutPage);
