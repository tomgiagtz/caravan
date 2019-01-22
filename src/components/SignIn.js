import React, { Component } from "react";
import { Form, Header, Grid, Message, Segment } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../redux/actions/api";
import { fetchCampaign } from "../redux/actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import getUser from "../helpers/getUser";

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
		};
		let callback = ({ data: { signInUser } }) => {
			//if response good, set needed data (dispatch?) and token , redirect home
			if (signInUser && signInUser.token) {
				localStorage.setItem(
					"user",
					JSON.stringify({
						authdata: signInUser.token,
						info: signInUser.user
					})
				);
				// debugger
				if (signInUser.user.info && signInUser.user.info.campaign) {
					this.props.fetchCampaign(signInUser.info.campaign.id);
				}
				this.props.history.push("/home");
			} else {
				//if response bad, display invalid login
				console.log("invalid");
				this.setState({ error: true });
			}
		};

		loginUser(data, callback);
	};

	render() {
		let user = getUser();
		if (user && user.authdata) {
			return <Redirect to="/home" />;
		}
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
					<Grid.Column width={6}>
						<Segment textAlign='center'>
							New to Caravan? <Link to="/login/signup">Sign Up</Link>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</>
		);
	}
}

export default connect(
	null,
	{ fetchCampaign }
)(withRouter(SignIn));
