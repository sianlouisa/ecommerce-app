import React from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = { password: "", email: "" };
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
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
						label="email"
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						label="password"
						required
						handleChange={this.handleChange}
					/>
					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
