import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomeContainer from "./containers/HomeContainer";
import PhoneContainer from "./containers/PhoneContainer";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import { fetchVoters, fetchCampaign } from "./redux/actions/actions";
import { Switch, Route, withRouter } from "react-router-dom";
import { PrivateRoute } from "./helpers/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import NotFound from "./components/NotFound";
import CampaignContainer from "./containers/CampaignContainer";
import getUser from "./helpers/getUser";

class App extends Component {
	componentDidMount() {
		let user = getUser();
		if (user && user.info.campaign) {
			this.props.fetchCampaign(user.info.campaign.id);
		}
	}

	render() {
		return (
			<div className="App">
				<Segment color="grey" inverted>
					<NavBar />
					<Switch>
						<Route exact path="/home" component={HomeContainer} />
						<PrivateRoute
							path="/phone"
							component={PhoneContainer}
						/>
						<PrivateRoute
							path="/campaign"
							component={CampaignContainer}
						/>
						<Route path="/login" component={LoginContainer} />
						<Route path="/" component={NotFound} />
					</Switch>
				</Segment>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchCampaign: id => {
			dispatch(fetchCampaign(id));
		},
		fetchVoters: () => {
			dispatch(fetchVoters());
		}
	};
};

const mapStateToProps = state => {
	return { campaign: state.campaign };
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
