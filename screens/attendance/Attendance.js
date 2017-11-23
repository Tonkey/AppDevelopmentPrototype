import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import AttendanceComponent from './AttendaceComponent'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        attendance: store.class.selected.attendance,
        selected: store.class.selected,
        fetched: store.class.fetched,
        fetching: store.class.fetching
    }
})
export default class Attendance extends Component {
    render() {
        const points = this.getPointsGotten()
        const pointsAvailable = this.getMaxPoints()
        let doRender = ''


        if(this.props.selected === null){
            doRender = <Text>Loading</Text>
        } else {
            doRender= (<ScrollView>
                {
                    this.props.attendance.map((item, index) => {
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
                </ScrollView>)
        }

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Total for this period: {points} (max: {pointsAvailable})</Text>
                    <Text style={styles.subHeaderText}>Attendance Days</Text>
                    {doRender}
                </View>
                <View></View>
            </View>
        )
    }

    componentDidMount() {
        console.log('attendance did mount')
    }
    

    getMaxPoints = () => {
        var sum = '0'
        for (var i = 0; i < this.props.attendance.length; i++) {
            sum = parseInt(sum) + parseInt(this.props.attendance[i].pointsAvailable)
        }
        return sum
    }

    getPointsGotten = () => {
        var sum = '0'
        for (var i = 0; i < this.props.attendance.length; i++) {
            sum = parseInt(sum) + parseInt(this.props.attendance[i].pointsGotten)
        }
        return sum
    }

    constructor(props) {
        super(props)

        this.getMaxPoints = this.getMaxPoints.bind(this)
        this.getPointsGotten = this.getPointsGotten.bind(this)
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

// {
//     this.state.attendance.map((item, index) => {
//         return (
//             <View key={item.id}>
//                 <AttendanceComponent
//                     description={item.description}
//                     pointsAvailable={item.pointsAvailable}
//                     pointsGotten={item.pointsGotten}
//                 />
//             </View>
//         )
//     })
// }