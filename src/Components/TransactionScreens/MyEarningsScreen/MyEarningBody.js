import { useRoute } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AntDesign, FontAwesome} from "react-native-vector-icons";
import { useSelector } from 'react-redux';
import {fontSize, fontFamily, colors} from "../../../commonStyle";
import EarningOption from './EarningOption';


const MyEarningBody = () => {

    const [{text, filterText}] = useSelector((state)=>state.transaction.transaction);

    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={styles.filter}>
                    <Text style={{fontSize:fontSize.h1, fontFamily: fontFamily.primary, color: "#FFFFFF", marginRight:15, fontWeight:"900"}}>{filterText}</Text>
                    <AntDesign
                    name="close"
                    size={15}
                    color="#FFFFFF"
                    />
                </View>
                <View style={styles.sort}>
                    <FontAwesome
                    name="sort-amount-desc"
                    size={13}
                    color="#1A1A1A"
                    />
                    <Text style={{fontSize: fontSize.h5, color: colors.textPrimary, marginLeft:10}}>Sort By</Text>
                </View>
            </View>
            <View style={styles.view2}>
                <View style={styles.heading}>
                    <Text style={{fontWeight:"600", fontSize:fontSize.h4, color:colors.textPrimary}}>Deal Name</Text>
                    <Text style={{fontWeight:"600", fontSize:fontSize.h4, color:colors.textPrimary}}>Amount</Text>
                </View>
                <View style={styles.options}>
                    {(text === "Total Success Fee") &&
                    <>
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="25,000"
                        heading= "Success Fee Paid"
                        priceColor="#219653"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Electrical Spares"
                        price="10,000"
                        heading= "Success Fee Paid"
                        priceColor="#219653"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Electrical Spares"
                        price="15,000"
                        heading= "Success Fee Paid"
                        priceColor="#F2994A"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Electrical Spares"
                        price="35,000"
                        heading= "Success Fee Paid"
                        priceColor="#F2994A"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Electrical Spares"
                        price="15,000"
                        heading= "Success Fee Paid"
                        priceColor="#219653"
                        size={fontSize.h5}
                        />
                    </>
                    }
                    {(text === "Success Fee Paid") &&
                    <>
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="25,000"
                        heading= "Success Fee Paid"
                        priceColor="#27AE60"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="10,000"
                        heading= "Success Fee Paid"
                        priceColor="#27AE60"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="15,000"
                        heading= "Success Fee Paid"
                        priceColor="#27AE60"
                        size={fontSize.h5}
                        />
                    </>
                    }
                    {(text === "Success Fee Not Paid") &&
                    <>
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="25,000"
                        heading= "Success Fee Not Paid"
                        priceColor="#F2994A"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="10,000"
                        heading= "Success Fee Not Paid"
                        priceColor="#F2994A"
                        size={fontSize.h5}
                        />
                        <EarningOption
                        text="Requirement of Electrical Spares"
                        price="15,000"
                        heading= "Success Fee Not Paid"
                        priceColor="#F2994A"
                        size={fontSize.h5}
                        />
                    </>
                    }
                </View>
            </View>
        </View>
    )
}

export default MyEarningBody

const styles = StyleSheet.create({
    view:{
        flex:1
    },
    view1:{
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    filter:{
        backgroundColor:colors.primary,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:5
    },
    sort:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        borderWidth:1,
        borderColor: "#717171",
        backgroundColor:colors.secondary
    },
    heading:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:30,
        marginBottom:10,
        maxWidth:"85%"
    },
    options:{
        alignItems:"center"
    }
})
