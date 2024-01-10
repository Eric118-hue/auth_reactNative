import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key: string) => {
  const [storedData, setStoredData] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item && JSON.parse(item);
        setStoredData(value);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [key]);

  const setItem = async (value: string | object) => {
    try {
      const valueToStore = typeof value === "string" ? value : JSON.stringify(value);
      await AsyncStorage.setItem(key, valueToStore);
      setStoredData(valueToStore);
    } catch (e) {
      console.error('error store data in asyncStorage', e);
    }
  };

 

  return [ storedData, setItem ];
};

export default useAsyncStorage;
