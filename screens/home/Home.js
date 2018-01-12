import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

import * as classActions from '../../actions/classActions'
import * as userActions from '../../actions/userActions'
import LoadingComponent from '../Loading/LoadingComponent'

@connect((store) => {
    return {
        user: store.user.user,
        joke: store.user.joke,
        classList: store.class.class,
        fetching: store.class.fetching,
        selected: store.class.selected
    }
})
export default class Home extends Component {
    render() {
        const { state } = this.props.navigation;
        let doRender = null
        if (this.props.fetching) {
            doRender = (<LoadingComponent />)
        } else {
            doRender = (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/MySchool.png')}
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Logged in as:</Text>
                        <Text style={styles.formText}>{this.props.user.userName}</Text>
                        <Text style={styles.formText}>userName: {this.props.user.shortHandName}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                navigator.geolocation.getCurrentPosition(
                                    (position) => {
                                        var initialPosition = JSON.stringify(position);
                                        this.setState({ initialPosition });
                                        
                                        if(this.onRegister()){
                                            Alert.alert('Thank you for attending todays lesson')
                                        } else {
                                            Alert.alert('No points available for: "' + this.props.selected._id + '" at this time')
                                        }
                                    },
                                    (error) => Alert.alert(error.message),
                                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                                )
                            }}>

                            <Text style={styles.buttonText2}>Register Attendance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={
                            () => {
                                // this.props.dispatch(userActions.logout())
                                // this.props.dispatch(classActions.logout())
                                this.props.navigation.navigate('Login')
                            }
                        }><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
                    </View>
                    <View style={styles.ContainerBottom}>
                        <Text style={styles.textBottom}>{this.props.joke}</Text>
                        <Image
                            style={styles.logoBottom}
                            source={require('../../assets/newLogo.png')}
                        />
                    </View>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>{doRender}</View>
        )
    }

    onRegister() {
        // let today= new Date().getMonth()+1 +'/'+ new Date().getDate()
        let today= '1/17'
        let tempSelected = {...this.props.selected}
        let doUpdate = false

        tempSelected.attendance.forEach(obj => {
            var temp = new Date(obj.description).getMonth()+1 +'/'+ new Date(obj.description).getDate()
            if(temp == today && obj.pointsGotten == '0'){
                doUpdate= true
                this.props.dispatch(classActions.updateAttendance(tempSelected.id, tempSelected.student, obj.id))
            }
        })
        return doUpdate
    }

    componentDidMount() {
        if (this.props.classList.length === 0) {
            this.props.dispatch(classActions.fetchClasses(this.props.user.shortHandName))
        }
    }

    constructor(props) {
        super(props);

        this.onRegister = this.onRegister.bind(this)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 300,
        marginBottom: -10,
        resizeMode: 'contain'
    },
    title: {
        width: 300,
        textAlign: 'center',
        fontSize: 24
    },
    formContainer: {
        padding: 20
    },
    formTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500'
    },
    formText: {
        textAlign: 'center'
    },
    buttonContainer: {
        padding: 20,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#2980b9',
        padding: 15,
        margin: 10,
        height: 75,
        width: 150,
        justifyContent: 'center',
        borderRadius: 40,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24
    },
    buttonText2: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    },
    ContainerBottom: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    textBottom: {
        textAlign: 'center',
        fontSize: 12,
        opacity: 0.6,
        fontStyle: 'italic'
    },
    logoBottom: {
        marginTop: 10,
        width: 100,
        resizeMode: 'contain'
    },
})
/*Change cph-nm106 with {state.params.name}*/