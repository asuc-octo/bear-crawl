// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Register from './Components/Register';
import Switch from './Components/Switch';
import Background from './../../assets/images/back.png';


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
			username: "", 
			password: "",
			majors: [], 
			interests: [], 
			year: "Freshman" 
		}
		this.changeStyle = this.changeStyle.bind(this);
		this.newUser = this.changeStyle.bind(this);
	};

	changeStyle(name, password) {
		this.setState({transform:true, name: name, password: password});
	}	

	newUser(majors, interests, year) {
		this.setState({majors: majors, interests:interests, year: year});
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
			    <div className = "switchContainer" style = {{background: 'transparent', animation: this.state.transform ? 'sliderSwitch 0.8s ease-in-out forwards' : 'none', display: this.state.transform ? 'flex' : 'none'} } >
			    	<div className = "switchWhiteContainer" >
			    		<div className = "container"> 
			      			<Switch username="Username" password="Password" onSubmit = {this.newUser} />
			      		</div>
			      	</div>
			    </div>
			 </div>
		</div>
		);
	}
}


