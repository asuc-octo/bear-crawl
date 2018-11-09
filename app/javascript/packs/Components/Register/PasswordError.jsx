import React, { Component } from 'react';

export default class PasswordError extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	};


	render() {
		return (
				<div className = 'passwordErrorContainer'> 
					<h1> Please enter a password. </h1>
				</div>
			)
	}

}
