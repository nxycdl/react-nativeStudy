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

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            });
        }, 3000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}


class BlinkApp extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            size: 0,
        });
        this.stu= new Students('小红','女',16);
        this.ming = new MingStudent('dangdang','女',16);
    }

    render() {
        // 通过...延展操作符;
        var params = {
            name: '校长',
            age: 28,
            sex: '男'
        }
        var {name, sex} = params;
        return (
            <View>
                <PropsTest {...params}/>
                <PropsTest name={name} sex={sex}/>
                <PropsTest name={name} sex={Number(68)}/>
                <StateTest></StateTest>
                <Text style={{fontSize: 20}}
                      onPress={() => {
                          console.log('onpress ');
                          //方法1；
                          console.log(this.refs);
                          var size = this.refs.refname.getSize();
                          //方法2;
                          //var size = this.refname.getSize();
                          this.setState({
                              size: size,
                          });
                      }}
                >获取气球大小:{this.state.size}</Text>
                <RefTest
                    //方法1；
                    ref="refname"
                    //方法2；
                    //ref={refname=>this.refname=refname}
                />
                <Text>Class 的使用1 {this.stu.getDescription()}</Text>
                <Text>Class 的继承1 {this.ming.getDescription()}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
