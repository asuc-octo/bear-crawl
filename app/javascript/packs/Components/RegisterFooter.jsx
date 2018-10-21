import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RegisterFooter extends React.Component {
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
			<a href = '' className = "registerLink" onClick = {this.slideUpLogin}> Already have an account? Login. </a>
		</div> 
	)};
}

					