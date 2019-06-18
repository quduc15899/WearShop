import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const AppNavigator = createStackNavigator(
    {
        "HomeView": {
            screen: HomeView,

        },
        "ListProduct": {
            screen: ListProduct,
        },
        "ProductDetail": {
            screen: ProductDetail,
        }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Home extends Component {
    render() {
        return <AppContainer
            screenProps={{
                types: this.props.types,
                topProducts: this.props.topProducts
            }}

        />;
    }
}