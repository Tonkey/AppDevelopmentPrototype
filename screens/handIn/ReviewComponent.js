import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class ReviewComponent extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo3.png')} />
                <View style={{ padding: 10 }}>
                    <Text>{this.props.description} : {this.props.pointsGotten}</Text>
                    <Text>Maximum for this task: {this.props.pointsAvailable}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,
        height: 60
    },
    logo: {
        width: 50,
        resizeMode: 'contain',
    },
})