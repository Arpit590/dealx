import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import {colors, fontFamily, fontSize} from "../../../commonStyle";
import {AntDesign} from "react-native-vector-icons";
import ElectricSpareBody from './ElectricSpareBody';

const ElectricSpares = () => {

    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign
                        name="left"
                        color={colors.primary}
                        size={24}
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h1, color: colors.primary, marginLeft:5 }}>{route.params.heading}</Text>
                </View>
                <Text style={{fontFamily:fontFamily.secondaryMd, fontSize: fontSize.text, color: colors.textPrimary, fontWeight:"bold"}}>Electrical Spares</Text>
            </View>
            <ScrollView>
                    <ElectricSpareBody
                    heading1="Deal No.: "
                    text1="14294792"
                    heading2="Date: "
                    text2="12/07/2021"
                    heading3="Buying Name: "
                    text3 = "John Smith"
                    heading4="Deal Description: "
                    text4="Requirement of electrical spares in Surbaya for hydro power plant"
                    />
                    <ElectricSpareBody
                    heading1="Purchase Order Date: "
                    text1="12/07/2021"
                    />
                    <ElectricSpareBody
                    heading1="Invoive Date: "
                    text1="12/07/2021"
                    />
                    <ElectricSpareBody
                    heading1="Total Success Fee: "
                    text1="$25,000"
                    heading2="Success Fee Paid: "
                    text2="$25,000"
                    heading3="Success Fee Not Paid: "
                    text3="$0"
                    noButton
                    />
            </ScrollView>
        </View>
    )
}

export default ElectricSpares

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1,
        width:"100%"
    },
    header:{
        backgroundColor:colors.secondary,
        padding:20,
        elevation: 8
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    view2:{
        alignItems:"center"
    }
})
