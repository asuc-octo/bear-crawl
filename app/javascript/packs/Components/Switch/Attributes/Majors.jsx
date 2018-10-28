import React from 'react';
import { connect } from 'react-redux';



const Majors = (props) => {
	function updateMajor(major) {
		return ()=> {
			const hasMajor = props.majors.indexOf(major) > -1;
			//props.updateMajor(major, hasMajor)
		}
	}

	return (
		<div > 
			{props.majorOptions.map((option) => { 
				return (
				<div className = 'width45' key={option}> 
					<label htmlFor={option}>
			            <input
			              onChange={props.onChange}
			              onClick={((o)=>updateMajor(o))(option)}
			              value={option}
			              checked={props.majors.indexOf(option) > -1}
			              type='checkbox' /> 
			              <span>{option}</span>
		          </label> 
		        </div>
	      	)})}
		</div> 
	)
};

function mapStateToProps(dispatch) {
	return {
		updateMajor: (major, hasMajor) => dispatch({
			type: hasMajor ? "ADD_MAJOR" : "REMOVE_MAJOR",
			payload: major
		})
	}
}

export default connect(()=>({}), mapStateToProps)(Majors);
