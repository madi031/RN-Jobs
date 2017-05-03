'use strict';

import React from 'react';

import { Slides } from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Job App' },
	{ text: 'Set your location, swipe away' },
];

class WelcomeScreen extends React.Component {
	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	render() {
		return (
			<Slides 
				data={SLIDE_DATA}
				onComplete={this.onSlidesComplete}
			/>
		);
	}
}

module.exports = {
	WelcomeScreen,
};
