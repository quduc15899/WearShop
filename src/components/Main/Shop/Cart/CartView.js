import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, StyleSheet, Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import global from '../../../../components/global';
const url = 'http://192.168.0.103:8080/app/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class CartView extends Component {

    gotoDetail(item) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail', { item });
    }
    incrQuantity(itemId) {
        global.incrQuantity(itemId);
    }
    decrQuantity(itemId) {
        global.decrQuantity(itemId);
    }
    removeProduct(itemId) {
        global.removeProduct(itemId);
    }
    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        const { cartArray } = this.props.screenProps;
        const arrTotal = cartArray.map(e => e.item.price * e.quantity);
        const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;

        return (
            <View style={wrapper}>
                <FlatList
                    contentContainerStyle={main}
                    data={cartArray}
                    keyExtractor={item => item.item.id}
                    renderItem={({ item }) => (
                        <View style={product} >
                            <Image source={{ uri: `${url}${item.item.images[1]}` }} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{toTitleCase(item.item.name)}</Text>
                                    <TouchableOpacity onPress={() => this.removeProduct(item.item.id)}>
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{item.item.price}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity onPress={() => this.incrQuantity(item.item.id)}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{item.quantity}</Text>
                                        <TouchableOpacity onPress={() => this.decrQuantity(item.item.id)}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(item.item)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}

                />
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});