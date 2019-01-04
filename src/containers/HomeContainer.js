import React, { Component } from 'react'
import { Segment, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import getUser from '../helpers/getUser'
import CampaignInput from '../components/CampaignInput';

export default class HomeContainer extends Component {
	render() {
		return (
			<Segment>
				<Header>Welcome To Caravan!</Header>
				{this.handleCurrentUserInfo()}
			</Segment>
		)
	}

	handleCurrentUserInfo = () => {
		let user = getUser()
		if (!user) {
			return this.loginButton()
		} else if (!user.info.campaign) {
			console.log('no campaign')
			return <CampaignInput header="Enter a Caravan Code"/>
		} else {
			return this.navButtons()
		}
	}

	loginButton = () => (
		<Button.Group >
					<Button as={Link} to="/login" color="violet">Login</Button>
					<Button.Or />
					<Button as={Link} to="/login/signup" color="violet">Sign Up</Button>
		</Button.Group>
	)

	navButtons = () => (
		<Button.Group >
					<Button as={Link} to="/phone" color="violet">Start Calling</Button>
					{/* <Button.Or />
					<Button as={Link} to="/phone" color="violet">Start Canvassing</Button> */}
		</Button.Group>
	)
}
