import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';



const { width, height } = Dimensions.get('window');
const url = 'http://192.168.0.103:8080/app/images/type/';

export default class Category extends Component {
    gotoListProduct() {
        const { navigation } = this.props;
        navigation.navigate('ListProduct');
    }
    render() {
        const { types } = this.props;
        const { wrapper, textStyle, imageStyle, itemName } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <SwiperFlatList
                        showPagination
                        autoplay
                        autoplayDelay={2}
                        autoplayLoop
                    >
                        {types.map(type => (
                            <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={type.id}>
                                <ImageBackground
                                    style={imageStyle}
                                    source={{ uri: `${url}${type.image}` }}
                                >
                                    <Text style={itemName}>{type.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </SwiperFlatList>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth * 465) / 933;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        height: height * 0.28,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 3,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    },
    itemName: {
        position: 'absolute',
        bottom: 0,
        top: imageHeight / 2,
        left: (width / 2) - 65,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Avenir',
        fontSize: 20,
    }
});


