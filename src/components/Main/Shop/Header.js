import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        const { wrapper, row1, textInput, icon, title } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={title}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder='What do you want to buy ?'
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 20,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 5

    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});