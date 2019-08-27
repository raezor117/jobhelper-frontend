//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from './loginform';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

// create a component
class Login extends Component {
    render() {
        return (
            <DismissKeyboard>
                <KeyboardAvoidingView behavior="padding" style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <View style={styles.loginContainer}>
                        <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} />
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm />
                    </View>
                </KeyboardAvoidingView>
            </DismissKeyboard>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 250,
        height: 250
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;