import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList 
} from 'react-native';


const url = 'http://192.168.0.103:8080/app/images/product/';
export default class TopProduct extends Component{
    gotoProductDetail(item) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail',{item});
    }
    render(){
        
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice 
        } = styles;
        const {topProducts} = this.props;
        return(
            <View style={container}>
               <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <FlatList
                    contentContainerStyle={body}
                    data={topProducts}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={ ({item}) => (
                        <TouchableOpacity style={productContainer} onPress={ () => this.gotoProductDetail(item)}>
                            <Image 
                                    // source={{ uri: 'http://192.168.15.2:8080/app/images/product/' + item.images[0] }} 
                                    source={{ uri: `${url}${item.images[0]}` }} 
                                    style={productImage} 
                                    />
                            <Text style={produceName}>{item.name.toUpperCase()}</Text>
                            <Text style={producePrice}>{item.price} $</Text>
                        </TouchableOpacity>
                    )}
                    
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        borderWidth: 1,
        borderColor: '#D3D3CF',
        borderRadius: 5,
        margin:10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
