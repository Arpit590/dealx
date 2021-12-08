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
        marginBottom: levels.l4,
        marginTop:levels.l4,
        backgroundColor:colors.secondary
    },
    addTxt : {
        color:colors.primary,
        fontSize:fontSize.h1,
        paddingLeft:levels.l2,
        fontFamily:fontFamily.primaryBold
    },
    text : {
        fontFamily : fontFamily.primaryBold,
        fontSize:fontSize.h4,
        marginBottom:levels.l2
    },
    input : {
        borderColor : colors.textFaint,
        borderWidth:1,
        padding:levels.l3,
        fontFamily:fontFamily.primaryBold,
        backgroundColor:colors.secondary
    },
    primaryBtn : {
        padding:levels.l4,
        alignItems:'center',
        backgroundColor:colors.primary
    },
    disabledBtn : {
        padding:levels.l4,
        alignItems:'center',
        backgroundColor:colors.primaryLight
    }
})