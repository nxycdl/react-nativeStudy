/**
 * Created by Administrator on 2017-03-05.
 */
import React, {
    Component,
    PropTypes
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
export default class StateTest extends Component {
    // 初始化state1；
    state = {
        size: 20,
    }

    constructor(props) {
        super(props);
        /*//初始化组件 state2
         this.state = {
         size: 80,
         }*/
    }

    render() {
        return (
            <View>
                <Text> Hello,{this.props.name} </Text>
                <Text style={{fontSize: this.state.size}}>Size {this.state.size}</Text>
                <Text onPress={() => {
                    //console.log('onPress',this.state.size);
                    this.setState({size: this.state.size + 10});
                }}>我吹啊，吹啊!</Text>
            </View>
        )
    };
}
