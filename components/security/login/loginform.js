//import liraries
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, 
    Alert, Button ,StyleSheet ,StatusBar, Keyboard } from 'react-native';
import SecurityBaseComponent from '../../base/security.base';

// create a component
export default class LoginFormComponent extends SecurityBaseComponent {
    constructor() {
        super();
        let self = this;
        this.property = { 
            value: '' , 
            touched: false, 
            required: true, 
            update(val) {
                this.value = val; 
                this.touched = true;
                self.forceUpdate();
            } 
        };
        this.state = 
        {
            username: { ...this.property }, 
            password: { ...this.property }, 
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='default' 
                            returnKeyType="next" 
                            placeholder='Username' 
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            onChangeText={(val) => this.state.username.update(val)} />
                { this.renderError("username") }
                <TextInput style = {styles.input}   
                            returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                            placeholder='Password' 
                            placeholderTextColor='rgba(225,225,225,0.7)' 
                            secureTextEntry
                            onChangeText={(val) => this.state.password.update(val)} />
                { this.renderError("password") }
                <TouchableOpacity style={styles.buttonPrimary} onPress={this.login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonSecondary} onPress={this.register}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity> 
            </View>
        );
    }

    login = () => {
        Alert.alert(`${this.state.username.value} ${this.state.password.value}`);
        Keyboard.dismiss();
    };

    register = () => {

    };

    renderError(id) {
        if (this.state[id].required) {
            if (this.state[id].touched){
                if (this.state[id].value == '') {
                    return <Text style={styles.errorText}>Is Required</Text>;
                }
            }
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20,
     paddingBottom: 30
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginTop: 10,
        padding: 15,
        color: '#fff'
    },
    buttonPrimary:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginTop: 10,
    },
    buttonSecondary:{
        backgroundColor: '#6AA',
        paddingVertical: 15,
        marginTop: 10,
    },
    loginText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18
    }, 
    registerText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14
    }, 
    errorText:{
        marginTop: 5,
        color: '#f00'
    }
});