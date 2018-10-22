// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Year from './Year.jsx';
import Majors from './Majors.jsx';
import Interests from './Interests.jsx';
import { connect } from 'react-redux';

class SwitchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			interests: [],
			year: "", 
			animateMajor: false,
			animateYear: false,
			finalAnimation: false,
			finished: false,
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


	handleYear(year) {
		this.setState({year: year, finalAnimation: true}); 	
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
		this.setState({interests: newInterests, animateYear:true}, (prevState) => {
		});
		this.forceUpdate();
	}

	handleSubmit = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props
			.onSubmit(this.state.majors, this.state.interests, this.state.year);
	}

	showMajor = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.setState({
			animateMajor: true
		});
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
		this.props.setMajors(newMajors);
	}

	showFinished = (ev, val) => {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props.onSubmit(this.state.majors, this.state.interests, this.state.year)
		this.props.on({finished: true});
	}


	render() {
		return (
		<div className = 'finishedSwitcher'>
			<td>
				<i className ='fa fa-bar-chart' aria-hidden='true'></i>
			</td>
			<h1 className = 'registerTextLarge'>All about you</h1>
			<div className = 'container' />
		  		<div className = 'contained50'>
		  			<form method = '' action = '' >
		  				<div className = 'textContainer'> 
							<p className = 'smallRegisterText' > Awesome! What major are you? </p> 
		  					<p className = 'smallRegisterTextRight' style = {{ animation: this.state.animateMajor ? 'opSlide 0.8s ease-in forwards' : 'none', display: this.state.animateMajor ? 'inline-block' : 'none'}}> Sounds cool! Could you tell us about a couple things you like doing outside school? </p> 
		  				</div>
		  				<div className = 'width50' style = {{ animation: 'opSlideDown 0.8s linear forwards'}} >
		  					<Majors majorOptions = {this.state.majorOptions} majors = {this.state.majors} onChange = {this.handleMajors} className = 'registerFormContainer'/>
		  					<input type = 'submit' onClick = {this.showMajor} className = 'inputSigninRegisterSecond' style = {{display: this.state.animateMajor ? 'none' : 'inline-block' }} value = 'Next' />
		  				</div>
		  				<div style = {{ animation: this.state.animateMajor ? 'opSlide 0.6s ease-in forwards' : 'none', display: this.state.animateMajor ? 'inline-block' : 'none' }} className = 'secondwidth50' >
	  						<Interests onSubmit = {this.handleInterests} />
	  						<input type = 'submit' value = 'Next' onClick = {this.showYear} className = 'inputSigninRegisterThird' style = {{display: this.state.animateMajor ? 'inline-block' : 'none', animation: this.state.animateYear ? 'slideOff 0.4s linear forwards' : 'none'}} />
	  					</div>
	  					<div className = "yearHolder" style = {{animation: this.state.animateYear ? 'yearSwitch 0.6s ease-out forwards' :  'none', display: this.state.animateYear ? 'flex' : 'none'}}> 
						 	<Year onChange = {this.handleYear} /> 
						 	<input type = 'submit' value = 'Finish' onClick = {this.showFinished} className = 'inputSigninRegisterFourth' style = {{display: this.state.finalAnimation ? 'inline-block' : 'none', animation: this.state.finalAnimation ? 'slideLeft 0.2s linear forwards' : 'none'}} />
						 </div>
					</form>
				</div>
			</div>
	)};
}


const mapDispatchToProps = (dispatch) => {
	return {
		setMajors: (majors) => {
			dispatch({
				type: "SET_MAJORS", 
				payload: majors
			})
		}
	}
}

export default connect(() => {}, mapDispatchToProps)(SwitchForm);;
	