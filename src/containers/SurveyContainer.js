import React, { Component } from 'react'
import { Form, Header, Checkbox, Label, TextArea, Grid, Icon } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range'
import { connect } from 'react-redux'
import { postSurvey, voterContacted } from '../redux/actions/actions'

class SurveyContainer extends Component {
	state = {
		knowsCandidate: false,
		supportsCandidate: false,
		levelOfSupport: 2,
		notes: ""
	}

	postForm = (e) => {
		e.preventDefault()
		let data = {
			answered: true,
			voter_record_id: this.props.voter.id,
			knows_candidate: this.state.knowsCandidate,
			supports_candidate: this.state.supportsCandidate,
			level_of_support: this.state.levelOfSupport,
			notes: this.state.notes
		}
		this.props.postSurvey(data)
	}

	handleValueChange = (e, { value }) => {
		this.setState({
			levelOfSupport: value
		})
	}

	handleCheckBox = (e, { value }) => {
		let name = e.currentTarget.firstChild.name
		this.setState({ [name]: !this.state[name] })
	}

	handleChangeText = (e) => {
		this.setState({ notes: e.target.value })
	}
	render() {
		let sliderSet = {
			start: this.state.levelOfSupport,
			min: 0,
			max: 5,
			step: 1,
			onChange: (value) => {
				this.setState({
					levelOfSupport: value
				})
			}

		}
		return (
			<Form onSubmit={this.postForm}>
				<Header>{this.props.voter ? this.props.voter.name : <Icon loading name='asterisk' />}</Header>
				<Form.Field ><Checkbox onChange={this.handleCheckBox} label="Knows Candidate?" name={"knowsCandidate"} checked={this.state.knowsCandidate} /></Form.Field>
				<Form.Field ><Checkbox onChange={this.handleCheckBox} label="Supports Candidate?" name={"supportsCandidate"} checked={this.state.supportsCandidate} /></Form.Field>
				<Grid padded>
					<Grid.Row>
						<Grid.Column>

							<Form.Field onChange={this.handleValueChange}>
								<Label attached="top" ribbon>Level of Support</Label>
								<Slider color='violet' name="levelOfSupport" settings={sliderSet} />
							</Form.Field>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Label attached="top" ribbon>Notes</Label>
							<Form.Field>
								<TextArea onChange={this.handleChangeText} />
							</Form.Field>

						</Grid.Column>

					</Grid.Row>
				</Grid>
				<Form.Button>Submit</Form.Button>
			</Form>

		)
	}
}

const mapStateToProps = (state) => {
	return { voter: state.voters.toContact[0] }
}


const mapDispatchToProps = (dispatch) => {
	return {
		postSurvey: (data) => dispatch(postSurvey(data)),
		voterContacted
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)
