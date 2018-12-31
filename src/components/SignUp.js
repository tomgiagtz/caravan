import React, { Component } from "react";
import { Header, Grid, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class SignUp extends Component {
	render() {
		return (
			<>
				<Grid.Row>
					<Header>Welcome to Caravan</Header>
				</Grid.Row>
				<Grid.Row>
					<Form>
						<Form.Input
							icon="user"
							iconPosition="left"
							placeholder="Name"
						/>
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
						<Form.Button fluid>Sign Up</Form.Button>
					</Form>
				</Grid.Row>
				<Grid.Row>
					Part of a Caravan? <Link to='/login'>Sign In</Link>
				</Grid.Row>
			</>
		);
	}
}
export default SignUp;
