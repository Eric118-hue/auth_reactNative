import { Dimensions, StyleSheet } from "react-native";

let screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    txtCreate: {
        color: '#009387',
        fontWeight: 'bold',
        fontSize: 25
    },
    txt : {
        textAlign: 'left',
        color: '#009387'
    },
    btn: {
        width: '60%'
    },
    border: {
        borderColor: '#009387',
        borderWidth: 1,
        width: '60%',
        paddingLeft: 16
    },
    textLogin : {
        flex: 1,
        textAlign: 'center',
        marginTop: 14,
        fontSize: 62,
        color: 'white',
    }, 
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#009387',
    },
    loginContainer: {
        height: '75%',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white'
    },
    socialMedia: {
        marginTop: 12,
        width: '60%',
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center'
    }
 
})