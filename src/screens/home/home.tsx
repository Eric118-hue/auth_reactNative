import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { ImageBackground, Switch, Text, TouchableOpacity, View } from "react-native"
import { LoginProps, User } from "../../@types/types"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { Logout } from "../../redux/authActions"
import { CommonActions } from "@react-navigation/native"
import { styles } from "./homeStyle"
import  { Images } from '../../assets/images/images'
import CollectionScreen from "../collections/collections"

// const Home: React.FC<LoginProps> = ({navigation}) =>  {
  const HomeScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // const [userConnected, setUserConnected] = useState<User>()
    // useEffect( () => {
    //     getUserConnected()
    // }, [])

    // const dispatch = useDispatch<AppDispatch>()

    // const getUserConnected = async () => {
    //     try {
    //       const userString = await AsyncStorage.getItem('user');
    //       if (userString) {
    //         const user: User = JSON.parse(userString);
    //         setUserConnected(user);
    //         console.log('ato  ', user);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching user:', error);
    //     }
    //   };

  //   async function token() {
  //       let toke = await AsyncStorage.getItem('authToken')
  //       let use =  await AsyncStorage.getItem('user')
  //       console.log('tokkkenenne ', toke);
  //       console.log('tokkkenenne ', use);
  //  }

    // async function handleLogout() {
    //     // if (userConnected?.ids) {
    //     //     await dispatch(Logout(userConnected.ids))
    //     //     await AsyncStorage.clear()
    //     //     navigation.dispatch(
    //     //         CommonActions.navigate({
    //     //             name: 'Login',
    //     //         })
    //     //     )
    //     // } 

    //     await AsyncStorage.clear()
    //     dispatch(Logout(6))
    //     console.log(' Logout success ');
        
    // }

    return (
      <View>
        <CollectionScreen />
        <View style={{backgroundColor: 'red'}}>

        </View>
      </View>
    )
}

export default HomeScreen