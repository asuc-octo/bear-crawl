// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Year from './Year.jsx';
// import Majors from './Majors.jsx';

export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			majors: [], 
			interests: [],
			year: [], 
			animateYear: false,
			majorOptions: 
				[
					'Business Administration',
					'Cognitive Science',
					'Computer Science',
					'Economics',
					'Language Studies',
					'MCB/MEB',
					'Political Science',
					'Public Health',
				 ]
		}
		this.handleMajors = this.handleMajors.bind(this);
		this.handleYear = this.handleYear.bind(this);
		this.handleInterests = this.handleInterests.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showYear = this.showYear.bind(this);
	}


	handleYear = (ev, val) => {
		ev.persist();
		this.setState({year:ev.target.value}); 
	}

	handleMajors = (ev, val) => {
		ev.persist();
		const selection = ev.target.value;
		let newMajors;
		if (this.state.majorOptions(indexOf(selection) > -1)) {
			newMajors = this.state.majors.filter(v => v !== selection)
		} else {
			newMajors = [...this.state.newMajors, selection];
		}
		this.setState(prevState => ({
			majors: newMajors,
		}));
	}

	handleInterests = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.setState({interests: ev.target.value});
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
		console.log(this.state);
	}

	render() {
		if (this.state.majors.length != 0) {
			this.setState({
				animateYear: true,
			})
		}
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
							<div className = 'yearHolder' style = {{display: 'none' }}> 
								<Year onChange = {this.handleMajors}  />
							</div>
						<button name = 'Register' onClick = {this.showYear} className = 'inputSigninRegister' />
					</form>
				</div>
			</div>
	)};
}

	