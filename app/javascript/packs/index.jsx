// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Register from './Components/Register';
import Background from './../../assets/images/back.png';



const registerStyle = {
	backgroundImage: `url(${Background})`, 
	transform: 
}

const overLay = {
	height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
}


const layout = (
	// <input type="text" name="club[name]"/>
	<div className = "extraContainer" style = { overLay } >
	    <div className = "REGISTERCONTAINER" style = { registerStyle }>
	    	<div className = "whiteContainer">
	      		<Register username="Username" password="Password" />
	      	</div>
	    </div>
	</div>
  );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(layout,
    document.body.appendChild(document.createElement('div'))
  )
});
