import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeFooter extends React.Component {	
	render() {
		return (
			<footer className = 'footer'>
				<div className = 'footerContainer' style = {{ textAlign: 'center' }}>
					<p style = {{ color: 'white' }} >Footer Content</p> 
				</div>
			</footer> 
		)
	}
}