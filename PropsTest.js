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

export default class PropsTest extends Component {
    //默认属性;
    static defaultProps = {
        name: '小明',
        age: 16,
    }
    //属性检查;
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex:PropTypes.string.isRequired,
    }

    render() {
        return (
            <View>
                <Text>name: {this.props.name}</Text>
                <Text>age:{this.props.age}</Text>
                <Text>sex:{this.props.sex}</Text>
            </View>
        )
    }
}