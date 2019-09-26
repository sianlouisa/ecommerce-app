import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
