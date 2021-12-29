import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import { useNavigation } from '@react-navigation/core';
import {Feather, MaterialIcons} from "@expo/vector-icons"
import { useDispatch } from 'react-redux';
import { addTransactionState } from '../../Store/actions';

const TransactionOption = ({title, color, price}) => {

    const navigation= useNavigation();
    const dispatch = useDispatch();

    const tabHandler=()=>{
        dispatch(addTransactionState({
            "title": title,
            "color": color,
            "price": price,
        }))
        navigation.navigate("MyEarnings")
    }

    return (
        <TouchableOpacity
        onPress={tabHandler}
        activeOpacity={0.8} style={styles.container}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontSize:fontSize.h1, fontFamily: fontFamily.primaryBold, color:colors.textPrimary, marginRight:10}}>{title}</Text>
                <Feather
                name="info"
                size={24}
                color={colors.primary}
                />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontSize:fontSize.h1, color:color, fontFamily: fontFamily.primaryBold}}>$ {price}</Text>
                <View style={{marginLeft:20,backgroundColor:"#EDEDED", padding:5, borderRadius:20}}>
                    <MaterialIcons
                    name="arrow-forward-ios"
                    size={13}
                    color={colors.textPrimary}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TransactionOption

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        borderRadius:10,
        paddingVertical:25,
        paddingHorizontal:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:10
    }
})
