import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import AttendanceComponent from './AttendaceComponent'

export default class Attendance extends Component {
    render() {
        const points = this.getPointsGotten()
        const pointsAvailable = this.getMaxPoints()
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Total for this period: {points} (max: {pointsAvailable})</Text>
                    <Text style={styles.subHeaderText}>Attendance Days</Text>
                    <ScrollView>
                        {
                            this.state.attendance.map((item, index) => {
                                return (
                                    <View key={item.id}>
                                        <AttendanceComponent
                                            description={item.description}
                                            pointsAvailable={item.pointsAvailable}
                                            pointsGotten={item.pointsGotten}
                                        />
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View></View>
            </View>
        )
    }

    getMaxPoints = () => {
        var sum = '0'
        for (var i = 0; i < this.state.attendance.length; i++) {
            sum = parseInt(sum) + parseInt(this.state.attendance[i].pointsAvailable)
        }
        return sum
    }

    getPointsGotten = () => {
        var sum = '0'
        for (var i = 0; i < this.state.attendance.length; i++) {
            sum = parseInt(sum) + parseInt(this.state.attendance[i].pointsGotten)
        }
        return sum
    }

    constructor(props) {
        super(props)

        this.getMaxPoints = this.getMaxPoints.bind(this)
        this.getPointsGotten = this.getPointsGotten.bind(this)

        this.state = {
            attendance: [
                { 'id': 1, 'description': '23/8', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 2, 'description': '25/8', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 3, 'description': '30/8', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 4, 'description': '6/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 5, 'description': '8/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 6, 'description': '13/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 7, 'description': '20/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 8, 'description': '22/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 9, 'description': '27/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 10, 'description': '4/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 11, 'description': '6/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 12, 'description': '11/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 13, 'description': '25/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 14, 'description': '1/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 15, 'description': '3/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 16, 'description': '8/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 17, 'description': '15/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 18, 'description': '17/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 19, 'description': '22/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 20, 'description': '29/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 21, 'description': '1/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 22, 'description': '6/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 23, 'description': '13/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                { 'id': 24, 'description': '15/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
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
        fontSize: 20
    },
    subHeaderText: {
        width: 300,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        color: 'blue'
    },
    logo: {
        width: 50,
        resizeMode: 'contain',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,
        height: 60
    }
})

