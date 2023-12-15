import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAsyncStorage = (key: string) => {
    const [storedValue, setStoredValue] = useState();

    useEffect(() => {
        const loadStoredValue = async () => {
          try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
              setStoredValue(JSON.parse(value));
            }
          } catch (error) {
            console.error('Erreur lors du chargement de la valeur depuis AsyncStorage:', error);
          }
        };
    
        loadStoredValue();
      }, [key]);

    
    const getValue = async () => {
        try {
        // Récupération de la valeur actuelle depuis AsyncStorage
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                setStoredValue(JSON.parse(value));
                return JSON.parse(value);
            }
            return null;
        } catch (error) {
            console.error('Erreur lors de la récupération de la valeur depuis AsyncStorage:', error);
            return null;
        }
    };


    return {storedValue, getValue}
}

export default useAsyncStorage