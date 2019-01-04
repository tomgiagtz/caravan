import React, { Component } from "react";
import {
	Form,
	Header,
	Checkbox,
	Label,
	TextArea,
	Grid,
	Icon,
	Button
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { Slider } from "react-semantic-ui-range";
import { connect } from "react-redux";
import { postSurvey } from "../redux/actions/actions";
import NotContacted from "../components/NotContacted";

class SurveyContainer extends Component {
	state = {
		knowsCandidate: false,
		supportsCandidate: false,
		levelOfSupport: 2,
		notes: ""
	};

	postForm = e => {
		let data = {
			answered: true,
			voter_record_id: this.props.voter.id,
			knows_candidate: this.state.knowsCandidate,
			supports_candidate: this.state.supportsCandidate,
			level_of_support: this.state.levelOfSupport,
			notes: this.state.notes
		};
		this.props.postSurvey(data);
	};

	handleValueChange = (e, { value }) => {
		this.setState({
			levelOfSupport: value
		});
	};

	handleCheckBox = (e, { value }) => {
		let name = e.currentTarget.firstChild.name;
		this.setState({ [name]: !this.state[name] });
	};

	handleChangeText = e => {
		this.setState({ notes: e.target.value });
	};

	pushHome = e => {
		this.postForm();
		this.props.history.push("/home");
	};

	pushNextVoter = e => {
		this.postForm();
		this.props.history.push("/phone/" + this.props.nextVoter.id);
	};
	render() {
		let sliderSet = {
			start: this.state.levelOfSupport,
			min: 0,
			max: 5,
			step: 1,
			onChange: value => {
				this.setState({
					levelOfSupport: value
				});
			}
		};
		return (
			<Form onSubmit={this.postForm}>
				<Header>
					{this.props.voter ? (
						this.props.voter.name
					) : (
						<Icon loading name="asterisk" />
					)}
				</Header>
				{this.props.voter && this.props.voter.contacted ? (
					<>
						<Form.Field>
							<Checkbox
								onChange={this.handleCheckBox}
								label="Knows Candidate?"
								name={"knowsCandidate"}
								checked={this.state.knowsCandidate}
							/>
						</Form.Field>
						<Form.Field>
							<Checkbox
								onChange={this.handleCheckBox}
								label="Supports Candidate?"
								name={"supportsCandidate"}
								checked={this.state.supportsCandidate}
							/>
						</Form.Field>
						<Grid padded>
							<Grid.Row>
								<Grid.Column>
									<Form.Field
										onChange={this.handleValueChange}
									>
										<Label attached="top" ribbon>
											Level of Support
										</Label>
										<Slider
											color="violet"
											name="levelOfSupport"
											settings={sliderSet}
										/>
									</Form.Field>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Label attached="top" ribbon>
										Notes
									</Label>
									<Form.Field>
										<TextArea
											onChange={this.handleChangeText}
										/>
									</Form.Field>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Button.Group>
							<Button type="submit" onClick={this.pushHome}>
								Submit and Exit
							</Button>
							<Button.Or />
							{this.props.nextVoter ? (
								<Button
									primary
									type="submit"
									onClick={this.pushNextVoter}
								>
									Submit and Next
								</Button>
							) : (
								<Button disabled>No More Voters</Button>
							)}
						</Button.Group>
					</>
				) : (
					<NotContacted id={this.props.match.params.voterId} />
				)}
			</Form>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		voter: [...state.voters.contacted, ...state.voters.toContact].find(
			v => {
				return v.id === ownProps.match.params.voterId;
			}
		),
		nextVoter: state.voters.toContact[0]
	};
};
export default connect(
	mapStateToProps,
	{ postSurvey }
)(withRouter(SurveyContainer));
