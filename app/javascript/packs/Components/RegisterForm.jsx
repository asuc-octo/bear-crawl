// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RegisterFooter from './RegisterFooter';

export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "", 
			password: ""
		}
	}

	handlePassword = (ev, val) => {
		ev.persist();
		this.setState({password:ev.target.val});
	}

	handleUsername = (ev, val) => {
		ev.persist();
		this.setState({name:ev.target.value}); //val vs value?
	}

	handleRegister = (ev, val) => {
		this.props.onSubmit && this.props.onSubmit(this.state.name, this.state.password)
	}

	render() {
		return (
		<div>
			<h1 className = 'registerText'>Register</h1>
			<div className = 'container'>
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'registerForm'>
		  				<div className = 'group'>
		  					<input onChange = {this.handleUsername} name = 'Username' type = 'text' placeholder = 'Username' className = 'usernameRegister' />
							<hr className = "registerLine" />
							<br />
							<input onChange = {this.handlePassword} name = 'Password' type = 'text' placeholder = 'Password' className = 'passwordRegister' />
							<hr className = 'registerLine' />
							<div onClick = {this.handleRegister} className = 'signinRegister'> 
								<input name = 'Register' type='submit' value='     Register     ' className = 'inputSigninRegister' />
							</div>
							<RegisterFooter />
						</div>
					</form>
				</div>
			</div>
		</div>
	)};
}

	