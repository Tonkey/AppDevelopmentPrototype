import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import HomeHelp from './homeHelp'
import ClassesHelp from './classesHelp'
import AttendanceHelp from './attendanceHelp'
import HandInHelp from './handInHelp'

export default class HelpPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Please help me!!!!</Text>
          <ScrollView>
              <HomeHelp />
              <ClassesHelp />
              <AttendanceHelp />
              <HandInHelp />
          </ScrollView>
        </View>
      </View>
    )
  }

  constructor(props){
    super(props)

    this.state={
      components: [
        {home: ''},
        {classes: ''},
        {attendance: ''},
        {handIn: ''},
      ]
    }
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
    fontSize: 50
  },
})