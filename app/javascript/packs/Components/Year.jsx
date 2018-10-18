import React, { Component } from 'react';

const GRADES = ['Freshman', 'Sophomore', 'Junior', 'Senior', '5th year Senior', 'Graduate Student']

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: ""
		}
		this.yearSelected = this.yearSelected.bind(this)
	}

	yearSelected = (ev, val) => {
		ev.persist();
		console.log(ev.target.val);
		this.setState({year:ev.target.val});
		this.props.onChange && this.props.onChange(this.state.yearSelected);
	}

	render() {
		return (
		<div >
			{GRADES.map((grade)=> <div key={grade}><input name={grade} value={grade} type='checkbox' onChange={this.yearSelected}/>{grade}<br/></div>)}
		</div> 
	)};
}