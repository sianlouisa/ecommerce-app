import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// subscribe to snapshot
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: { id: snapShot.id, ...snapShot.data() },
					});
				});
			}

			// set currentUser state to null i.e if user logs out
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		// close the open subscription when app unmounts to prevent memory leaks by resetting to null
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
