import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, CheckBox } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import TransactionHeader from '../Atoms/Header'
import {AntDesign} from "@expo/vector-icons"

const ClaimForm = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [checkbox, setCheckbox] = useState(false);

    return (
        <View style={styles.screen}>
            <TransactionHeader
            headingText="Claim Success Fee"
            />
            <View style={styles.content}>
                <View style={{flexDirection:"row",alignItems:"center", marginBottom:20}}>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold, color:colors.textPrimary}}>Claim Form |</Text>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold, color:colors.primary}}> {route.params.price}</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Deal No.: 1429675</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>10 June 2021</Text>
                    </View>
                    <Text style={{fontFamily:fontFamily.primaryRegular, fontSize:fontSize.h3, color:"#1A1A1A", marginTop:5}}>Requirement of Electrical Spares at Surabaya for Hydro Plant</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Payment Method</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Telegraphic Transfer</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Account Number</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>9156123599928</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Account Name</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>John Smith</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Bank Name</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Bank XYZ</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Bank Address</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171", maxWidth:140}} numberOfLines={3}>Bank XYZ, Street Name City, State, Country PIN</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>SWIFT Code</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>ABCD00012345</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.edit}>
                        <AntDesign
                        name="edit"
                        color={colors.primary}
                        size={20}
                        />
                        <Text style={{fontSize:fontSize.h4, color:colors.primary, fontFamily:fontFamily.primaryRegular, fontWeight:"700", marginLeft:10}}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkbox}>
                    <CheckBox
                    disabled= {false}
                    value={checkbox}
                    onValueChange={(newValue)=>setCheckbox(newValue)}
                    />
                    <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primaryBold, color:colors.textPrimary, maxWidth:300, marginLeft:20}}>I hereby declare that the information provided above is correct. WorldRef shall not be held accountable for any loss of the payment due to discrepancy or mistake in the above information or due to any bank related issue at my end. By checking the "I Agree" option I authorise WorldRef to generate an invoice on my behalf.</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} style={{width:"50%",backgroundColor:colors.primary, paddingVertical:10, borderRadius:3}}
                    onPress={()=>navigation.navigate("Detail Form")}
                    >
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h1, color:colors.secondary, textAlign:"center"}}>Submit Form</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ClaimForm

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    content:{
        paddingHorizontal:20, 
        paddingVertical:25
    },
    view:{
        backgroundColor:colors.secondary,
        padding:10,
        borderRadius:3,
        marginBottom:20,
        paddingHorizontal:20
    },
    edit:{
        backgroundColor:colors.secondary,
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius:40,
        paddingVertical:8, 
        paddingHorizontal:17,
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"flex-end",
        marginVertical:10
    },
    checkbox:{
        marginVertical:40,
        flexDirection:"row",
        alignItems:"flex-start",
        paddingHorizontal:10
    }
})
