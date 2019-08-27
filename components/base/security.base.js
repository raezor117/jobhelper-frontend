//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class SecurityBaseComponent extends Component {
    BaseLayout = ({ children }) => (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo-dark-bg.png')} />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.formContainer}>
                {children}
            </View>
        </KeyboardAvoidingView>
    );

    
}

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
    }
});