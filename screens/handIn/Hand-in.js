import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import HandInComponent from './HandInComponent'
import ReviewComponent from './ReviewComponent'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        handIns: store.class.selected.handIns,
        selected: store.class.selected,
        fetched: store.class.fetched,
        fetching: store.class.fetching
    }
})
export default class HandIn extends Component {
    render() {
        let doRender = ''

        const points = this.getPointsGotten()
        const pointsAvailable = this.getMaxPoints()

        if (this.props.selected === null) {
            doRender = <Text>Loading...</Text>
        } else {
            doRender = (
                this.props.handIns.map((item, index) => {
                    if (item.spType === 'Hand-in') {
                        return (
                            <View key={item.id}>
                                <HandInComponent
                                    description={item.description}
                                    pointsAvailable={item.pointsAvailable}
                                    pointsGotten={item.pointsGotten}
                                />
                            </View>
                        )
                    } else {
                        return (
                            <View key={item.id}>
                                <ReviewComponent
                                    description={item.description}
                                    pointsAvailable={item.pointsAvailable}
                                    pointsGotten={item.pointsGotten}
                                />
                            </View>
                        )
                    }
                })
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Total for this period: {points} (max: {pointsAvailable})</Text>
                    <Text style={styles.subHeaderText}>Period Hand-in Assignments</Text>
                    <ScrollView>
                        { doRender }
                    </ScrollView>
                </View>
                <View></View>
            </View>
        )
    }

    getMaxPoints = () => {
        var sum = '0'
        for (var i = 0; i < this.props.handIns.length; i++) {
            sum = parseInt(sum) + parseInt(this.props.handIns[i].pointsAvailable)
        }
        return sum
    }

    getPointsGotten = () => {
        var sum = '0'
        for (var i = 0; i < this.props.handIns.length; i++) {
            sum = parseInt(sum) + parseInt(this.props.handIns[i].pointsGotten)
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