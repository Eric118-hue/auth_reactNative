import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../helpers/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = createAsyncThunk(
    'auths/login',
    async (user: { username: string, password: string }) => {
        try {
            const response = await client.post('/sign-in', user)
            const token = response.data.token;
            const userLog = response.data.user
            //Fixing the error non serializable value in payload.headers
            // const serializableHeaders = {
            //     'access-control-allow-origin': response.headers['access-control-allow-origin'],
            //     'content-type': response.headers['content-type'],
            // };

            await AsyncStorage.setItem('authToken', JSON.stringify(token))
            await  AsyncStorage.setItem('user', JSON.stringify(userLog))
            console.log('login success', token);
            // return {
            //     data: response.data,
            //     headers: serializableHeaders,
            // };
            // console.log(response.data.token);
            
            return response.data
        } catch (error ) {
            console.log('error login ', error);
        }

    }
)

export const Logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const response = await client.post('/sign-out')

            console.log('logouut out success, ', response)
        } catch (error) {
            console.log('error login ', error);
        }
    }
)