import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';

class InteractionControl extends Component {
	state = {currentAction : 'call'}
	handleClick = () => {
		console.log(this.state.currentAction)
		if (this.state.currentAction === 'call') {
			window.open('tel: ' + this.props.phoneNumber)
			this.setState({ currentAction: 'survey' })
		} else {
			this.props.history.push('/phone/' + this.props.voterId + '/survey')
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

export default withRouter(InteractionControl)
