import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Alert,
    Image,
    Navigator
} from 'react-native';

import FirstPage from './FirstPage';

class NavigationTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            logo: '1'
        }
    }
    clickLogo() {
        this.setState({
            logo: '2'
        });
    }

    renderNavBar() {
        // fuck this
        var that = this;
        const alertMessage = 'Right Button Alert';
        const styles = {
            button: {
                flex: 1, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'
            },
            buttonText: {
                fontSize: 18, color: '#FFFFFF', fontWeight: '400'
            },
            title: {
                flex: 1, alignItems: 'center', justifyContent: 'center',
            }
        }
        var routeapper = {
            RightButton(route, navigator, index, navState) {
                return (
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(alertMessage)} >
                        <Text style={styles.buttonText}>Alert</Text>
                    </TouchableOpacity>
                );
            },
            LeftButton(route, navigator, index, navState) {
                if(index > 0) {
                    return (
                        <TouchableOpacity style={styles.button} onPress={() => navigator.pop()} >
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity style={styles.button} onPress={() => that.clickLogo()} >
                            <Text style={styles.buttonText}>Logo</Text>
                        </TouchableOpacity>
                    );
                }
            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>{route.title ? route.title : 'FirstPage'}</Text>
                    </View>
                );
            }
        }
        return (
            <Navigator.NavigationBar
                style={{
                    alignItems: 'center',
                    backgroundColor: '#55ACEE',
                    shadowOffset: {
                        width: 1,
                        height: 0.5
                    },
                    shadowColor: '#55ACEE',
                    shadowOpacity: 0.8,
                }}
                routeMapper={routeapper}
            />
        );
    }

    render() {
        if(this.state.logo == '1') {
            let defaultName = 'FirstPage';
            let defaultComponent = FirstPage;
            return (
                <Navigator
                    initialRoute = {{ name: defaultName, component: defaultComponent }}
                    // configureScene={(route) => {
                    //     return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    // }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        if(route.component) {
                            return <Component {...route.params} navigator={navigator} />
                        }
                    }}
                    navigationBar={this.renderNavBar()}
                />
            );
        } else {
            return (
                <View style={styles.container} >
                    <Image source={require('../images/motocycle.png')} />
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({logo: '1'})} >
                        <Text style={styles.text}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'darkcyan',
        marginTop: 5
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'darkcyan',
        fontSize: 25,
        fontWeight: '400',
    }
});

AppRegistry.registerComponent('NavigationTest', () => NavigationTest);
