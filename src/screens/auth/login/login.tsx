
import React, {useState} from 'react'
import { 
    Button, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    View, 
    ActivityIndicator 
} from 'react-native'
import {styles} from '../../../styles/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../../redux/authActions';
import { AppDispatch } from '../../../redux/store';
import { LoginProps, UserLogin } from '../../../@types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC<LoginProps>  = ({ navigation }) => {
    const [user, setUser] = useState<UserLogin>({
        username:'',
        password: ''
    })

    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: any) => state.auth)
   
    const handleChange = (key: string, value: string) => {
        setUser((prevUser: UserLogin) => (
            {
                ...prevUser,
                [key]: value,
            }
        ))
    }

    const handleLogin = async () => {
        dispatch(Login(user))
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
            { error?.data?.username != null && <Text style={{color: 'red'}}>{error?.data?.username}</Text>} 
            <TextInput 
                style={styles.border} 
                secureTextEntry={true} 
                onChangeText={(text) => handleChange('password', text)}
                placeholder="Password"
                value={user?.password}
            />
            { error?.data?.password != null && <Text style={{color: 'red'}}>{error?.data?.password}</Text>} 
            { error?.message !== 'Validation errors' && <Text style={{color: 'red'}}>{error?.message}</Text>}  

            <Text 
                style={styles.txt}
                onPress={() => navigation.navigate('forgotpassword')}
            > Forgot Password
            </Text>
            <View style={styles.btn}>
                {
                    !loading ? (
                        <Button
                        // onPress={this._onPressButton}
                        onPress={handleLogin}
                        title='login'
                        color="#009387"
                    />
                    ) : (
                        <ActivityIndicator size="large" color="#009387" />
                    )
                }
               
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
        </View>
    </View>
  )
}

export default LoginScreen