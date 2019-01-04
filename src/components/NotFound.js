import React, { Component } from "react";
import { Icon, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
	render() {
		return (
			<>
				<Icon name="exclamation triangle" size="huge" />
				<Header>Page Not Found!</Header>
				<Button as={Link} to="/home">
					Return Home
				</Button>
			</>
		);
	}
}
