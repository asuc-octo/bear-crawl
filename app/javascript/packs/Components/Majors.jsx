import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Majors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			majorList: [], 
			clicked: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev, val) {
		ev.persist();
		this.setState({clicked: true})
	}
	

	render() {
		return (
		<div > 
			{this.props.majorOptions.map((option) => { 
				return (
				<div className = 'width45'> 
					<label key={option} htmlFor={option}>
			            <input
			              onChange={this.props.onChange}
			              onClick={this.handleClick}
			              value={option}
			              checked={this.props.majors.indexOf(option) > -1}
			              type='checkbox' /> 
			              <span>{option}</span>
		          </label> 
		        </div>
	      	)})}
		</div> 
	)};
}
