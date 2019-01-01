import React, { Component } from "react";
import { Header, Grid, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { createUser } from "../redux/actions/api";

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
		}
		let callback = (resp) => {
			console.log(resp)
		}

		createUser(data, callback)
	}
	
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
							/>
							<Form.Input
							name="email"
								icon="mail"
								iconPosition="left"
								placeholder="Email Address"
							/>
							<Form.Input
							name="password"
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
							/>
							<Form.Button fluid>Sign Up</Form.Button>
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
