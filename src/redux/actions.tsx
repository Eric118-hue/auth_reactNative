import AsyncStorage from "@react-native-async-storage/async-storage"
import { client } from "../helpers/api";
import { UserLogin } from "../@types/types";

export const Init  = () => {
    return async (dispatch: (arg0: { type: string; payload: string; }) => void) => {
        let authToken = await AsyncStorage.getItem('authToken');
        if (authToken !== null) {
            console.log('token fetched');
            dispatch({
                type: 'LOGIN',
                payload: authToken
            })
        }
    }
}


export const Login = (user: UserLogin) => {
    return async (dispatch: (arg0: { type: any; payload: any; }) => void)  => {
       await client.post('/sign-in', user)
        .then(res => {
          const response = res.data.data.token;
          AsyncStorage.setItem('authToken', JSON.stringify(response)).then(() => {
            dispatch({
              type: 'LOGIN',
              payload: response,
            });
          }).catch(err => {
            console.log('Erreur lors du stockage local : ', err);
          });
        })
        .catch(err => {
          console.log('Erreur lors de la requête de connexion : ', err);
        });
  
       
        // await client.post('/sign-in', user)
        //     .then(res => {
        //         let response =  res.data.data.token
        //         // console.log('succes', res.data.data.token);
        //         AsyncStorage.setItem('authToken', JSON.stringify(response))
        //     })
        //     .catch(err => {
        //         console.log('error ', err)
        //     })

        // dispatch({
        //     type: 'LOGIN',
        //     payload: token,
        // })
    }
}

export const Logout = () => {
    return async (dispatch: (arg0: {type: string}) => void) => {
        await AsyncStorage.clear();
        dispatch({
            type: 'LOGOUT'
        })
    }
}