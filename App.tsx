import { Provider, useSelector } from 'react-redux';
import Login from './src/screens/auth/login/login';
import Register from './src/screens/auth/register/register';
import ForgotPassword from './src/screens/auth/forgot-password/forgotPassword';
import { store } from './src/redux/store';
import { selectUserToken } from './src/redux/authSlice';
import Home from './src/screens/home/home';
import HomeNavigation from './src/navigation/homeNavigation';
import AuthNavigation from './src/navigation/authNavigation';
import RootNavigation from './src/navigation';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {  
 
  return (
    <Provider store={store}>
        <NavigationContainer>
           <RootNavigation /> 
        </NavigationContainer>
    </Provider>
  );
}


export default App;
