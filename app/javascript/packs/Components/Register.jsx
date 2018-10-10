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
			slide: true,
		}
		this.newUser = this.newUser.bind(this)
	}

	newUser(name, password, success) {
		//make request here

		this.setState(success:true);
		this.setState(slide: true);
		return;
	}

	render() {
		return (
		<div>
	  		<RegisterForm name = 'Username' password = 'Password' onSubmit = {this.newUser.bind(this)} />
		</div> 
	)};
}