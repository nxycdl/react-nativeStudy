/**
 * Created by dl on 2017-03-09.
 */
/**
 * Created by dl on 2017-03-09.
 */
import React, {Component} from 'react';
import {Text, Image, View, Navigator, TouchableOpacity} from  'react-native';

import ThreePageComponent from './ThreePageComponent';
export default class SencondPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        console.log('second', this.props);
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _pressButtonGoNext(){
        console.log('second','next',this.props);
        const {navigator} = this.props;
        if (navigator){
            navigator.push({
                name: 'ThreePageComponent',
                component: ThreePageComponent,
            });
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去！Second</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={this._pressButtonGoNext.bind(this)}>
                    <Text>点我跳到下一页</Text>

                </TouchableOpacity>

            </View>
        )
    }

}