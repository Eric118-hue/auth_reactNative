import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/auth/login/login"
import Register from "../screens/auth/register/register"
import ForgotPassword from "../screens/auth/forgot-password/forgotPassword"

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}  
                options={{headerShown:false}}
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
    )
}

export default AuthNavigation