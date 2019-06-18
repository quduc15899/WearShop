import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';


const AppNavigator = createStackNavigator(
    {
        "Cart": {
            screen: CartView
        },
        "ProductDetail": {
            screen: ProductDetail
        }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    });
const AppContainer = createAppContainer(AppNavigator);
export default class Cart extends Component {
    render() {
        return (
            <AppContainer 
                screenProps={{
                    cartArray:this.props.cartArray
                }}
            />
        );
    }
};