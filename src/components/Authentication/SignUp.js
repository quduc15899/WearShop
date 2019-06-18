import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import register from '../../api/register';


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }
    
    onSuccess() {
        Alert.alert(
            'Success',
            'Sign Up successfully !',
            [
                { text: 'Ok', onPress: this.props.gotoSignIn.bind(this) }
            ],
            { cancelable: false }
        );
    }
    onFail() {
        Alert.alert(
            'Fail',
            'Your email has been used by others !',
            [
                { text: 'Fail', onPress: this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }
    removeEmail() {
        this.setState({ email: '' });
    }
    registerUser() {
        const { name, email, password } = this.state;
        register(email, name, password)
            .then(res => {
                if (res == 'THANH_CONG') this.onSuccess();
                else this.onFail();
            });
    }
    render() {
        const { inputStyle, bigBtnStyle, bigBtnTextStyle } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your name'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your email'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your password'
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry

                />
                <TextInput
                    style={inputStyle}
                    placeholder='Re-enter your password'
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                    secureTextEntry

                />
                <TouchableOpacity style={bigBtnStyle} onPress={this.registerUser.bind(this)}>
                    <Text style={bigBtnTextStyle} >SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigBtnStyle: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigBtnTextStyle: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        color: '#fff'
    }
});