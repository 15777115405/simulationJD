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
    Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Category from '../scene/Category/Category.js';
import Cart from '../scene/Cart/Cart.js';
import Find from '../scene/Find/Find.js';
import Personal from '../scene/Personal/Personal.js';
import  Homepage from '../scene/Home/Homepage';
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'}
    }
    render() {
        return (

            <TabNavigator tabBarStyle={styles.tab}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/home_focus.png')}/>}
                    renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/home_normal.png')}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}          >

                    <Homepage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}

                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/category_focus.png')}/>}
                    renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/category_normal.png')}/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}          >
                    <Category/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'category'}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/faxian_focus.png')}/>}
                    renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/faxian_normal.png')}/>}
                    onPress={() => this.setState({selectedTab: 'category'})}
                ><Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/cart_focus.png')}/>}
                    renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/cart_normal.png')}/>}
                    onPress={() => this.setState({selectedTab: 'cart'})}
                ><Cart/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'personal'}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/personal_focus.png')}/>}
                    renderIcon={() => <Image style={styles.tabIcon} source={require('./images/tabs/personal_normal.png')}/>}
                    onPress={() => this.setState({selectedTab: 'personal'})}
                ><Personal/>
                </TabNavigator.Item>
            </TabNavigator>

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
