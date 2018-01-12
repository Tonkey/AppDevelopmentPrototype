import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'

export default class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Please wait while we discuss with the poeple in the back!</Text>
                <ActivityIndicator style={styles.indicator} size={100} color="#0000ff" />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    indicator: {
        alignItems: 'center'
    }
})