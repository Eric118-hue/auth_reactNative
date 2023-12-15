
import React, {useState} from 'react'
import { Button, Text, TouchableOpacity, TextInput, View } from 'react-native'
import {styles} from '../../../styles/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../../redux/new/authActions';
import { AppDispatch } from '../../../redux/new/store';
import { LoginProps, UserLogin } from '../../../@types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC<LoginProps>  = ({ navigation }) => {
    const [user, setUser] = useState<UserLogin>({
        username:'',
        password: ''
    })


    const handleChange = (key: string, value: string) => {
        setUser((prevUser: any) => {
            // if (prevUser) {
                return {
                    ...prevUser,
                    [key]: value,
                };
            // }
            return prevUser;
        })
    }

    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = () => {
        dispatch(Login(user))
    }

   async function token() {
        let toke = await AsyncStorage.getItem('authToken')
        let use =  await AsyncStorage.getItem('user')
        console.log('tokkkenenne ', toke);
        console.log('tokkkenenne ', use);
   }

   async function del() {
        await AsyncStorage.clear()

        console.log('delete');
        
   }
   
  return (
    <View  style={styles.container}>
        <Text style={styles.textLogin}>CAMTRACK </Text>
        <View style={styles.loginContainer}>
            <TextInput 
                style={styles.border}  
                placeholder="Email"
                onChangeText={(text) => handleChange('username', text)}
                value={user?.username}
            />
            <TextInput 
                style={styles.border} 
                secureTextEntry={true} 
                onChangeText={(text) => handleChange('password', text)}
                placeholder="Password"
                value={user?.password}
            />
            <Text 
                style={styles.txt}
                onPress={() => navigation.navigate('forgotpassword')}
            > Forgot Password
            </Text>
            <View style={styles.btn}>
                <Button
                    // onPress={this._onPressButton}
                    onPress={handleLogin}
                    title="Login"
                    color="#009387"
                />
            </View>
            <View style={styles.socialMedia}>
                <Icon
                    // onPress={}
                    size={35}
                    color='#009387'
                    name="facebook-square"
                />
                <Icon
                    // onPress={}
                    size={35}
                    name="linkedin-square"
                    color='#009387'
                />
                <Icon
                    // onPress={}
                    size={35}
                    name="whatsapp"
                    color='#009387'
                />
                <Icon
                    // onPress={}
                    size={35}
                    name="google"
                    color='#009387'
                />
            </View>

            <Text>Haven't an account? 
                <Text 
                    style={styles.txt}
                    onPress={() => navigation.navigate('register')}
                > Register now  {user?.username}  {user?.password}</Text>
            </Text>
            <TouchableOpacity onPress={token}>
                <Text>Press Here</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={del}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen