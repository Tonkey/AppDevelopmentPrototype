import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'
 
export default class Classes extends Component {
  render() {
      const points = 55
      const pointsRequired = 80
      const pointsAvailable = 100
      const percentageRequired = (pointsRequired / pointsAvailable) * 100
      const percentageGained = (points / pointsAvailable)
    return (
      <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>CPH-l17dat4ja1e</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formText}>Available points for this semester: {pointsAvailable}</Text>
                <Text style={styles.formText}>Required points to pass semester: {percentageRequired}% ({pointsRequired} points)</Text>
                <Text style={styles.formText}>Points gained this semester: {points} points</Text>
                <Progress.Circle progress={percentageGained} size={150} showsText={true} />
                
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
        alignItems: 'center',
    },
    headerText: {
        width: 300,
        textAlign: 'center',
        fontSize: 24
    },
    formContainer: {
        flex: 10,
        alignItems: 'center',
        padding: 20,
    },
    formText: {
        fontSize: 14,
        marginBottom: 10
    }
})