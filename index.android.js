/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    ScrollView,
    TouchableHighlight,
    Text,
    Image,
    StyleSheet,
    View,
    Navigator
} from 'react-native';

import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';
import Students from './Students';
import MingStudent from './MingStudent';
import FlexBoxTest2 from './FlexBoxTest2';
import TouchableTest from './TouchableTest';
import ImageTest from './ImageTest';
import ScrollViewTest from './ScrollViewTest';
import ListViewbasics from './ListViewbasics';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons'
import FirstPageComponent from './src/FirstPageComponent';
import HomeComponent from './app/component/HomeComponent';
import ContactComponent from './app/component/ContactComponent';
import MessageComponent from './app/component/MessageComponent';
class BlinkApp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedTab:'首页'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name="rocket" size={30} color="red" />}
                        renderSelectedIcon={() => <Icon name='ios-home' size={30} color="red"  />}
                        onPress={() => this.setState({selectedTab: '首页'})}>
                        <HomeComponent/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '消息'}
                        title="消息"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name='ios-contact-outline' size= {20} color="#666" />}
                        renderSelectedIcon={() => <Icon name={'ios-contact-outline'.replace(/\-outline$/, "")} size={20} color="#3496f0" />}
                        onPress={() => this.setState({selectedTab: '消息'})}>
                        <MessageComponent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '联系人'}
                        title="联系人"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name='ios-compass-outline' size= {20} color="#666" />}
                        renderSelectedIcon={() => <Icon name={'ios-compass-outline'.replace(/\-outline$/, "")} size={20} color="#3496f0" />}
                        onPress={() => this.setState({selectedTab: '联系人'})}>
                        <ContactComponent />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "red",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
