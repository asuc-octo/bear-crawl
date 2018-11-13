import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeNavBar extends React.Component {
	constructor() {
		super();
		this.state = {
			switchColor: false
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (ev)=> {
		this.setState({switchColor: true});
	}


    render() {
        return (
            <div className = 'homeNavContainer' >
                <nav style = {{backgroundColor: this.state.switchColor ? 'rgb(36, 46, 70)' : 'rgb(36, 46, 70)' }}>
                    <a className = 'logo'>Bear<span className = 'yellowLogoText'> Crawl </span> </a>
                    <a href = ''>Student Login</a>
                    <a href = ''>Club Login</a>
                    <a href = ''>About</a>
                    <a href = ''>Contact Us</a>
                </nav> 
            </div>
        )
    }
}