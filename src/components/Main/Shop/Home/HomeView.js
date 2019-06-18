import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        const { types, topProducts } = this.props.screenProps;
        const { navigation } = this.props;
        return (

            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation={navigation} types={types} />
                <TopProduct navigation={navigation} topProducts={topProducts} />
            </ScrollView>
        );
    }
}
