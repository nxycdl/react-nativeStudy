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
    View
} from 'react-native';

import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';
import Students from './Students';
import MingStudent from './MingStudent';
import FlexBoxTest2 from './FlexBoxTest2';
import TouchableTest from './TouchableTest';
import ImageTest from './ImageTest';


class BlinkApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableTest/>
                <ImageTest></ImageTest>
            </View>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
