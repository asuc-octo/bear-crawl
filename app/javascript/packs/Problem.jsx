import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Problem extends React.Component { 	
	render() {
		return (
			<div>
				<div className = 'middleTextContainer'>
                    <p className = 'middleText'> The Problem </p>
                </div>
                <div className = 'middleProblemTextContainer'>
                	<p className = 'middleProblemText'> 
                		Our team surveyed 50 randomly selected students and several high impact clubs regarding their
                		recruitment and application process. Students overwhelmingly feel unsatisfied with the current recruitment
                		process, which is often little more than a flyer to the face – over half of the students surveyed stated that they disliked
                		the "sprouling" method. Similarly, organization leaders are frustrated with undirected flying, which entails
                		low response rates and missed opportunities to attract devoted and enthusiastic potential members. 
                		Even through the selectionn stage, executives are faced with having to gauge huge spreadsheets of application data and essays -
                		a decidedly unideal experience. 
                	</p>
                </div>
			</div>
		)	
	}
}