import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import {MaterialIcons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/core';


const MyEarningDetails = ({priceColor, text}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Deals", {"text": text})}
        activeOpacity={0.8} style={styles.container}>
            <View style={styles.view1}>
                <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h5, color:colors.textPrimary}}>Deal No.: 1581273</Text>
                <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h5, color:colors.textPrimary}}>12 Jul 2021</Text>
            </View>
            <Text style={{fontSize:fontSize.h4,color:colors.textPrimary, fontFamily:fontFamily.primaryRegular, marginVertical:20}}>Supply of Boiler for Coal Fired Power Plant in Indonesia for paper plant project</Text>
            <View style={styles.view2}>
                <View>
                    <Text style={{color:priceColor, fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold}}>$25,000</Text>
                    <Text style={{color:colors.textPrimary, fontFamily:fontFamily.primaryRegular, fontSize:fontSize.h5, fontWeight:"700", marginTop:3}}>{text}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                <Text style={{fontWeight:"500",fontFamily:fontFamily.primary, fontSize:fontSize.h3, color:"#1A1A1A", marginRight:3}}>View details</Text>
                <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={colors.primary}
                />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MyEarningDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        borderRadius:3,
        paddingHorizontal:13,
        paddingVertical:15,
        borderWidth:1,
        borderColor:colors.borderColor,
        marginBottom:15
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    view2:{
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"space-between"
    }
})
