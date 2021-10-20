import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily } from '../../commonStyle'
import {Entypo} from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/core';


const TransactionOptions = ({text, price, priceColor, size, filterText}) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={()=>navigation.navigate("MyEarnings", {filter: filterText, heading: text})}
        > 
            <Text style={{color: colors.textPrimary, maxWidth:160, fontSize: size, fontWeight:"600", fontFamily:fontFamily.primaryBold}}
            numberOfLines={1}
            >{text}</Text>
            <View style={styles.price}>
                <Text style={{color: priceColor, fontSize: size, fontWeight:"600", fontFamily:fontFamily.primaryBold}}>${price}</Text>
                <View style={{backgroundColor:"#EDEDED", height:20, width:20, borderRadius:10, marginLeft:15}}>
                    <Entypo
                    name="chevron-small-right"
                    size={20}
                    color={colors.textPrimary}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TransactionOptions

const styles = StyleSheet.create({
    container:{
        paddingVertical:20,
        backgroundColor: colors.secondary,
        borderRadius:3,
        borderWidth:1,
        borderColor:colors.borderColor,
        paddingHorizontal:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10,
        height:60,
        width:335
    },
    price:{
        flexDirection:"row",
        alignItems:"center"
    }
})
