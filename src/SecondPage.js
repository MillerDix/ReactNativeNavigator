import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Alert,
    StyleSheet
} from 'react-native';

import ThirdPage from './ThirdPage';

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: null,
            UserAge: '23'
        }
    }
    componentDidMount() {
        // 接收第一页传来的数据并更新
        this.setState({
            UserName: this.props.UserName
        });
        // Alert.alert(this.props.UserName ? this.props.UserName : '为空');
    }
    //点击事件
    clickToJump() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                title: 'ThirdPage',
                component: ThirdPage,
                params: {
                    UserName: this.state.UserName,
                    UserAge: this.state.UserAge
                }
            });
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} onPress={this.clickToJump.bind(this)} >
                这是第二页，点击跳转
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
        color: 'green',
        fontSize: 25
    }
});

export default SecondPage;
