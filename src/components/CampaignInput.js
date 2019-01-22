import React, { Component } from "react";
import { Card, Form, Message } from "semantic-ui-react";
import getUser from "../helpers/getUser";
import { updateUserCampaign } from "../redux/actions/api";
import { withRouter } from "react-router-dom";
import { fetchCampaign } from "../redux/actions/actions";
import { connect } from "react-redux";

class CampaignInput extends Component {
	state = {
		code: "",
		error: false
	};

	handleChange = (e, { value }) => {
		this.setState({ code: value });
	};

	handleSubmit = () => {
		let campaignId = this.state.code;
		
		let user = getUser();

		let callback = resp => {
			if (resp.status === 404) {
				//display error
				this.setState({ error: true });
			} else {
				//dispatch new campaign code
				this.props.fetchCampaign(campaignId);
				user.info.campaign = {id: campaignId}
				localStorage.setItem('user', JSON.stringify(user))
			}
		};

		updateUserCampaign({ campaignId, userId: user.info.id }, callback);
	};
	render() {
		return (
			<Card centered width={8}>
				<Card.Content header={this.props.header} />
				<Card.Content>
					<Form error>
						<Form.Input
							onChange={this.handleChange}
							action={{
								icon: "bus",
								color: "purple",
								onClick: this.handleSubmit
							}}
						/>
						{this.state.error ? (
							<Message error header="Invalid Code" />
						) : null}
					</Form>
				</Card.Content>
				<Card.Content extra>
					You can get this from a Coordinator
				</Card.Content>
			</Card>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ fetchCampaign }
	)(CampaignInput)
);
