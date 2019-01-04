import React, { Component } from "react";
import { connect } from "react-redux";
import {
	TextArea,
	Form,
	Icon,
	Grid,
	Label,
	Header,
	Container
} from "semantic-ui-react";
import InteractionControl from "../components/InteractionControl";

class VoterDetailsContainer extends Component {
	render() {
		if (this.props.voter) {
			let {
				name,
				survey_results,
				party_affiliation: partyAffiliation,
				contacted
			} = this.props.voter;
			// let phoneNumber = this.props.voter.phone_number
			// let partyAffiliation = this.props.party_affiliation
			let notes = survey_results.map(note => {
				return note.notes + "\n\n";
			});
			return (
				<>
					<Grid centered columns={2}>
						<Grid.Row>
							<Header>{name} </Header>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>Party: {partyAffiliation}</Grid.Column>
							<Grid.Column>
								Contacted:
								{contacted ? (
									<Icon name="check circle" color="green" />
								) : (
									<Icon name="remove circle" color="red" />
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Form>
						<Grid padded>
							<Grid.Row>
								<Grid.Column>
									<Label attached="top" ribbon>
										Script
									</Label>

									<Container>{this.props.script}</Container>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Label attached="top" ribbon>
										Notes
									</Label>

									<TextArea defaultValue={notes} />
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<InteractionControl />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Form>
				</>
			);
		} else {
			return <div>Voter Not Found</div>;
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		voter: state.voters.toContact.find(
			v => v.id === ownProps.match.params.voterId
		),
		script: state.campaign.script
	};
};

export default connect(mapStateToProps)(VoterDetailsContainer);
