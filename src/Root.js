/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './widget/Header';

export default class Root extends Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={{flex:1}}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps="never"
            >
                <View style={styles.container}>
                    <StatusBar backgroundColor={'rgba(215,64,71,0.9)'} />
                    <Header/>
                    <Text style={styles.welcome}>
                        Root.js
                    </Text>

                    <TabNavigator>
                        <TabNavigator className="Item"
                                      title="首页">
                        </TabNavigator>
                        <TabNavigator className="Item"
                                      title="分类">

                        </TabNavigator><TabNavigator className="Item"
                                                     title="发现">
                    </TabNavigator>
                        <TabNavigator className="Item"
                                                     title="购物车">
                    </TabNavigator>

                        <TabNavigator className="Item"
                                      title="我的">

                        </TabNavigator>

                    </TabNavigator>




                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
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
});

