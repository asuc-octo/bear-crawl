import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className = 'homeContainer'>
                <nav>
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