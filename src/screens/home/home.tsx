import AsyncStorage from "@react-native-async-storage/async-storage"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"

const Home: React.FC = () =>  {

    useEffect(() => {
    }, [])


        async function handleLogout() {
            await AsyncStorage.clear()
            
            console.log('delete');
            
       }
    
    return (
        <TouchableOpacity onPress={handleLogout}>
            <Text>LogOut</Text>
        </TouchableOpacity>
    )
}

export default Home