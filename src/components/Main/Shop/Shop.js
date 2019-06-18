import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import global from '../../../components/global';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

import Header from './Header';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';



export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: []
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);

    }
    componentDidMount() {
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProducts: product });
            });
        getCart()
            .then(cartArray => this.setState({ cartArray }));
    }
    addProductToCart(item) {
        this.setState(
            { cartArray: this.state.cartArray.concat({ item, quantity: 1 }) },
            () => saveCart(this.state.cartArray)
        );
    }
    incrQuantity(itemId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.item.id != itemId) return e;
            return { item: e.item, quantity: e.quantity + 1 };
        });
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray));
    }
    decrQuantity(itemId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.item.id != itemId) return e;
            return { item: e.item, quantity: e.quantity - 1 };
        });
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray));
    }
    removeProduct(itemId) {
        const newCart = this.state.cartArray.filter(e => e.item.id != itemId);
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { selectedTab, types, topProducts, cartArray } = this.state;
        const { iconStyle } = styles;

        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title='Home'
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Home types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title='Cart'
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title='Search'
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title='Contact'
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30
    }
});