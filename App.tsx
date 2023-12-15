import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import Login from './src/screens/auth/login/login';
import Register from './src/screens/auth/register/register';
import ForgotPassword from './src/screens/auth/forgot-password/forgotPassword';
import { store } from './src/redux/new/store';
import { selectUserToken } from './src/redux/new/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/screens/home/home';
import useAsyncStorage from './src/hooks/useAsyncStorage';

const Stack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="login" 
          component={Login}  
          options={{ title: 'Login Page' }}
        />
        <Stack.Screen 
          name="register" 
          component={Register}  
          options={{ title: 'Register now' }} 
        />
        <Stack.Screen 
          name="forgotpassword" 
          component={ForgotPassword} 
          options={{ title: 'Forgot password'}} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

const RootNavigation =  () => {
  const {storedValue} = useAsyncStorage('authToken')

  console.log('fefe ', storedValue);
  
  const tokenReducer = useSelector(selectUserToken)
  console.log('heheheh', tokenReducer);
  
  return (
    <NavigationContainer>
      { storedValue === null ? 
       <AuthScreen /> : <Home /> 
      }
      {/* <AuthScreen /> */}
    </NavigationContainer>
   
  )

}

function App(): React.JSX.Element {

  // let tokenRedux = useSelector(selectUserToken)
// 

  return (
    <Provider store={store}>
      {/* <AuthScreen />
       */}

       <RootNavigation />
    </Provider>
    // <Home></Home>
   
  );
}


export default App;
