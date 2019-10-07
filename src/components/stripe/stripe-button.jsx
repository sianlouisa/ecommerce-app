import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_ejR6LvRPu7EiRTkRZzvNQQBH00gyqBu6N3";

	const onToken = token => {
		console.log(token);
		alert("Payment successful!");
	};

	return (
		<StripeCheckout
			currency="GBP"
			name="CLOTHING STORE Ltd."
			label="Pay Now"
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is £${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
