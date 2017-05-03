'use strict';

import React, { Component } from 'react';
import { 
	Dimensions,
	ScrollView, 
	StyleSheet, 
	Text, 
	View, 
} from 'react-native';
import { Button } from 'react-native-elements';

import { BLUE, FACEBOOK_BLUE } from '../colorPicker';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
	renderLastSlide(index: number) {
		if (index === this.props.data.length - 1) {
			return (
				<Button 
					buttonStyle={styles.button}
					color={BLUE}
					onPress={this.props.onComplete}
					title='Get Started'
				/>
			);
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {
			return (
				<View key={slide.text} style={styles.slide}>
					<Text style={styles.slideText}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView
				horizontal
				pagingEnabled
				style={{ flex: 1 }}
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'white',
		marginTop: 15,
	},
	slide: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		width: SCREEN_WIDTH,
	},
	slideText: {
		alignItems: 'center',
		color: FACEBOOK_BLUE,
		fontSize: 20,
		justifyContent: 'center',
	},
});

module.exports = {
	Slides,
};
