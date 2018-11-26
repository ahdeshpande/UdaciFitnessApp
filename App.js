import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import AddEntry from "./components/AddEntry";
import {Provider} from "react-redux";
import {createStore} from "redux/es/redux";
import reducer from './reducers';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <AddEntry/>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#e53224',
        margin: 10,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',

    },
});
