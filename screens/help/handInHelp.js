import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HandInHelp extends Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Hand-InPage Help</Text>
        </View>
        <View>
            <Text>On the Hand-In page you will find an overview of your hand-in assignments for the class selected on the Classes page</Text>
            <Text>The overview shows you the name of the hand-in, the amount of Study Points you have been rewarded for the hand-in, and how many Study Points you can get for the hand-in</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      headerContainer: {
        flex: 1,
        padding: 10,
      },
      headerText: {
        width: 300,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20
      },
})