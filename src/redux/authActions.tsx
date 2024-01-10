import { createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { client } from "../helpers/api";

export const Login = createAsyncThunk(
    'auth/login',
    async (user: { username: string, password: string }, { rejectWithValue }) => {
        try {
            const response = await client.post('/sign-in', user)
            const token = response.data.token;
            const userLog = response.data.user
            await AsyncStorage.setItem('authToken', JSON.stringify(token))
            await  AsyncStorage.setItem('user', JSON.stringify(userLog))
            
           

            //Fixing the error non serializable value in payload.headers
            // const serializableHeaders = {
            //     'access-control-allow-origin': response.headers['access-control-allow-origin'],
            //     'content-type': response.headers['content-type'],
            // };

            
            console.log('login success', userLog);
            console.log('login success token', token);

            
            return response.data
        } catch (error:any ) {
            console.log('error login ', error.response.data);
            return rejectWithValue(error.response.data)
        }

    }
)

export const Logout = createAsyncThunk(
    'auth/logout',
    async (ids: number) => {
        try {
            console.log('mis id ', ids);
            const response = await client.post('/sign-out', {ids})
            AsyncStorage.clear()
            console.log('logouut out success, ', response)
        } catch (error: any) {
            console.log('error login ', error.response.data);
        }
    }
)