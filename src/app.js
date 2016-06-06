import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Alert,
    Navigator
} from 'react-native';

import FirstPage from './FirstPage';

class NavigationTest extends Component {
    renderNavBar() {
        const alertMessage = 'WTF';
        const styles = {
            button: {
                flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'
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
                        <TouchableOpacity style={styles.button} onPress={() => {}} >
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
            <Navigator.NavigationBar // TODO: test here
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
    }
}

AppRegistry.registerComponent('NavigationTest', () => NavigationTest);
