import React, { Component } from 'react';



export default class Interests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interestDescription: ""
		}
		this.updateInterests = this.updateInterests.bind(this);
	}


	updateInterests(ev) {
		ev.persist();
		this.setState({interestDescription: ev.target.val});

	}
	

	render() {
		return (
			<div className = 'interestsSeparator'> 
				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer1'/>
				<br />
				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer2'/>
				<br /> 
 				<textarea type = 'textarea' rows = '20' className = 'interestsTextArea' onChange = {this.updateInterests} className = 'interestsContainer3'/> 
	          <br />
	      	</div>
	)};
}
