import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: "And your year?"
		}
		this.yearSelected = this.yearSelected.bind(this)
	}

	yearSelected = (ev, val) => {
		ev.persist();
		this.setState({year:ev.target.value});
		this.props.onSubmit && this.props.onSubmit(this.state.yearSelected);
	}

	render() {
		console.log(this.state.year)
		return (
		<div >
			<select value = {this.state.year}> 
		  		<option value = 'Freshman' onChange = {this.yearSelected}> Freshman </option>
		  		<option value = 'Sophomore' onChange = {this.yearSelected}> Sophomore </option>
		  		<option value = 'Junior' onChange = {this.yearSelected}> Junior </option>
		  		<option value = 'Senior' onChange = {this.yearSelected}> Senior </option>
		  		<option value = '5th year Senior' onChange = {this.yearSelected}> 5th Year Senior </option>
		  		<option value = 'Graduate Student' onChange = {this.yearSelected}> Graduate Student </option>
		  	</select>
		</div> 
	)};
}