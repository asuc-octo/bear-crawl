import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeNavBar from './HomeNavBar.jsx';
import Welcome from './Welcome.jsx';
import Mission from './Mission.jsx';
import Arrow from './Arrow.jsx';
import HomeFooter from './HomeFooter.jsx';
import Problem from './Problem.jsx';
import Solution from './Solution.jsx';
import Icon from './Icon.jsx';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeNavBar />
                <Welcome />
                <Arrow />
                <Mission />
                <Problem />
                <Solution />
                <Icon />
                <HomeFooter />
            </div>
        )
    }
}