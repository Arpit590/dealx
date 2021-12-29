import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import TransactionHeader from '../Atoms/Header'

const DetailForm = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [bankDetails, setBankDetails] = useState("");

    // useEffect(()=>{
    //     axios.get("user/bankdetails")
    //     .then((res)=>console.log(res.data))
    //     .catch((err)=>console.log(err))
    // },[])

    return (
        <View style={styles.screen}>
            <TransactionHeader
            headingText="Fee Claim Details"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={{flexDirection:"row",alignItems:"flex-start", marginBottom:20, justifyContent:"space-between"}}>
                    <View>
                        <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold, color: colors.textPrimary, marginBottom:3}}>John Doe</Text>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h5, color:colors.textPrimary}}>Associate ID | </Text>
                            <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primary, color:colors.textPrimary}}>211532315</Text>
                        </View>
                    </View>
                    <Text style={{fontFamily:fontFamily.primary, fontSize:fontSize.h5, color:"#1A1A1A"}}>10 Oct 2021</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Email</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>john1234@gmail.com</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>National ID</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Passport, 1463246</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Address</Text>
                        <View>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Address Line 1</Text>
                            <Text style={{marginVertical:10,fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Address Line 2</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Address Line 3</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Deal No.: 1429675</Text>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>10 June 2021</Text>
                    </View>
                    <Text style={{fontFamily:fontFamily.primaryRegular, fontSize:fontSize.h3, color:"#1A1A1A", marginTop:5}}>Requirement of Electrical Spares at Surabaya for Hydro Plant</Text>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                        <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color:colors.textPrimary}}>Amount Claimed</Text>
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h1, color:colors.primary, marginLeft:16}}>USD 25000.00</Text>
                    </View>
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
                </View>
                <View style={{marginBottom:30}}>
                    <View style={styles.view}>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Payment Method</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Telegraphic Transfer</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Transaction ID</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>9156123599928</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Transaction Date</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>12 Dec 2021</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>From Bank</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>Bank XYZ, India</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Transaction Amount</Text>
                            <Text style={{fontSize:fontSize.h5, fontWeight:"600", fontFamily:fontFamily.primaryRegular, color:"#717171"}}>USD 25,000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailForm

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
        marginBottom:30,
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
        marginVertical:20,
        flexDirection:"row",
        alignItems:"flex-start",
        paddingHorizontal:10
    }
})
