import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontSize } from '../../commonStyle'
import {AntDesign} from "react-native-vector-icons";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';


const PaymentOption = ({text}) => {
    
    const navigation = useNavigation();
    console.log(text)

    const pressHandler=()=>{
        if(text === "Success Fee Not Paid"){
            navigation.navigate("ClaimForm");
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={pressHandler}
        >
            <View style={styles.view1}>
                <Text style={{fontSize: fontSize.h3, color: "#FFFFFF", fontWeight:"600"}}>$25,000 </Text>
                {(text === "Success Fee Paid") &&
                    <Text style={{fontSize: fontSize.h3, color: "#FFFFFF", fontWeight:"600"}}>Paid</Text>
                }
                {(text === "Success Fee Not Paid") &&
                    <Text style={{fontSize: fontSize.h3, color: "#FFFFFF", fontWeight:"600"}}>Eligible for Claim</Text>
                }
            </View>
            <View style={styles.view2}>
                {(text === "Success Fee Paid") &&
                    <Text style={{marginRight:4, fontSize: 18, color: "#FFFFFF", fontWeight:"600"}}>See Payment Details</Text>
                }
                {(text === "Success Fee Not Paid") &&
                    <Text style={{marginRight:4, fontSize: 18, color: "#FFFFFF", fontWeight:"600"}}>Claim Now</Text>
                }
                <AntDesign
                name="caretright"
                size={15}
                color={colors.secondary}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PaymentOption

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        borderRadius:3,
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20,
        marginVertical:10,
    },
    view1:{
        flexDirection:"row",
        alignItems:"center"
    },
    view2:{
        flexDirection:"row",
        alignItems:"center"
    }
})
