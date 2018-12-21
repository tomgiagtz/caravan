import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextArea, Form, Icon, Grid, Label, Header } from 'semantic-ui-react'
import InteractionControl from '../components/InteractionControl';

class DetailsContainer extends Component {
	render() {
		if (this.props.voter) {
			let { id, name, survey_results, phone_number: phoneNumber, party_affiliation: partyAffiliation, contacted } = this.props.voter
			// let phoneNumber = this.props.voter.phone_number
			// let partyAffiliation = this.props.party_affiliation
			let notes = survey_results.map(note => {
				return note.notes + "\n\n"
			})
			console.log(this.props)
			return (
				<>
					<Grid centered columns={2}>
						<Grid.Row>
							<Header>{name} </Header>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column> Party: {partyAffiliation} </Grid.Column>
							<Grid.Column> Contacted: {contacted ? <Icon name='check circle' color='green' /> : <Icon name='remove circle' color='red' />}</Grid.Column>
						</Grid.Row>
					</Grid>
					<Form> {/*Just used as a segment for the text areas */}
						<Grid padded>
							<Grid.Row >
								<Grid.Column>
									<Label attached="top" ribbon >Script</Label>

									<TextArea defaultValue={this.props.script} />

								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Label attached="top" ribbon>Notes</Label>

									<TextArea defaultValue={notes} />

								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<InteractionControl phoneNumber={phoneNumber} voterId={id} />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Form>

				</>
			)
		} else {
			return <div>Voter Not Found</div>
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		voter: state.voters.find(v => v.id === ownProps.match.params.voterId),
		script: state.campaign.script
	}
}

export default connect(mapStateToProps)(DetailsContainer)