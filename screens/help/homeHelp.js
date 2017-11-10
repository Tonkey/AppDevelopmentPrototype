import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HomeHelp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>HomePage Help</Text>
        </View>
        <View>
            <Text>On the Home page you will find info stating who is logged in</Text>
            <Text>You will also find a button labeled "Registration", which is used to register
            attendance. The Register button requires access to your phones GPS and the GPS to be turned on</Text>
            <Text>Lastly you will find a button labeled "Logout" which logs the current user out of the app</Text>
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