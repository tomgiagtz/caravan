import React, { Component } from "react";
import { Form, Header, Grid, Message } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../redux/actions/api";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
		error: false
	};

	handleInputChange = (e, { value }) => {
		let name = e.currentTarget.name;
		this.setState({ [name]: value });
	};

	handleLogin = () => {
		let data = {
			email: this.state.email,
			password: this.state.password
		}
		let callback = ({ data: { signInUser } }) => {
			//if response good, set needed data and token (dispatch?), redirect home
			if (signInUser && signInUser.token) {
				localStorage.setItem(
					"user",
					JSON.stringify({ authdata: signInUser.token })
				);
				this.props.history.push("/home");
			} else {
				console.log("invalid");
				this.setState({ error: true });
			}
			//if response bad, display invalid login
		};

		loginUser(data, callback);
	};

	render() {
		return (
			<>
				<Grid.Row>
					<Header>Sign into your Caravan</Header>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={6}>
						<Form error>
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
									header="Invalid Login"
									content="Please double check your email and password"
								/>
							) : null}

							<Form.Button fluid onClick={this.handleLogin}>
								Sign In
							</Form.Button>
						</Form>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					New to Caravan? <Link to="/login/signup">Sign Up</Link>
				</Grid.Row>
			</>
		);
	}
}

export default withRouter(SignIn);
