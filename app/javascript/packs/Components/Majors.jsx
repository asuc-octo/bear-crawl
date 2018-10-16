import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Majors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			majorList: []
		}
	}
	

	render() {
		return (
		<div > 
			{this.props.majorOptions.map((option) => { 
				return (
				<div>
					<span class="checkmark"></span> 
					<label key={option} className = 'round'>
			            <input
			              onChange={this.props.onChange}
			              value={option}
			              checked={this.props.majorOptions.indexOf({option}) > -1 }
			              type='checkbox' /> {option}
		          </label> 
		          <br />
		        </div>
	      	)})}
		</div> 
	)};
}
