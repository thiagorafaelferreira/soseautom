import Presentation from './pages/Presentation';
import Login from './pages/Login';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Apresentation: Presentation,
    Login: Login,
  })
);

export default Routes;