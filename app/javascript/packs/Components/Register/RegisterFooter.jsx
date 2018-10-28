import React, { Component } from 'react';

export default class RegisterFooter extends Component {
	constructor(props) {
		super(props);
		this.setState = {
			login: false, 
			forgot: false,
		}
	}

	slideUpForgot = () => {
		console.log('slideUpForgot');
	}

	slideUpLogin = () => {
		console.log('slideUpLogin');
	}


	render() {
		return (
		<div className = "wordSpacer">
			<a href = '' className = "registerLink" onClick = {this.slideUpLogin}> Already have an account? Login! </a>
		</div> 
	)};
}

					