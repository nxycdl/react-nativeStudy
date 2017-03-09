/**
 * Created by dl on 2017-03-09.
 */
import React,{Component} from 'react';
import {Text,Image,TouchableOpacity } from  'react-native';

import SecondPageComponent from './SecondPageComponent'
export default class FirstPageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    _pressButton() {
        const {navigator} = this.props;
        console.log(this.props);
        if (navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            });
        }

    }

    render() {
        return (<View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>µãÎÒÌø×ª</Text>
                </TouchableOpacity>
            </View>
        )
    }

}