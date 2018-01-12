import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import * as classActions from '../../actions/classActions'

import PCircle from 'react-native-progress-circle'

// TODO!!! Implement https://facebook.github.io/react-native/docs/picker.html --
// -- in the headerContainer for dynamic class picking, and change the showed data in relevant views accordingly
// Line 56 parseFloat to restrict decimals!

@connect((store) => {
    return {
        classList: store.class.class,
        attendance: store.class.selected.attendance,
        handIns: store.class.selected.handIns,
        selected: store.class.selected,
        fetched: store.class.fetched,
        fetching: store.class.fetching,
        student: store.user.user.shortHandName
    }
})
export default class Classes extends Component {
    render() {
        let doRender = null
        if (this.props.fetching) {
            doRender = <Text>Loading</Text>
        } else {
            var pointsAvailable = this.calcMaxPoints()
            var points = this.calcCurrPoints()
            var percentageRequired = (parseInt(this.props.selected.pointsRequired) / parseInt(pointsAvailable)) * 100
            var percentageGained = (parseInt(points) / parseInt(pointsAvailable)) * 100
            doRender = (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Picker style={styles.picker}
                            selectedValue={this.props.selected}
                            itemStyle={styles.pickerItem}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) => { this.props.dispatch(classActions.setSelected(itemValue)) }} >
                            {this.props.classList.map((l, i) => { return <Picker.Item value={l} label={l.id} key={i} /> })}
                        </Picker>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>Available points for this semester: {pointsAvailable}</Text>
                        <Text style={styles.formText}>Required points to pass semester: {parseFloat(percentageRequired).toFixed(0)}% ({this.props.selected.pointsRequired})</Text>
                        <Text style={styles.formText}>Points gained this semester: {points} points</Text>

                        <PCircle
                            percent={percentageGained}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                        >
                            <Text style={{ fontSize: 18 }}>{parseFloat(percentageGained).toFixed(0)}%</Text>
                        </PCircle>
                    </View>
                </View>
            )
            console.log(typeof (percentageGained))
        }
        return (
            <View style={{ flex: 1 }}>{doRender}</View>
        )
    }

    calcMaxPoints(){
        let temp = 0
        this.props.attendance.forEach((item) => {
            temp += parseInt(item.pointsAvailable)
        })
        this.props.handIns.forEach((item) => {
            temp += parseInt(item.pointsAvailable)
        })
        return temp
    }

    calcCurrPoints(){
        let temp = 0
        this.props.attendance.forEach((item) => {
            temp += parseInt(item.pointsGotten)
        })
        this.props.handIns.forEach((item) => {
            temp += parseInt(item.pointsGotten)
        })
        return temp
    }

    getPReq(data){
        let temp = 0
        temp = data * 0.8
        return temp
    }

    constructor(props) {
        super(props);
        this.calcCurrPoints = this.calcCurrPoints.bind(this)
        this.calcMaxPoints = this.calcMaxPoints.bind(this)
        this.getPReq = this.getPReq.bind(this)
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
    },
    picker: {
        width: 200,
        height: 50,
    },
    pickerItem: {
        width: 200,
        textAlign: 'center',
        justifyContent: 'center'
    }
})