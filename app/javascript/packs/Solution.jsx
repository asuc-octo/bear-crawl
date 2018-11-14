import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Solution extends React.Component {
	render() {
		return (
			<div> 
				<div className = 'solutionTextContainer'>
					<p className = 'solutionText'> The solution </p>
				</div>
				<div className = 'cmeContainer'>
					<div className = 'solutionTriangle'>
					</div>
					<p className = 'cmeText'> 
						BearCrawl sharpens and expedites the recruitment process by matching prospective students and organizations
						and providing easy event management tools. Clubs can clearly advertise their missions, available roles, 
						or prior projects, and students can advertise their experiences and interests. BearCrawl then suggests
						to students clubs they might be interested in applying to, and clubs are suggested with students they might 
						want to recruit.
					</p>
					<p className = 'connectSolution'> Connect </p> 
					<p className = 'manageSolution'> Manage </p> 
					<p className = 'exploreSolution'> Explore </p> 
				</div> 
			</div>
		)
	}
}
