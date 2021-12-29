import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import TransactionHeader from '../../Atoms/Header'
import {AntDesign, MaterialIcons} from "@expo/vector-icons"


const DealsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.screen}>
            <TransactionHeader
            headingText={route.params.text}
            />
            {(route.params.text==="Success Fee Not Paid")?
            <View style={styles.content}>
                <View style={styles.view}>
                    <Text style={{fontSize:fontSize.h3, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Requirement of electrical spares in Surabaya for hydro power plant</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Deal ID</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>1429675</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Buyer Name</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>John Smith</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Deal</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Purchase Order Number</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>WR/SG/RD/21-29/012</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Purchase Order Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Purchase Order</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Invoice Number</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>WR/SG/RD/21-29/012</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Invoice Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Invoice</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Total Succes Fee</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 50,000</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Success Fee Paid</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 35,000</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Success Fee Not Paid</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 15,000</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:fontSize.h4, fontWeight:"700", color:colors.secondary, marginRight:5, fontFamily:fontFamily.primary}}>$ 15,000</Text>
                        <Text style={{fontSize:fontSize.h4, fontWeight:"600", color:colors.secondary, marginRight:3, fontFamily:fontFamily.primary}}>Eligible for Claim</Text>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Claim Form", {"price": "$15,000"})}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.text, color:colors.secondary,marginRight:10}}>Claim Now</Text>
                        <AntDesign
                        name="caretright"
                        size={16}
                        color={colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={styles.content}>
                <View style={styles.view}>
                    <Text style={{fontSize:fontSize.h3, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Requirement of electrical spares in Surabaya for hydro power plant</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Deal ID</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>1429675</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Buyer Name</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>John Smith</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Deal</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Purchase Order Number</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>WR/SG/RD/21-29/012</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Purchase Order Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Purchase Order</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Invoice Number</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>WR/SG/RD/21-29/012</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Invoice Date</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>12/07/2021</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"400", fontSize:fontSize.h4, color:colors.primary, marginRight:5}}>View Invoice</Text>
                        <MaterialIcons
                        name="arrow-forward-ios"
                        color={colors.primary}
                        size={14}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Total Succes Fee</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 50,000</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Success Fee Paid</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 35,000</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:fontSize.h5, fontWeight:"700", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>Success Fee Not Paid</Text>
                        <Text style={{fontSize:fontSize.h3, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#1A1A1A"}}>$ 15,000</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:fontSize.h4, fontWeight:"700", color:colors.secondary, marginRight:5, fontFamily:fontFamily.primary}}>$ 25,000</Text>
                        <Text style={{fontSize:fontSize.h4, fontWeight:"600", color:colors.secondary, marginRight:3, fontFamily:fontFamily.primary}}>Paid</Text>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Detail Form")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.text, color:colors.secondary,marginRight:10}}>See Details</Text>
                        <AntDesign
                        name="caretright"
                        size={16}
                        color={colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            }
        </View>
    )
}

export default DealsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    content:{
        paddingHorizontal:15, 
        paddingVertical:25
    },
    view:{
        backgroundColor:colors.secondary,
        padding:10,
        borderRadius:3,
        marginBottom:20
    },
    box:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:colors.primary,
        borderRadius:3,
        padding:20,
        marginTop:40
    }
})
