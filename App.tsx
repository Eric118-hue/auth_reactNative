import { Provider, useSelector } from 'react-redux';
import Login from './src/screens/auth/login/login';
import Register from './src/screens/auth/register/register';
import ForgotPassword from './src/screens/auth/forgot-password/forgotPassword';
import { store } from './src/redux/store';
import { selectUserToken } from './src/redux/authSlice';
import HomeNavigation from './src/navigation/homeNavigation';
import AuthNavigation from './src/navigation/authNavigation';
import RootNavigation from './src/navigation';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/home/home';

function App(): React.JSX.Element {  
 
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootNavigation /> 
        </NavigationContainer> 
    </Provider>
  );
  // return ( 
  //   <HomeScreen />
  // )
}


export default App;
