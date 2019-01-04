import React from "react";
import {Icon, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function NotContacted({ id }) {
	return (
		<>
			<Icon name="exclamation triangle" size="huge" />
			<Header>Voter Not Contacted!</Header>
			<Button.Group>
				<Button as={Link} to={"/phone/" + id}> Contact Them</Button>
				<Button.Or />
				<Button as={Link} to="/home">
					Return Home
				</Button>
			</Button.Group>
		</>
	);
}
