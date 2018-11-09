import React, { Component } from 'react';
import store from '../Store/store';

export default class PasswordError extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	};

	render() {
		return (
				<div className = "passwordErrorContainer"> 
					<h1 className = "passwordErrorText"> Please enter a password. </h1>
				</div>
			)
	}

}
