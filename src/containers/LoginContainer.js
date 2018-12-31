import React, { Component } from 'react'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { Grid } from 'semantic-ui-react';
import {Switch, Route, Redirect} from 'react-router-dom'

export default class LoginContainer extends Component {
  render() {
	return (
	  <Grid width={6} centered>
	  	<Switch>
			<Route exact path="/login/signup" component={SignUp} />
			<Route exact path="/login" component={SignIn} />
			<Route path = "/login/" render={() => <Redirect to="/login"/>} />
			
		</Switch>
	  </ Grid>
	)
  }
}
