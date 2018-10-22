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
		this.props.onChange && this.props.onChange(this.state.year);
	}

	render() {
		return (
		<div className = 'select' onChange = {this.yearSelected}>
			<select defaultValue = {this.state.year} className = 'selectYear'> 
				<option defaultValue = 'And your year?' disabled> And your year? </option>
		  		<option defaultValue = 'Freshman' onChange = {this.yearSelected}> Freshman </option>
		  		<option defaultValue = 'Sophomore' onChange = {this.yearSelected}> Sophomore </option>
		  		<option defaultValue = 'Junior' onChange = {this.yearSelected}> Junior </option>
		  		<option defaultValue = 'Senior' onChange = {this.yearSelected}> Senior </option>
		  		<option defaultValue = '5th year Senior' onChange = {this.yearSelected}> 5th Year Senior </option>
		  		<option defaultValue = 'Graduate Student' onChange = {this.yearSelected}> Graduate Student </option>
		  	</select>
		</div> 
	)};
}