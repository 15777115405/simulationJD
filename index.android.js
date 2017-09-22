/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Root from './src/Root';
export default class simulationJD extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Root/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'lightblue',
    },
    wrapper:{
        backgroundColor:'red',
        height:100
    }
});

AppRegistry.registerComponent('simulationJD', () => simulationJD);