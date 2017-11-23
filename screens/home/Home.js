import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        user: store.user.user,
        joke: store.user.joke
    }
})
export default class Home extends Component {
    render() {
        const { state } = this.props.navigation;
        return (
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
                                  this.setState({initialPosition});
                                  Alert.alert('Thank you for attending todays lesson')
                                },
                                (error) => Alert.alert(error.message),
                                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
                              )
                        }}>
                        
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
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

    onRegister = () => {
        this.props.navigator.geolocation.getCurrentPosition(
            (position) => {
              var initialPosition = JSON.stringify(position);
              this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
          )
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
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24
    },
    ContainerBottom: {
        flex:1,
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