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
			password: "", 
			transform: 'none'
		}
		this.handlePassword = this.handlePassword.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handlePassword = (ev, val) => {
		ev.persist();
		this.setState({password:ev.target.val});
	}

	handleUsername = (ev, val) => {
		ev.persist();
		this.setState({name:ev.target.val}); 
	}

	handleRegister = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props.onSubmit(this.state.name, this.state.password)
	}

	render() {
		return (
		<div>
			<td>
				<i className='fas fa-user'></i>
			</td>
			<h1 className = 'registerText'>Register</h1>
			<p className = 'smallRegisterTextFirstModal'>For your security, passwords
			must include an upper case letter and at least one number. </p> 
			<div className = 'container' />
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'registerForm'>
		  				<div className = 'group'>
		  					<input onChange = {this.handleUsername} name = 'Username' type = 'text' placeholder = 'Username' className = 'usernameRegister' />
							<hr className = "registerLine" />
							<br />
							<input onChange = {this.handlePassword} name = 'Password' type = 'text' placeholder = 'Password' className = 'passwordRegister' />
							<hr className = 'registerLine' />
							<div className = 'signinRegister'> 
								<button name = 'Register' onClick = {this.handleRegister} value='     Next     ' className = 'inputSigninRegister' />
							</div>
							<RegisterFooter />
						</div>
					</form>
				</div>
			</div>
	)};
}

	