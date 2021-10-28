import {StyleSheet} from 'react-native';
import { colors, fontFamily, fontSize } from '../../commonStyle';

export const styles = StyleSheet.create({
	navigationBox: {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-evenly",
        position : "absolute",
        bottom : 0,
        left:0,
        right:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'#F0F6FF',
        padding:8
    },
    icons : {
        fontSize : 24,
        textAlign:'center'
    },
    navIcons : {
        paddingLeft: 20,
        paddingRight: 20,
        color:colors.textLight
    },
    active : {
        color : colors.primary,
    },
    tabText : {
        fontFamily:fontFamily.primaryBold,
        fontSize:fontSize.h5,
        color:colors.textLight
    },
});