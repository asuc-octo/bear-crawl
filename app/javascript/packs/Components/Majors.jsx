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
		<div> 
			<div className = 'groupFlex'>
				{this.props.majorOptions.map(option => {
		        return (
		        <div> 
		          <label key={option}>
		            <input
		              className="form-checkbox"
		              onChange={this.props.onChange}
		              value={option}
		              checked={this.props.majorOptions.indexOf(option) > -1 }
		              type="checkbox" /> {option}
		          </label>
		         </div> 
		        );
		      })}
			</div>
		</div> 
	)};
}
