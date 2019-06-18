

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';



import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
        "Main": {
            screen: Main
        },
        "Authentication": {
            screen: Authentication
        },
        "ChangeInfo": {
            screen: ChangeInfo
        },
        "OrderHistory": {
            screen: OrderHistory
        },
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    }
)
export const App = createAppContainer(AppNavigator);

