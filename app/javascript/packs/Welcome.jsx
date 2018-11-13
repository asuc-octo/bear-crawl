import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className = 'welcomeContainer'>
                <div className = 'homeText'> 
                    <h1 className = 'h1Welcome'> Welcome to </h1>
                </div>
                <div className = 'homeTextBottom'>
                    <h1 className = 'h1BearCrawl'> Bear <span className = 'goldCrawl'> Crawl </span> </h1>
                </div>
                <div className = 'findContainer'>
                    <p className = 'findText'> Find your community. Find your club. Find your home. </p>
                </div>
            </div>
        )
    }
}