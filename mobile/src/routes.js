import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './pages/Profile';
import Main from './pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Profile,
    })
);

export default Routes;