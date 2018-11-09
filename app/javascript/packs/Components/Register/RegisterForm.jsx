import React, { Component } from 'react';
import RegisterFooter from './RegisterFooter';
import { connect } from 'react-redux';


class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "", 
			password: "",
		}
	}

	handlePassword = (ev) => {
		let password = ev.target.value;
		if (password.length == 0) {
			this.props.noUser && this.props.noPass();
			this.setState({password: password, noPass: true});
			return;
		}
		this.props.passFound && this.props.passFound();
		this.setState({password:ev.target.value, noPass: false});
	}

	handleUsername = (ev) => {
		let username = ev.target.value;
		if (ev.target.value.length == 0) {
			this.props.noUser && this.props.noUser();
			this.setState({name:username, noName: true});
			return;
		}
		this.props.userFound && this.props.userFound();
		this.setState({name:ev.target.value, noName: false});
	}

	handleRegister = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		let {name, password} = this.state;
		if (this.state.name.length == 0) {
			this.props.noUser && this.props.noUser();
			return;
		} else if (this.state.password.length == 0) {
			this.props.noPass && this.props.noPass();
			return;
		}
		else {
			this.props.userFound && this.props.userFound();
			this.props.passFound && this.props.passFound();
			this.props.updateProfile(password, name);
		}
	}

	render() {
		return (
		<div>
			<div className='td'>
				<i className='fas fa-user'></i>
			</div>
			<h1 className = 'registerText'>Register</h1>
			<p className = 'smallRegisterTextFirstModal'>For your security, passwords
			must include an upper case letter and at least one number. </p> 
			<div className = 'container' />
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'registerForm'>
		  				<div className = 'group'>
		  					<input onChange = {this.handleUsername} value={this.state.name} name='Username' placeholder = 'Username' className = 'usernameRegister' />
							<hr className = "registerLine" />
							<br />
							<input onChange = {this.handlePassword} value={this.state.password} name = 'Password' type = 'password' placeholder = 'Password' className = 'passwordRegister' />
							<hr className = 'registerLine' />
							<div className = 'signinRegister'> 
								<input type = 'submit'  name = 'Register' onClick = {this.handleRegister} value='     Next     ' className = 'inputSigninRegister' />
							</div>
							<RegisterFooter />
							🐻
						</div>
					</form>
				</div>
			</div>
	)};
}

function mapStateToProps(dispatch) {
	return {
		updateProfile: (name, password) => dispatch({
			type: "SET_PASS_AND_NAME",
			payload: {password, name}
		})
	}
}

export default connect(()=>({}), mapStateToProps)(RegisterForm);

	