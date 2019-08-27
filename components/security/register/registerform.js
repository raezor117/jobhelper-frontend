//import liraries
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, 
    Alert, Button ,StyleSheet ,StatusBar, Keyboard } from 'react-native';
    import SecurityBaseComponent from '../../base/security.base';

// create a component
export default class RegisterFormComponent extends SecurityBaseComponent {
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => self.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Username' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                           returnKeyType="go" ref={(input)=> self.passwordInput = input} 
                           placeholder='Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>
                <TouchableOpacity style={styles.buttonContainer} onPress={self.onButtonPress}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }

    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
        Keyboard.dismiss();
    };
}

const styles = StyleSheet.create({
    container: {
     padding: 30,
     paddingBottom: 50
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }
   
});