import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Icon extends React.Component {
	render() {
		return (
			<div>
				<div className = 'iconContainer'>
					<div className = 'chainIconContainer'>
						<i class="fas fa-link"></i>
						<div className = 'chainIconText'>
							<p style = {{ maxWidth: '230px' }}>
								Students are given the ability to create profiles
								that show their interests and qualifications, a virtual representation
								for others to see and recruit with. Clubs are given the ability
								to create pages that describe their available roles and prior projects, 
								giving them an unrivaled level of online campus visibility. 
								Then, BearCrawl matches students with these clubs and begin their application process.
								Our platform gives clubs the ability to contact prospective students and view their profiles 
								and students the ability to apply, make groups and communicate online.
							</p>
						</div> 
					</div>
					<div className = 'gearIconContainer'>
						<i class="fas fa-cogs"></i>
						<div className = 'gearIconText'>
							<p style = {{ maxWidth: '230px' }} >
								Students can manage their online campus perception by updating their profiles and interests. 
								Their applications, deadlines, and infosessions are organized through BearCrawl's multifaceted
								tools for campus presence managemenet. Clubs can view and manage applicant pool, set interview times, 
								and update events all in a central location. Clubs can now streamline their application process 
								through a "Common App" – making it easier for more students to apply more efficiently, in contrast to the
								currently scattered system of flyers, websites, and word-of-mouth.
							</p>
						</div> 
					</div>
					<div className = 'navIconContainer'>
						<i class="fas fa-compass"></i>
						<div className = 'navIconText'>
							<p style = {{ maxWidth: '230px' }}>
								BearCrawl gives smaller clubs an opportunity to market themselves, 
								leveling the playing field between larger organizations and smaller ones. 
								It also gives students the opportunity to explore campus culture, potential clubs, 
								and participate in extracurriculars, without dealing with the chaos of Sproul. 
								Ideally, BearCrawl would provide an online landscape for campus-wide communication in a much
								more digestible way, while also saving club executives the task of tabling on campus
								for hours daily and posting to various scattered social media groups.
							</p>
						</div> 
					</div>
				</div>
			</div>
		)
	}
}