import React from 'react';
import {
    View,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux/es/redux";
import reducer from './reducers';
import History from "./components/History";
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import AddEntry from "./components/AddEntry";
import {purple, white} from "./utils/colors";
import {Constants} from 'expo';
import EntryDetail from "./components/EntryDetail";
import Live from "./components/Live";

const Tabs = createBottomTabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: (({tintColor}) => <Ionicons name={'ios-bookmark'}
                                                    size={30}
                                                    color={tintColor}/>),
        }
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: (({tintColor}) => <FontAwesome name={'plus-square'}
                                                       size={30}
                                                       color={tintColor}/>),
        }
    },
    Live: {
        screen: Live,
        navigationOptions: {
            tabBarLabel: 'Live',
            tabBarIcon: (({tintColor}) => <FontAwesome name={'tachometer'}
                                                       size={30}
                                                       color={tintColor}/>),
        }
    }
}, {
    navigationOptions: {
        header: null,
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowRadius: 6,
            shadowOpacity: 1,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3,
            },
        }
    }
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    EntryDetail: {
        screen: EntryDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});

const AppContainer = createAppContainer(MainNavigator);


function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent
                       backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

class App extends React.Component {

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={purple}
                                    barStyle={'light-content'}/>
                    <AppContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default App;