import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';

class InteractionControl extends Component {
	state = {currentAction : 'call'}
	handleClick = () => {
		if (this.state.currentAction === 'call') {
			window.open('tel: ' + this.props.currentVoter.phone_number)
			this.setState({ currentAction: 'survey' })
		} else {
			this.props.history.push('/phone/' + this.props.currentVoter.id + '/survey')
		}
		
	}
	render() {
		return (
			<>
				<Button negative >No Answer</Button>
				<Button positive onClick={this.handleClick}>{this.state.currentAction === 'call' ? 'Call' : 'Survey'}</Button>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return { currentVoter: state.voters.toContact[0] }
}

export default withRouter(connect(mapStateToProps)(InteractionControl))
