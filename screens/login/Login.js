import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, KeyboardAvoidingView, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../utils/cphbusiness.png')}
                    />
                    <Text style={styles.title}>Welcome to CPHBusiness StudyPoints App</Text>
              </View>
                <KeyboardAvoidingView behavior={'padding'} style={styles.formContainer}>
                    <TextInput
                        placeholder={"username"}
                        placeholderTextColor={'black'}
                        returnKeyType={'next'}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        onChangeText={(text) => this.setState({ text })}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input} />
                    <TextInput
                        placeholder={"password"}
                        placeholderTextColor={'black'}
                        secureTextEntry
                        returnKeyType={'go'}
                        onSubmitEditing={() => this.inputIsNotEmpty()}
                        onChangeText={(password) => this.setState({ password })}
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.inputIsNotEmpty()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={styles.logoContainerBottom}>
                    <Image
                        style={styles.logoBottom}
                        source={require('../../utils/cphbusiness_studyware_transparent.png')}
                    />
                </View>
            </View>
        );
    }


    constructor(props) {
        super(props);
        this.state = { text: '', password: '' }
        this.navigateAction = this.navigateAction.bind(this)
        this.inputIsNotEmpty = this.inputIsNotEmpty.bind(this)
    }

    navigateAction = () => {
        this.props.navigation.navigate('Menu', {},
            NavigationActions.navigate({ routeName: 'Home', params: { name: this.state.text } }))
    }

    inputIsNotEmpty = () => {
        const { text } = this.state
        const { password } = this.state

        if(text == '' || password == ''){
            Alert.alert('Username or Password was incorrect')
        } else if(password === 'user' && text === 'user') {
            this.navigateAction()
        } else {
            Alert.alert('Username or Password was incorrect')
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
    },
    logoContainerBottom: {
        alignItems: 'center',
        flexGrow: 1
    },
    logoBottom: {
        width: 300,
        resizeMode: 'contain'
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
    input: {
        height: 40,
        backgroundColor: 'rgba(0,255,255,0.1)',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24
    }
})

export default Login;