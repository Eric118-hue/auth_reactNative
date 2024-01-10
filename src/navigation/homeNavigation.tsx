import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/home/home"

const Stack = createNativeStackNavigator()
const HomeNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='home'
                component={Home}
                options={{
                    title: 'My home',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
         </Stack.Navigator>
    )
}

export default HomeNavigation