import React, { Component } from 'react';

const YEARS = [
	'Freshman', 'Sophomore', 'Junior', 'Senior', '5th year Senior', 'Graduate Student'
]

export default class Year extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: "And your year?"
		}
	}

	yearSelected = (ev) => {
		this.setState({year:ev.target.value});
		this.props.onChange(this.state.year);
	}

	render() {
		return (
		<div className = 'select' onChange = {this.yearSelected}>
			<select defaultValue = {this.state.year} className = 'selectYear'> 
				<option defaultValue = 'And your year?' disabled> And your year? </option>
		  		{YEARS.map((year)=> (<option key={year} defaultValue={year} onChange={this.yearSelected}>{year}</option>))}
		  	</select>
		</div> 
	)};
}