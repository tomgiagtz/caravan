import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import VoterDetailsContainer from "./VoterDetailsContainer";
import StartCalling from "../components/StartCalling";
import SurveyContainer from "./SurveyContainer";

class PhoneContainer extends Component {
	render() {
		return (
			<Segment piled color="violet">
				<Switch>
					<Route
						path="/phone/:voterId/survey"
						component={SurveyContainer}
					/>
					<Route
						path="/phone/:voterId"
						component={VoterDetailsContainer}
					/>
					<Route path="/phone" component={StartCalling} />
				</Switch>
			</Segment>
		);
	}
}
export default PhoneContainer;
