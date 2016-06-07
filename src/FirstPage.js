import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    ListView,
    Dimensions,
    Alert,
    StyleSheet
} from 'react-native';

import SecondPage from './SecondPage';
const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
class FirstPage extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            UserName: 'MillerD',
            dataSource: ds.cloneWithRows(['第一行', '第二行'])
        }
        this.nameList = ['ab'];
    }
    // 点击事件
    clickToJump() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                title: 'SecondPage',
                component: SecondPage,
                params: {
                    UserName: this.state.UserName
                }
            });
        }
    }
    render() {
        return (
             <View style={styles.container} >
                <ListView style={{marginTop: 100, marginBottom: 200, backgroundColor: 'blue'}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.cell}>{rowData}</Text>}
                />
                <Text style={styles.text} onPress={this.clickToJump.bind(this)}>
                  这是{this.state.change ? "第一页" : "第而页"}，点击跳转
                  {this.nameList[0]}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 100
    },
    text: {
        alignItems: 'center',
        fontSize: 25,
        color: 'green',
        justifyContent: 'center'
    },
    cell: {
        fontSize: 20,
        width: screen.width,
        height: 44,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1
    }
});

export default FirstPage;
