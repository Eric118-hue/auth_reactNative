import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { LoginProps, User } from "../../@types/types"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { Logout } from "../../redux/authActions"
import { CommonActions } from "@react-navigation/native"

const Home: React.FC<LoginProps> = ({navigation}) =>  {
    const [userConnected, setUserConnected] = useState<User>()
    useEffect( () => {
        getUserConnected()
    }, [])

    const dispatch = useDispatch<AppDispatch>()

    const getUserConnected = async () => {
        try {
          const userString = await AsyncStorage.getItem('user');
          if (userString) {
            const user: User = JSON.parse(userString);
            setUserConnected(user);
            console.log('ato  ', user);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };

    async function token() {
        let toke = await AsyncStorage.getItem('authToken')
        let use =  await AsyncStorage.getItem('user')
        console.log('tokkkenenne ', toke);
        console.log('tokkkenenne ', use);
   }

    async function handleLogout() {
        // if (userConnected?.ids) {
        //     await dispatch(Logout(userConnected.ids))
        //     await AsyncStorage.clear()
        //     navigation.dispatch(
        //         CommonActions.navigate({
        //             name: 'Login',
        //         })
        //     )
        // } 

        await AsyncStorage.clear()
        dispatch(Logout(6))
        console.log(' Logout success ');
        
    }

    return (
      <>
        <TouchableOpacity onPress={handleLogout}>
            <Text>LogOut</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={token}>
             <Text>Press Here</Text>
         </TouchableOpacity>
      </>
    )
}

export default Home