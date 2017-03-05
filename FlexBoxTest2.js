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
export default class FlexBoxTest2 extends Component {
    render() {
        return (
            <View>
                <View style={ {flexDirection: 'row-reverse', backgroundColor: "darkgray", marginTop: 20}}>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>1</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>2</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>3</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>4</Text>
                    </View>
                </View>
                <View style={ {
                    flexDirection: 'row',
                    backgroundColor: "darkgray",
                    marginTop: 20,
                    justifyContent: 'space-around'
                }}>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>flex-start(default) </Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>flex-end</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>space-between
                            在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>space-around
                            在每行上均匀分配弹性元素。ss相邻元素间距离相同。每行第一个元1素到行首的距离和每行最1后一个元素到行尾的距离将会是相邻元素之间距离的一半。</Text>
                    </View>
                </View>
                <View style={ {
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    height: 300,
                    backgroundColor: "darkgray",
                    marginTop: 20,
                    alignItems: 'stretch'
                }}>
                    <View style={ {width: 40, height: 80, backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                        <Text style={ {fontSize: 16}}>row从左到右1</Text>
                    </View>
                    <View
                        style={ {width: 40, height: 80, backgroundColor: "darkcyan", margin: 5, flex: 3}}>
                        <Text style={ {fontSize: 16}}>row--reverse 从右到左 </Text>
                    </View>
                    <View style={ {width: 40, height: 80, backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                        <Text style={ {fontSize: 16}}>31</Text>
                    </View>
                    <View style={ {width: 40, height: 80, backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                        <Text style={ {fontSize: 16}}>4</Text>
                    </View>
                </View>
            </View>

        )
    }
}
