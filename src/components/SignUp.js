import React, { Component } from "react";
import { Header, Grid, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { createUser, loginUser } from "../redux/actions/api";

class SignUp extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		error: false
	};

	handleInputChange = (e, { value }) => {
		let name = e.currentTarget.name;
		this.setState({ [name]: value });
	};

	handleSignUp = () => {
		let data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		};
		let callback = resp => {
			console.log(resp);

			if (resp.status && resp.status === 422) {
				//invalid email
				this.setState({ error: true });
			} else {
				// login user
				let loginCallback = ({ data: { signInUser } }) => {
					if (signInUser && signInUser.token) {
						localStorage.setItem(
							"user",
							JSON.stringify({ authdata: signInUser.token })
						);
						this.props.history.push("/home");
					} else {
						this.props.history.push("/login");
					}
				};

				loginUser(data, loginCallback)
			}
		};

		createUser(data, callback);
	};

	render() {
		return (
			<>
				<Grid.Row>
					<Header>Welcome to Caravan</Header>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={6}>
						<Form error>
							<Form.Input
								name="name"
								icon="user"
								iconPosition="left"
								placeholder="Name"
								onChange={this.handleInputChange}
							/>
							<Form.Input
								name="email"
								icon="mail"
								iconPosition="left"
								placeholder="Email Address"
								onChange={this.handleInputChange}
							/>
							<Form.Input
								name="password"
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
								onChange={this.handleInputChange}
							/>
							{this.state.error ? (
								<Message
									error
									header="Invalid Email"
									content="There is already an account associated with this email"
								/>
							) : null}
							<Form.Button fluid onClick={this.handleSignUp}>
								Sign Up
							</Form.Button>
						</Form>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					Part of a Caravan? <Link to="/login">Sign In</Link>
				</Grid.Row>
			</>
		);
	}
}
export default SignUp;
