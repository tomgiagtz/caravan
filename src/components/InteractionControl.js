import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { voterContacted, voterNoAnswer } from "../redux/actions/actions";

class InteractionControl extends Component {
	state = { currentAction: "call" };

	handlePositiveClick = () => {
		let { id, phone_number } = this.props.currentVoter;
		if (this.state.currentAction === "call") {
			window.open("tel: " + phone_number);
			this.setState({ currentAction: "survey" });
		} else {
			this.props.voterContacted(id);
			this.props.history.push("/phone/" + id + "/survey");
		}
	};

	handleNegativeClick = () => {
		let { id } = this.props.currentVoter;
		this.props.voterNoAnswer(id);
		if (this.props.nextVoter) {
		this.props.history.push("/phone/" + this.props.nextVoter.id)
		} else {
			this.goPhone()
		}
	};

	goPhone = () => {
		this.props.history.push("/phone")
	}

	render() {
		return (
			<>
				<Button negative onClick={this.handleNegativeClick}>
					No Answer
				</Button>
				<Button positive onClick={this.handlePositiveClick}>
					{this.state.currentAction === "call" ? "Call" : "Survey"}
				</Button>
			</>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		voterContacted: id => dispatch(voterContacted(id)),
		voterNoAnswer: id => dispatch(voterNoAnswer(id))
	};
};
const mapStateToProps = state => {
	let toContact = state.voters.toContact
	let currentVoter = toContact[0]
	return {
		currentVoter,
		nextVoter: toContact[toContact.indexOf(currentVoter) + 1]
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(InteractionControl)
);
