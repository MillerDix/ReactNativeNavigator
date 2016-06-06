import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Alert,
    StyleSheet
} from 'react-native';

import SecondPage from './SecondPage';

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: 'MillerD'
        }
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
                <Text style={styles.text} onPress={this.clickToJump.bind(this)}>
                这是第一页，点击跳转
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
        backgroundColor: '#F5FCFF'
    },
    text: {
        alignItems: 'center',
        fontSize: 25,
        color: 'green',
        justifyContent: 'center'
    }
});

export default FirstPage;
