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
import FirstPageComponent from './src/FirstPageComponent';
class BlinkApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
                />
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
