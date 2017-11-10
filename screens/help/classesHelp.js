import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ClassesHelp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>ClassesPage Help</Text>
        </View>
        <View>
            <Text>On the Classes Page you will find the name of the currently selected class.</Text>
            <Text>The available, required and accumulated Study Points for the selected class.</Text>
            <Text>And you will find a "Progress Circle", showing you your current progress towards the available Study points for the selected Class</Text>
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