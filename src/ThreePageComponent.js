/**
 * Created by dl on 2017-03-09.
 */
/**
 * Created by dl on 2017-03-09.
 */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from  'react-native';

import FirstPageComponent from './FirstPageComponent';
export default class ThreePageComponent extends Component {
    constructor(props) {
        super(props);
        this.setate = {};
    }

    _pressGoBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _pressGoIndex() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.popToTop();
        }
    }

    _pressJumpTo() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.jumpTo({
                name: 'FirstPageComponent', component: FirstPageComponent,
            })
        }
    }


    render() {

        return (
            <View>
                <TouchableOpacity onPress={this._pressGoBack.bind(this)}>
                    <Text>This is My ThreePageComponent click Me to back</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._pressGoIndex.bind(this)}>
                    <Text>Click Me to First 使用popToTop 跳转</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={this._pressJumpTo.bind(this)}>
                    <Text>Click Me to First 使用jumpTo 跳转</Text>
                </TouchableOpacity>


            </View>

        )
    }

}