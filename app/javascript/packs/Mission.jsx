import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cover from '../../assets/images/cover.png';

export default class Mission extends React.Component {
    render() {
        return (
            <div>
                <div className = 'missionContainer'>
                    <p className = 'ourMission'> Our Mission </p>
                </div>
                <div className = 'studentLifeContainer'>
                    <img src = {Cover} height = '250' style = {{ position: 'absolute', left: 0}} />
                    <div className = 'yellowTrap'>  
                        <div className = 'missionText'>
                            <p> To improve the student experience at UC Berkeley
                                by connecting prospective members and great campus
                                organizations and enabling simple, effective management features.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}