import React, { Component } from "react";
import { Card, List } from "semantic-ui-react";
import { connect } from "react-redux";

class CampaignDetails extends Component {
	render() {
		let { name, candidate_name, candidate_party } = this.props.campaign;
		return (
			<Card centered width={8}>
				<Card.Content header={name} />
				<Card.Meta>Current Campaign</Card.Meta>
				<Card.Content>
					<List>
						<List.Item>
							<List.Header>Candidate</List.Header>
							<List.Description>{candidate_name}</List.Description>
						</List.Item>
						<List.Item>
							<List.Header>Party</List.Header>
							<List.Description>{candidate_party}</List.Description>
						</List.Item>
					</List>
				</Card.Content>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return { campaign: state.campaign };
};

export default connect(mapStateToProps)(CampaignDetails);
