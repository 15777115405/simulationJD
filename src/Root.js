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
    StatusBar,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './widget/Header';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        )
    }
}
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'}
    }
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

                    <TabNavigator tabBarStyle={styles.tab}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/home_focus.png')}/>}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/home_normal.png')}/>}
                            onPress={() => this.setState({selectedTab: 'home'})}          >

                            <Home/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'profile'}

                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/category_focus.png')}/>}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/category_normal.png')}/>}
                            onPress={() => this.setState({selectedTab: 'profile'})}          >
                            <Profile/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/faxian_focus.png')}/>}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/faxian_normal.png')}/>}
                        >
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/cart_focus.png')}/>}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/cart_normal.png')}/>}
                                                    >
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/personal_focus.png')}/>}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/personal_normal.png')}/>}
                        >

                        </TabNavigator.Item>

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
    tab:{
        height:55,
        backgroundColor:'#F5FCFF',
        paddingBottom:-20,
        alignItems: 'center'

    },
    tabIcon:{
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop:5

    }
});

