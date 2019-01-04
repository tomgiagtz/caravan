import React, { Component } from "react";
import { Segment, Icon, Header, Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const instructions =
	"Call each voter and follow the script. Then fill out the survey about each voter. Each answer is subjective so answer to the best of your ability and thanks for using Carvan! ";

class StartCalling extends Component {
	render() {
		return (
			<Segment placeholder>
				<Header icon>
					<Icon name="phone" />
				</Header>
				<Card centered>
					<Card.Content header="Instructions" />
					<Card.Content>{instructions}</Card.Content>

					<Card.Content>
						{this.props.nextVoter ? (
							<Button
								as={Link}
								to={"/phone/" + this.props.nextVoter.id}
								primary
							>
								Start Calling
							</Button>
						) : (
							<Button>No more voters in this batch</Button>
						)}
					</Card.Content>
				</Card>
			</Segment>
		);
	}
}

const mapStateToProps = state => {
	return { nextVoter: state.voters.toContact[0] };
};

export default connect(mapStateToProps)(StartCalling);
