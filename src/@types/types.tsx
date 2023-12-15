import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type UserLogin = {
    username: string;
    password: string;
}
export type Test = {
    name: string
}

export type RootStackParamList = {
    forgotpassword: undefined;
    // Details: { itemId: number };
    login: undefined;
    register: undefined
  };

export type LoginProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'login'>
}

export type User = {
    ids: 6,
    nm: string,
    usrnm: string,
}