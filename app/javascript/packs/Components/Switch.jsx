import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SwitchForm from './SwitchForm.jsx';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false,
		}
		this.newUser = this.newUser.bind(this)
	}

	newUser(name, password, success) {
		this.setState(success:true);
		this.props.onSubmit && this.props.onSubmit(name, password);
		return;
	}

	render() {
		return (
		<div>
	  		<SwitchForm majors = 'Majors' onSubmit = {this.newUser} />
		</div> 
	)};
}