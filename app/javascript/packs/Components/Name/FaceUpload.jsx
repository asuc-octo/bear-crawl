import React, { Component } from 'react';

export default class FaceUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
				<div >
					<h1 className = 'registerTextMedium'> One last thing... </h1>
					<h6 className = 'faceUploadText'> Please upload a picture of yourself to help us match a name to a face!</h6>
					<div className = 'faceUploadInput'> 
						<input type = 'file' name = 'face' />
					</div>
				</div>
		)
	}

}