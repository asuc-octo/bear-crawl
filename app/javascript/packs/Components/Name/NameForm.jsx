import React, { Component } from 'react';
import FaceUpload from './FaceUpload';
import { connect } from 'react-redux';

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: ""
		}
		this.firstNameUpdate = this.firstNameUpdate.bind(this);
		this.lastNameUpdate = this.lastNameUpdate.bind(this);
	}

	firstNameUpdate = (ev, val)=> {
		let firstName = ev.target.value;
		this.setState({firstName});
	}

	lastNameUpdate = (ev, val)=> {
		let lastName = ev.target.value;
		this.setState({lastName});
	}

	hanldeUpload = (ev, val)=> {
		ev.persist();
		let {firstName, lastName} = this.state;
		this.props.finishRegister(firstName, lastName);
	}

	render() {
		return (
		<div> 
			<div className = 'container' />
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'nameForm' encType='multipart/form-data'>
		  				<FaceUpload />
		  				<div className = 'group'>
		  					<input onChange = {this.firstNameUpdate} value={this.state.firstName} name='First Name' placeholder = 'First Name' className = 'firstNameRegister' />
							<hr className = "registerLine" />
							<br />
							<input onChange = {this.lastNameUpdate} value={this.state.lastName} name = 'Last Name' placeholder = 'Last Name' className = 'lastNameRegister' />
							<hr className = 'registerLine' />
							<div className = 'nameSigninRegister'> 
								<input type = 'submit'  name = 'Register' onClick = {this.handleUpload} value='     Next     ' className = 'inputSigninRegister' />
							</div>
						</div>
					</form>
				</div>
		</div>
	)};
}

function mapStateToProps(dispatch) {
	return {
		finishRegister: (name, password) => dispatch({
			type: "SET_NAMES",
			payload: {firstName, lastName}
		})
	}
}

export default connect(()=>({}), mapStateToProps)(NameForm);