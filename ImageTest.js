/**
 * Created by Administrator on 2017-03-05.
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

export default class ImageTest extends Component {
    constructor(props) {
        super(props);
        this.state = {liked: 'yellow'};
    }

    handleClick() {
        //console.log(this.state.liked);
        this.state.liked ==='yellow'?this.setState({liked:'red'}) :this.setState({liked:'yellow'});
        /*if (this.state.liked==='yellow'){
            this.setState({liked:'red'})
        }else{
            this.setState({liked:'yellow'})
        }*/
    }

    render() {
        var text = this.state.liked;
        var styledom = {color: text};
        return (
            <View>
                <Image style={{width: 100, height: 100}} resizeMode={'stretch'}
                       source={require('./src/image/bd_logo1.png')}></Image>
                {/* 网络图片必须制定宽高否则不可见;*/}
                <Image style={{width: 100, height: 100}} resizeMode={'stretch'}
                       source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                <Image style={{width: 100, height: 100}}
                       source={{uri: 'node_modules_reactnative_libraries_customcomponents_navigationexperimental_assets_backicon.png'}}></Image>
                <Text onPress={this.handleClick.bind(this)} style={styledom}>动态绑定样式！,点我改变颜色</Text>
            </View>
        )
    }
}