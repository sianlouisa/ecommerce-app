import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "./cart/cart-icon";
import CartDropdown from "./cart/cart-dropdown";

const Header = ({ currentUser, isHidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/sign-in">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{isHidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { isHidden } }) => ({
	currentUser,
	isHidden,
});

export default connect(mapStateToProps)(Header);
