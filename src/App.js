import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import PhoneContainer from './containers/PhoneContainer'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import { fetchVoters, fetchCampaign } from './redux/actions/actions'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {
	componentDidMount() {
		// this.props.fetchVoters()
		this.props.fetchCampaign()
	}
	render() {
		return (
			<div className="App">

				<NavBar />
				<Segment inverted color="grey" className="App">
					<Switch>
						<Route exact path="/home" component={HomeContainer} />
						<Route path="/phone" component={PhoneContainer} />
						<Route path="/" component={HomeContainer} />
					</Switch>
				</Segment>

			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchCampaign: () => { dispatch(fetchCampaign('5ebcfa50-e4c4-4709-b874-c0314a16e52b')) },
		fetchVoters: () => { dispatch(fetchVoters()) }
	}
}
export default withRouter(connect(null, mapDispatchToProps)(App));
