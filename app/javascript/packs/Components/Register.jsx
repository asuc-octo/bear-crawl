// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm.jsx';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false,
		}
		this.sendInfo = this.sendInfo.bind(this)
	}

	sendInfo(name, password, success) {
		this.setState(success:true);
		this.props.onSubmit && this.props.onSubmit(name, password);
		return;
	}

	render() {
		return (
		<div>
	  		<RegisterForm name = 'Username' password = 'Password' onSubmit = {this.sendInfo} />
		</div> 
	)};
}