import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "./homeNavigation";
import AuthNavigation from "./authNavigation";
import { selectUserToken } from "../redux/authSlice";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator()


const RootNavigation =  () => {
    // const { storedData } = useAsyncStorage('authToken');
    // const tokenReducer = useSelector(selectUserToken);
    const {authToken} = useSelector((state:any) => state.auth)
    console.log('state global', authToken);
    
    const [storedData, setStoredData] = useState<null | string>(null)

    useEffect(() => {
      get()

    }, [authToken, storedData])

    const get = async () => {
      try {
        const value = await AsyncStorage.getItem('authToken')
        if (value) setStoredData(value)
        console.log('async Storage ato', storedData);
      } catch (error) {
        console.error('useAsyncStorage atoot getItem error:', error)
      }
      
    }

    // console.log('Async Storage:', storedData);
    // console.log('Reducer:', tokenReducer);
  
    return (
      <>
        { !authToken  ?   ( <AuthNavigation /> ) : (  <HomeNavigation /> )} 
      </>
    );
  
  
}

export default RootNavigation