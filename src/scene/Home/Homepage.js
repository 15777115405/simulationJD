/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Header from '../../widget/Header';
import Banner from '../../widget/Banner';

// const banner_img=[
//     require('../../images/banner/1.jpg'),
//     require('../../images/banner/2.jpg'),
//     require('../../images/banner/3.jpg'),
//     require('../../images/banner/4.jpg')
// ];
export default class Homepage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Banner/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d74047',
    },
    Swiperpaper:{
      backgroundColor:'lightblue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    //切割
    wrapper: {
        backgroundColor:'lightblue',

        height:500
    },
    slide1: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

