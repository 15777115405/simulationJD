/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/header/header_logo.png')}
                       style={styles.logo}
                />
                <View style={styles.searchBox}>
                    <Image source={require('../images/header/icon_search.png')}
                           style={styles.icon_search}/>
                    <TextInput
                        keyboardType='web-search'
                        placeholder='搜索京东商品/店铺'
                        underlineColorAndroid='transparent'
                        style={styles.inputText}/>
                    <Image source={require('../images/header/icon_voice.png')}
                           style={styles.icon_voice}/>
            </View>
                <Image source={require('../images/header/icon_qr.png')}
                       style={styles.sacan}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d74047',


    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'
    },
    searchBox:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d74047',
        paddingRight: 10,
        paddingLeft: 10,
    },
    icon_search: {
        height: 16.7,
        width:16.7,
        marginLeft: 3,
        marginRight: 3,
        resizeMode: 'stretch'
    },
    icon_voice: {
        height: 16.7,
        width: 16.7,
        marginLeft: 3,
        marginRight: 3,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        fontSize:14
    },
    sacan: {
        height: 24,
        width: 24,
        resizeMode: 'stretch'
    }
});

