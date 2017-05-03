'use strict';

import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { BLUE, TRANSPARENT } from '../colorPicker';

class ReviewScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Review Jobs',
		headerRight: (
			<Button 
				title='Settings' 
				onPress={() => { navigation.navigate('settings'); }} 
				backgroundColor={TRANSPARENT}
				color={BLUE}
			/>
		),
		style: {
			marginTop: Platform.OS === 'android' ? 24 : 0,
		},
	});

	render() {
		return (
			<View>
				<Text>ReviewScreen</Text>
			</View>
		);
	}
}

module.exports = {
	ReviewScreen,
};
