import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: ""
		}
		this.yearSelected = this.yearSelected.bind(this)
	}

	yearSelected = (ev, val) => {
		ev.persist();
		this.setState({year:ev.target.val});
		console.log(ev.target.val);
		this.props.onChange && this.props.onChange(this.state.yearSelected);
		return;
	}

	render() {
		return (
		<div >
	  		<input name = 'Freshman' value = 'Freshman' type = 'checkbox' onChange = {this.yearSelected} />
	  		<input name = 'Sophomore' value = 'Sophomore' type = 'checkbox' onChange = {this.yearSelected} />
	  		<input name = 'Junior' value = 'Junior' type = 'checkbox' onChange = {this.yearSelected} />
	  		<input name = 'Senior' value = 'Senior' type = 'checkbox' onChange = {this.yearSelected} />
	  		<input name = '5th year Senior' value = '5th year Senior' type = 'checkbox' onChange = {this.yearSelected} />
	  		<input name = 'Graduate Student' value = 'Graduate Student' type = 'checkbox'  onChange = {this.yearSelected} />
		</div> 
	)};
}