import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as Progress from 'react-native-progress'
import { connect } from 'react-redux'
import * as classActions from '../../actions/classActions'

// TODO!!! Implement https://facebook.github.io/react-native/docs/picker.html --
// -- in the headerContainer for dynamic class picking, and change the showed data in relevant views accordingly

@connect((store) => {
    return {
        classList: store.class.class,
        selected: store.class.selected,
        fetched: store.class.fetched,
        fetching: store.class.fetching
    }
})
export default class Classes extends Component {
    render() {
        let doRender = null

        if (this.props.fetching) {
            doRender = <Text>Loading</Text>
        } else {
            var percentageRequired = (parseInt(this.props.selected.pointsRequired) / parseInt(this.props.selected.pointsAvailable)) * 100
            // var points = 10 !!! Consider removing this var, as it is refactored out to redux
            var percentageGained = (parseInt(this.props.selected.points) / parseInt(this.props.selected.pointsAvailable))
            doRender = (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Picker style={styles.picker}
                            selectedValue={this.props.selected}
                            itemStyle={styles.pickerItem}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) => { this.props.dispatch(classActions.setSelected(itemValue)) }} >
                            {this.props.classList.map((l, i) => { return <Picker.Item value={l} label={l.value} key={i} /> })}
                        </Picker>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>Available points for this semester: {this.props.selected.pointsAvailable}</Text>
                        <Text style={styles.formText}>Required points to pass semester: {percentageRequired}% ({this.props.selected.pointsRequired})</Text>
                        <Text style={styles.formText}>Points gained this semester: {this.props.selected.points} points</Text>
                        <Progress.Circle progress={percentageGained} size={150} showsText={true} />
                    </View>
                </View>
            )
            console.log(typeof(percentageGained))
        }        
        return (
            <View style={{flex:1}}>{doRender}</View>
        )
    }

    // may not be in use, consider removing function
    isLoading() {
        if (this.props.fetching) {
            return <Text>Loading</Text>
        } else {
            var percentageRequired = (parseInt(this.props.selected.pointsRequired) / parseInt(this.props.selected.pointsAvailable)) / 100
            var points = 10
            var percentageGained = (points / parseInt(this.props.selected.pointsAvailable))
            return (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Picker style={styles.picker}
                            selectedValue={this.props.selected}
                            itemStyle={styles.pickerItem}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) => { this.props.dispatch(classActions.setSelected(itemValue)) }} >
                            {this.props.classList.map((l, i) => { return <Picker.Item value={l} label={l.value} key={i} /> })}
                        </Picker>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>Available points for this semester: {this.props.selected.pointsAvailable}</Text>
                        <Text style={styles.formText}>Required points to pass semester: {percentageRequired}% ({this.props.selected.pointsRequired})</Text>
                        <Text style={styles.formText}>Points gained this semester: {this.props.selected.points} points</Text>
                        <Progress.Circle progress={percentageGained} size={150} showsText={true} />
                    </View>
                </View>
            )
        }
    }

    componentWillMount() {
        if (this.props.classList.length === 0) {
            this.props.dispatch(classActions.beginFetch())
        }
    }

    componentDidMount = () => {
        if (this.props.classList.length === 0) {
            this.props.dispatch(classActions.fetchClass())
        }
    }

    

    constructor(props) {
        super(props);

    }


}

// this.setState({ selected: itemValue })
// this.state.percentageGained = (itemValue.points / itemValue.pointsAvailable)
// this.state.percentageRequired = (itemValue.pointsRequired / itemValue.pointsAvailable) / 100



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

