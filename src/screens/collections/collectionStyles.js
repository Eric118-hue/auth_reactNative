import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        height: windowHeight - (windowHeight - 150),
        width: windowWidth,
        backgroundColor: 'black',
    },
    white: {
        color: 'white',
        marginTop: 0,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 51
    },
    categorie: {
        marginTop: 6
    },
    btn: {
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 30
    },
    imgCont: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 223, 223)',
        borderRadius: 50
    },
    img: {
        width: 12,
        height: 12,
    }
})