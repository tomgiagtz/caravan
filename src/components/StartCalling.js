import React, { Component } from 'react'
import {Segment, Icon, Header, Button} from 'semantic-ui-react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'

const instructions = 'Here are some sort of instructions where you would explain how to use the script and provide other information'

class StartCalling extends Component {
  render() {
	return (
	  <Segment placeholder>
	  	<Header icon>
		  <Icon name="phone" />
		</Header>
			{instructions}
				
			{this.props.nextVoter ? <Button as={Link} to={"/phone/" + this.props.nextVoter.id} primary>Start Calling</Button> : 'No more voters in this batch'} 
	  </Segment>
	)
  }

}

const mapStateToProps = (state) => {
	return { nextVoter: state.voters.toContact[0] }
}

export default connect(mapStateToProps)(StartCalling)
