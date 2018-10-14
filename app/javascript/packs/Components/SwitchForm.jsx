// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Year from './Year.jsx';

export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			majors: [], 
			interests: [], 
			year: "", 
			showYear: 0
		}
		this.handleMajors = this.handleMajors.bind(this);
		this.handleYear = this.handleYear.bind(this);
		this.handleInterests = this.handleInterests.bind(this);
		this.showYear = this.showYear.bind(this);
	}

	handleMajors = (ev, val) => {
		ev.persist();
		this.setState({majors:ev.target.val});
	}

	handleYear = (ev, val) => {
		ev.persist();
		this.setState({year:ev.target.val}); 
	}

	handleInterests = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.setState({interests: ev.target.val});
	}

	handleSubmit = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props
			.onSubmit(this.state.majors, this.state.interests, this.state.year);
	}

	showYear = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		// var adder = this.state.majors;
		// adder.push(ev.target.val);
		// console.log(12);
		this.setState({showYear: 1});
		console.log(this.state.showYear);
	}

	render() {
		return (
		<div>
			<td>
				<i className="fa fa-bar-chart" aria-hidden="true"></i>
			</td>
			<h1 className = 'registerTextLarge'>About you</h1>
			<p className = 'smallRegisterText'>What's your major? </p> 
			<div className = 'container' />
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'registerFormRadios'>
		  				<div className = 'groupFlex'>
		  					<label><input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Business Administration </label>
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Cognitive Science
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Computer Science
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Economics
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Language Studies
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> MCB/MEB
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Political Science
		  					<br />
		  					<input onChange = {this.handleMajors} type = 'checkbox' name = 'Major' placeholder = 'Majors' value = 'Economics' /> Public Health
		  					<br />
						</div>
							<div className = 'yearHolder' style = {{animation: this.state.showYear ? 'opacitySlide 0.3s ease-in forward' : 'none'}}> 
								<Year onChange = {this.handleYear}  />
							</div>
						<button name = 'Register' onClick = {this.showYear} value='     Next     ' className = 'inputSigninRegister' />
					</form>
				</div>
			</div>
	)};
}

	