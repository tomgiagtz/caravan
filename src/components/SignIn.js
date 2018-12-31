import React, { Component } from "react";
import { Input, Form, Header, Grid } from "semantic-ui-react";

export default class SignIn extends Component {
	render() {
		return (
			<>
				<Grid.Row>
					<Header>Sign In</Header>
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
					</Form>
				</Grid.Row>
			</>
		);
	}
}
