import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './Components/Register/RegisterForm';
import SwitchForm from './Components/Switch/SwitchForm';
import Background from './../../assets/images/back.png';
import store from '../Store/store';
import FlashMessage from 'react-flash-message';
import { Provider } from 'react-redux';
import NameError from './NameError.jsx';
import PasswordError from './PasswordError.jsx';

const registerStyle = {
	backgroundImage: `url(${Background})`, 
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.body.appendChild(document.createElement('div'))
  )
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			phaseOneDone: false,
			phaseTwoDone: false, 
			noName: false, 
			noPass: false,			
		}
		this.noUser = this.noUser.bind(this);
		this.noPass = this.noPass.bind(this);
		this.userFound = this.userFound.bind(this);
		this.passFound = this.passFound.bind(this);
		this.phaseTwoSubmit = this.phaseTwoSubmit.bind(this);
	};

	componentDidMount() {
		this.subscription = store.subscribe(() => {
			let {name, password} = store.getState();
			if (name !== "" && password != "") {
				this.setState({phaseOneDone: true});
			} else if (majors !== [] && interests !== []) {
				this.setState({phaseTwoDone: true})
			}
		})
	}

	userFound() {
		this.setState({noName: false});
	}

	passFound() {
		this.setState({noPass: false});
	}

	noUser() {
		this.setState({noName: true});
	}

	noPass() {
		this.setState({noPass: true});
	}

	phaseTwoSubmit() {
		this.setState({phaseTwoDone: true});
	}

	componentWillUnmount() {
		this.subscription();
	}

	render() {
		return (
		<div> 
			<div className = "errorCenter" style = {{ display: this.state.noPass ? 'flex' : 'none'}}>
				<PasswordError />
			</div>
			<div className = "usernameErrorContainer" style = {{ display: this.state.noName ? 'flex' : 'none' }}>
				<NameError />
			</div>	
				<div className = "extraContainer">
			    <div className = "regContainer" style = { registerStyle }>
			    	<div className = "whiteContainer" style = {{ animation: this.state.phaseOneDone ? 'slider 0.5s ease-in-out forwards' : 'none' }}>
			    		<div className = "container">
			      			<RegisterForm username="Username" password="Password" noUser = {this.noUser} noPass = {this.noPass} userFound = {this.userFound} passFound = {this.passFound} />
			      		</div>
			      	</div>
			    </div>
			  </div>
		    <div className = "extraContainer" style = {{ backgroundImage: `url(${Background})` }}>
			    <div className = "switchContainer" style = {{ background: 'transparent', animation: this.state.phaseOneDone ? 'sliderSwitch 0.8s ease-in-out forwards' : 'none', display: this.state.phaseOneDone ? 'flex' : 'none' }}>
			    	<div className = "switchWhiteContainer" style = {{ animation: this.state.phaseTwoDone ? 'slider 0.8s ease-in-out forwards' : 'none' }}>
			    		<div className = "container"> 
			      			<SwitchForm onSubmit = {this.phaseTwoSubmit} />
			      		</div>
			      	</div>
			    </div>
			 </div>
			 <div className = "extracontainer" style = {{ backgroundImage: `url(${Background})` }}> 
			 	<div className = "switchContainer2" style = {{ background: 'transparent', animation: this.state.phaseTwoDone ? 'sliderSwitch2 0.8s ease-in-out  forwards' : 'none', display: this.state.phaseTwoDone ? 'flex' : 'none' }} >
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


