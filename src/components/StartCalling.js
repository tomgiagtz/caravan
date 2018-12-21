import React, { Component } from 'react'
import {Segment, Icon, Header, Button} from 'semantic-ui-react'
import { Link} from 'react-router-dom'

const instructions = 'Here are some sort of instructions where you would explain how to use the script and provide other information'

export default class StartCalling extends Component {
  render() {
	return (
	  <Segment placeholder>
	  	<Header icon>
		  <Icon name="phone" />
		</Header>
			{instructions}
			<Button as={Link} to="/phone/1bbe1c5c-f77b-48aa-a323-6280558c73f3" primary>Start Calling</Button>
	  </Segment>
	)
  }
}
