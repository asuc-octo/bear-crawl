import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Interests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interestDescription: ""
		}
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.updateInterests = this.updateInterests.bind(this);
	}


	updateInterests(ev, val) {
		ev.persist();
		this.setState({interestDescription: 
			ev.target.val});

	}

	handleButtonClick(ev, val) {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props.onSubmit(this.state.interestDescription);
	}	
	

	render() {
		return (
			<div className = 'interestsSeparator'> 
				<br />
				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer1'/>
				<br />
				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer2'/>
				<br /> 
 				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer3'/> 
	          <br />
	      	</div>
	)};
}
