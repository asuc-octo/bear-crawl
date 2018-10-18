import React, { Component } from 'react';
import RegisterForm from './RegisterForm.jsx';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false,
		}
		this.sendInfo = this.sendInfo.bind(this)
	}

	sendInfo(name, password, success) {
		//make request here
		this.setState({success:true});
		this.props.onSubmit && this.props.onSubmit(name, password);
	}

	render() {
		return (
		<div>
	  		<RegisterForm name = 'Username' password = 'Password' onSubmit = {this.sendInfo} />
		</div> 
	)};
}