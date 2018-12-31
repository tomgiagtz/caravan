import React, { Component } from "react";
import { Form, Header, Grid } from "semantic-ui-react";
import {Link } from 'react-router-dom'

class SignIn extends Component {
	render() {
		return (
			<>
				<Grid.Row>
					<Header>Sign into your Caravan</Header>
				</Grid.Row>
				<Grid.Row>
					<Form>
						<Form.Input
							icon="mail"
							iconPosition="left"
							placeholder="Email Address"
						/>
						<Form.Input
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
						<Form.Button fluid >
							Sign In
						</Form.Button>
					</Form>
					
				</Grid.Row>
				<Grid.Row>
					New to Caravan? <Link to='/login/signup'>Sign Up</Link>
				</Grid.Row>
			</>
		);
	}
}

export default SignIn


