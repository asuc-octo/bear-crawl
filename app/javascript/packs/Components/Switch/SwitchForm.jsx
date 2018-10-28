import React from 'react';
import Year from './Attributes/Year.jsx';
import Majors from './Attributes/Majors.jsx';
import Interests from './Attributes/Interests.jsx';
import { connect } from 'react-redux';

class SwitchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			interests: [],
			majors: [],
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
		this.setState({year}); 	
	}

	handleInterests = (ev) => {
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

	handleSubmit = (ev) => {
		ev.persist();
		ev.preventDefault();
		this.props.onSubmit && this.props
			.onSubmit(this.state.majors, this.state.interests, this.state.year);
	}

	showMajor = (ev) => {
		ev.persist();
		ev.preventDefault();
		this.setState({
			animateMajor: true
		});
	}

	showYear = () => {
		this.setState({
			animateYear: true
		});
	}

	handleMajors = (ev) => {
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
		this.setState({majors: newMajors});
	}

	showFinished = () => {
		const {year, interests, majors} = this.state;
		console.log("ARRIVED");
		this.setState({finalAnimation: true});
		this.props.finishAttrs(year, interests, majors);
	}


	render() {
		return (
		<div className = 'finishedSwitcher'>
			<div className="td">
				<i className ='fa fa-bar-chart' aria-hidden='true'></i>
			</div>
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
		  					<div type = 'submit' onClick = {this.showMajor} className = 'inputSigninRegisterSecond' style = {{display: this.state.animateMajor ? 'none' : 'inline-block' }} value = 'Next' ></div>
		  				</div>
		  				<div style = {{ animation: this.state.animateMajor ? 'opSlide 0.6s ease-in forwards' : 'none', display: this.state.animateMajor ? 'inline-block' : 'none' }} className = 'secondwidth50' >
	  						<Interests onSubmit = {this.handleInterests} />
	  						<div type = 'submit' value = 'Next' onClick = {this.showYear} className = 'inputSigninRegisterThird' style = {{display: this.state.animateMajor ? 'inline-block' : 'none', animation: this.state.animateYear ? 'slideOff 0.4s linear forwards' : 'none'}} ></div>
	  					</div>
	  					<div className = "yearHolder" style = {{animation: this.state.animateYear ? 'yearSwitch 0.6s ease-out forwards' :  'none', display: this.state.animateYear ? 'flex' : 'none'}}> 
						 	<Year onChange = {this.handleYear} /> 
							 <div onClick = {this.showFinished} className = 'inputSigninRegisterFourth' style = {{display: this.state.finalAnimation ? 'inline-block' : 'none', animation: this.state.finalAnimation ? 'slideLeft 0.2s linear forwards' : 'none'}} ></div>

						 	{/* <input type = 'submit' value = 'Finish' onClick = {this.showFinished} className = 'inputSigninRegisterFourth' style = {{display: this.state.finalAnimation ? 'inline-block' : 'none', animation: this.state.finalAnimation ? 'slideLeft 0.2s linear forwards' : 'none'}} /> */}
						 </div>
					</form>
				</div>
			</div>
	)};
}

function mapStateToProps(dispatch) {
	return {
		finishAttrs: (year, interests, majors) => dispatch({
			type: "SET_ATTRS", 
			payload: {year, interests, majors}
		})
	}
}

export default connect(()=>({}), mapStateToProps)(SwitchForm);
