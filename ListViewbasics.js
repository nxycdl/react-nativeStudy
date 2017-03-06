/**
 * Created by Administrator on 2017-03-06.
 */
import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View, StyleSheet, Dimensions} from 'react-native';


export default class ListViewbasics extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50])
        }
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(rowData) {
        return (
            <View style={{height: 30, flex: 1}}>
                <Text>{rowData}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView

                removeClippedSubviews={false}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            ></ListView>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    cellStyle: {
        flex: 1,
        height: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: 'red',
    }
});