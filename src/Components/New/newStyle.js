import {StyleSheet} from 'react-native';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export const newStyle = StyleSheet.create({
    add : {
        borderColor:colors.primary,
        padding:levels.l4,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:levels.l6
    },
    addTxt : {
        color:colors.primary,
        fontSize:fontSize.h1,
        paddingLeft:levels.l2,
        fontFamily:fontFamily.primaryBold
    },
})