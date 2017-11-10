import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class attendanceHelp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>AttendancePage Help</Text>
      </View>
      <View>
      <Text>On the Attendance Page you will find an overview of your attendance for the class selected on the Classes page,
      including how many Study Points you have been rewarded, and how many Study Points are available from attendance</Text>
      <Text>You will also see a list of all the possible dates where you can get Study Points for attendance, for the class selected on the Classes page</Text>
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