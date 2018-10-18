import React, { Component } from 'react';
import Year from './Year.jsx';

const MAJORS = ['Business Administration', 'Cognitive Science', 'Computer Science', 'Economics', 'Language Studies', 'MCB/MEB', 'Political Science', 'Public Health']

export default class RegisterForm extends Component {
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
		ev.persist()
		console.log(ev.target.val)
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
		this.setState({showYear: 1});
		console.log(this.state.showYear);
	}

	render() {
		return (
		<div>
			<div className="td">
				<i className="fa fa-bar-chart" aria-hidden="true"></i>
			</div>
			<h1 className = 'registerTextLarge'>About you</h1>
			<p className = 'smallRegisterText'>What's your major? </p> 
			<div className = 'container' />
		  		<div className = 'contained'>
		  			<form method = '' action = '' className = 'registerFormRadios'>
		  				<div className = 'groupFlex'>
							  {MAJORS.map((major)=>
							  	{
									return (<div key={major}>
												<input onChange={this.handleMajors} type='checkbox' name='Major' placeholder='Majors' value={major} />{major}<br/>
											</div>);
								})}
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

	