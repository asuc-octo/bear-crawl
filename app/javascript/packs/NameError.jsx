import React, { Component } from 'react';

export default class NameError extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	};


	render() {
		return (
			<div className = "nameErrorContainer"nameErrorText> 
				<h1 className = "nameErrorText"> Please enter a valid username. </h1>
			</div>
		)
	}

}
