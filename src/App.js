import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</div>
	);
}

export default App;
