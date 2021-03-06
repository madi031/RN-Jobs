'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import { AuthScreen } from './screens/AuthScreen';
import { DeckScreen } from './screens/DeckScreen';
import { MapScreen } from './screens/MapScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

class RNJobs extends Component {
  render() {
        const MainNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen },
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    deck: { screen: DeckScreen },
                    review: {
                        screen: StackNavigator({
                            review: { screen: ReviewScreen },
                            settings: { screen: SettingsScreen },
                        }),
                    },
                }),
            },
        });
        return (
            <View style={styles.container}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = {
	RNJobs,
};
