// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Register from './Components/Register';
import Switch from './Components/Switch';
import Majors from './Components/Switch';
import Background from './../../assets/images/back.png';
import store from '../Store/store';

const registerStyle = {
	backgroundImage: `url(${Background})`, 
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />,
    document.body.appendChild(document.createElement('div'))
  )
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transform:false,
			finished: false, 			
			username: "", 
			password: "",
			majors: [], 
			interests: [], 
			year: "Freshman", 
		}
		this.changeStyle = this.changeStyle.bind(this);
		this.newUser = this.newUser.bind(this);
	};

	changeStyle(name, password) {
		this.setState({transform:true, name: name, password: password});
	}	

	newUser(majors, interests, year) {
		this.setState({year, majors, interests, finished: true});
		//make request here
	}


	render() {
		return (
		<div> 
			<div className = "extraContainer">
			    <div className = "REGISTERCONTAINER" style = { registerStyle }>
			    	<div className = "whiteContainer" style = {{animation: this.state.transform ? 'slider 0.5s ease-in-out forwards' : 'none'}}>
			    		<div className = "container">
			      			<Register username="Username" password="Password" onSubmit = {this.changeStyle} />
			      		</div>
			      	</div>
			    </div>
			  </div>
		    <div className = "extraContainer" style = {{backgroundImage: `url(${Background})`}}>
			    <div className = "switchContainer" style = {{background: 'transparent', animation: this.state.transform ? 'sliderSwitch 0.8s ease-in-out forwards' : 'none', display: this.state.transform ? 'flex' : 'none'} }>
			    	<div className = "switchWhiteContainer" style = {{animation: this.state.finished ? 'slider 0.8s ease-in-out forwards' : 'none'}}>
			    		<div className = "container"> 
			      			<Switch onSubmit = {this.newUser} store={store}/>
			      		</div>
			      	</div>
			    </div>
			 </div>
			 <div className = "extracontainer" style = {{backgroundImage: `url(${Background})`}}>
			 	<div className = "switchContainer2" style = {{background: 'transparent', animation: this.state.finished ? 'sliderSwitch2 0.8s ease-in-out  forwards' : 'none', display: this.state.finished ? 'flex' : 'none'}} >
			 		<div className = "whiteContainer" >
					 	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
							  <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
							  <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
						</svg>
					</div>
				</div>
			</div>
		</div>
		);
	}
}


