// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Year from './Year.jsx';
import Majors from './Majors.jsx';
import Interests from './Interests.jsx';

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
					'Computer Science',
					'Data Science',
					'Economics',
					'Language Studies',
					'Math (Applied/Pure)',
					'MCB/MEB/Public Health',
					'Political Science',
					'Other'
				 ]
		}
		this.handleMajors = this.handleMajors.bind(this);
		this.handleYear = this.handleYear.bind(this);
		this.handleInterests = this.handleInterests.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showYear = this.showYear.bind(this);
	};


	handleYear = (ev, val) => {
		ev.persist();
		this.setState({year:ev.target.value}); 
	}

	handleInterests = (ev, val) => {
		ev.persist();
		const selection = ev.target.value;
		let newInterests;
		if (this.state.interests.indexOf(selection) > -1) {
			newInterests = this.state.interests.filter(v => v !== selection)
		} else {
			if (this.state.interests == []) {
				newInterests = [selection];
			} else {
				newInterests = [...this.state.interests, selection];
			}
		}
		this.setState({interests: newInterests}, (prevState) => {
			console.log(this.state.interets)
		});
		this.forceUpdate();
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
		this.setState({
			animateYear: true
		});
	}

	handleMajors = (ev, val) => {
		ev.persist();
		const selection = ev.target.value;
		let newMajors;
		if (this.state.majors.indexOf(selection) > -1) {
			newMajors = this.state.majors.filter(v => v !== selection)
		} else {
			if (this.state.majors == []) {
				newMajors = [selection];
			} else {
				newMajors = [...this.state.majors, selection];
			}
		}
		this.setState({majors: newMajors}, (prevState) => {
			console.log(this.state.majors)
		});
		this.forceUpdate();
	}

	render() {
		return (
		<div>
			<td>
				<i className ='fa fa-bar-chart' aria-hidden='true'></i>
			</td>
			<h1 className = 'registerTextLarge'>About you</h1>
			<div className = 'container' />
		  		<div className = 'contained50'>
		  			<form method = '' action = '' >
		  				<div className = 'textContainer'> 
							<p className = 'smallRegisterText' > Awesome! What major are you? </p> 
		  					<p className = 'smallRegisterTextRight' style = {{ animation: this.state.animateYear ? 'opSlide 0.8s ease-in forwards' : 'none', display: this.state.animateYear ? 'inline-block' : 'none'}}> Sounds cool! Could you tell us about a couple things you like doing outside school? </p> 
		  				</div>
		  				<div className = 'width50' style = {{ animation: 'opSlideDown 0.8s linear forwards'}} >
		  					<Majors majorOptions = {this.state.majorOptions} majors = {this.state.majors} onChange = {this.handleMajors} className = 'registerFormContainer'/>
		  					<input name = 'Register' type = 'submit' onClick = {this.showYear} className = 'inputSigninRegisterSecond' style = {{display: this.state.animateYear ? 'none' : 'inline-block' }} value = 'Next' />
		  				</div>
		  				<div style = {{ animation: this.state.animateYear ? 'opSlide 0.6s ease-in forwards' : 'none', display: this.state.animateYear ? 'inline-block' : 'none'}} className = 'secondwidth50' >
	  						<Interests onSubmit = {this.handleInterests} />
	  						<input name = 'Register' type = 'submit' value = 'Next' onClick = {this.showYear} className = 'inputSigninRegisterThird' style = {{display: this.state.animateYear ? 'inline-block' : 'none' }} />
	  					</div>
					</form>
				</div>
			</div>
	)};
}

	