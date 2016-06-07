import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Text
} from 'react-native';

import FirstPage from './FirstPage';

class ThirdPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserName: null,
            UserAge: null
        }
    }
    componentDidMount() {
        this.setState({
            UserName: this.props.UserName,
            UserAge: this.props.UserAge
        });

        Alert.alert('UserName: ' + this.props.UserName + '\n' + 'UserAge: ' + this.props.UserAge);
    }

    goBackToFirst() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.popToTop();
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} onPress={this.goBackToFirst.bind(this)}>
                    Third Page, Click To Go Back
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'green',
        fontSize: 25,
        justifyContent: 'center'
    }
})

export default ThirdPage;
