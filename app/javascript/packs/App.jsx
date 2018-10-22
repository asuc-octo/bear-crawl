// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Register from './Components/Register';
import Background from './../../assets/images/back.png';
import store from '../Store/store';
import { Provider } from 'react-redux';



const registerStyle = {
		backgroundImage: `url(${Background})`, 
		transform: false,
	}

const none = {
	display: none,
}

var transform = false;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.body.appendChild(document.createElement('div'))
  )
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transform:false
		}
		this.changeStyle = this.changeStyle.bind(this);
	};

	changeStyle() {
		transform = true; 
	}	

	render() {
		return (
			<div className = "extraContainer">
		    <div className = "REGISTERCONTAINER" style = { registerStyle }>
		    	<div className = "whiteContainer" style = {{transform: transform ? 'translateY(-100%)' : 'translateY(0%)'}}>
		    		<div className = "container"> 
		      			<Register username="Username" password="Password" styleChanger = {this.changeStyle} />
		      		</div>
		      	</div>
		    </div>
		    <div className = "SWITCHCONTAINER" style = { none } >
		    	<h1> At least </h1>
		    </div>
		</div>
		);
	}
}


