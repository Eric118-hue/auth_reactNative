import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from 'react-native-config';

const apiBaseUrl = Config.API_BASE_URL;

export const client = axios.create({
    baseURL: apiBaseUrl,
    // timeout: 60000, //If the server doesn't return a response within the time frame set by the timeout, axios will throw an error.
    headers: {
      Accept:'application/json',
      'content-type': 'application/json'
    },
  });

  //autorization interceptor
// client.interceptors.request.use(
//   function (config) {
//      AsyncStorage.getItem('authToken')
//     config.headers.Authorization =  token;
//   }
// )
// Add a response interceptor
client.interceptors.response.use(
    function (response) {
      if (response.data) return response.data;
      else {
        var message = 'We had trouble connecting to the server';
        if (response.data.message) message = response.data.message;
        return Promise.reject(response);
      }
    },
    function (error) {
      return Promise.reject(error);
    },
);

// client.interceptors.request.use(
//   async function (config) {
//     try {
//       const token = await AsyncStorage.getItem('authToken')
//       if(token !== null ) config.headers.Authorization =  token;
//     } catch(e:any) {
//         console.log('interceptor ', e.message);
        
//     }
//   return config;
// });
