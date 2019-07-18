import Presentation from './pages/Presentation';
import Login from './pages/Login';
import Temp from './pages/Temp';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Apresentation: Presentation,
    Login: Temp,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    }
  },  
));

export default Routes;