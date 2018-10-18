import React, { Component } from 'react';

export default class RegisterFooter extends Component {
	constructor(props) {
		super(props);
		this.setState = {
			login: false, 
			forgot: false,
		}
	}

	slideUpForgot = (ev, val) => {
		console.log('slideUpForgot');
	}

	slideUpLogin = (ev, val) => {
		console.log('slideUpLogin');
	}


	render() {
		return (
		<div className = "wordSpacer">
			<div className = 'forgotRegister'>
				<a href = '/forgot' className = "registerLinkForgot" onClick = {this.slideUpForgot}> Forgot? </a>
			<div className = 'registerContainer'>
				<a href = '' className = "registerLink" onClick = {this.slideUpLogin}> Login </a>
			</div>
		</div>
	</div>
	)};
}

					