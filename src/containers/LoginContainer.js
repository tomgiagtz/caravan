import React, { Component } from 'react'
import SignIn from '../components/SignIn';
import { Grid } from 'semantic-ui-react';

export default class LoginContainer extends Component {
  render() {
	return (
	  <Grid width={6} centered>
		<SignIn />
	  </ Grid>
	)
  }
}
