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
            dataSource: ds.cloneWithRows(['Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5', 'Row 6']),
            title: 'First Page, Click To Jump'
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
    changeStyle() {
        this.setState({
            title: this.state.title === 'First Page, Click To Jump' ? 'Continue' : 'First Page, Click To Jump'
        });
    }
    render() {
        return (
            <View style={styles.container} >
                <ListView style={{marginTop: 66, backgroundColor: 'transparent'}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.cell}>{rowData}</Text>}
                />
<<<<<<< HEAD
                <Text style={styles.text} onPress={this.clickToJump.bind(this)}>
                  这是{this.state.change ? "第一页" : "第而页"}，点击跳转
                  {this.nameList[0]}
                </Text>
=======
                <View style={styles.textContainer}>
                    <Text style={styles.text} onPress={this.clickToJump.bind(this)}>
                        {this.state.title}
                    </Text>
                    <Text style={styles.text} onPress={this.changeStyle.bind(this)} >
                        Click To Change Style
                    </Text>
                </View>
>>>>>>> 30e6656e9abd437e20182a786ca320cb2f0eae6a
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
        // marginBottom: 100
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'antiquewhite',
        marginBottom: 150
    },
    text: {
        alignItems: 'center',
        fontSize: 25,
        color: 'green',
        justifyContent: 'center',
        marginTop: 10
    },
    cell: {
        fontSize: 20,
        width: screen.width,
        height: 44,
        backgroundColor: 'lightgreen',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 1
    }
});

export default FirstPage;
