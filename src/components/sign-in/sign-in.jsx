import React from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = { password: "", email: "" };
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async e => {
		const { email, password } = this.state;
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (err) {
			console.error(err);
		}
		this.setState({ password: "", email: "" });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						label="Email"
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						label="Password"
						required
						handleChange={this.handleChange}
					/>
					<div className="btns">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
