import React, { Component } from 'react'
import { Segment, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class HomeContainer extends Component {
	render() {
		return (
			<Segment>
				<Header>Welcome To Caravan!</Header>
				<Button.Group >
					<Button as={Link} to="/phone" color="violet">Start Calling</Button>
					<Button.Or />
					<Button as={Link} to="/phone" color="violet">Start Canvassing</Button>
				</Button.Group>
			</Segment>
		)
	}
}
