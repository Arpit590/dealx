import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fontSize } from '../../commonStyle'

const TransactionTab = () => {
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const activeButton1 = ()=>{
        setActive1(true);
        setActive2(false);
        setActive3(false);
    }
    const activeButton2 = ()=>{
        setActive1(false);
        setActive2(true);
        setActive3(false);
    }
    const activeButton3 = ()=>{
        setActive1(false);
        setActive2(false);
        setActive3(true);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={activeButton1} style={active1 ? styles.activeOption : styles.option}>
                <Text style={active1 ? styles.activeText : styles.text}>My Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={activeButton2} style={active2 ? styles.activeOption : styles.option}>
                <Text style={active2 ? styles.activeText : styles.text}>Purchase Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={activeButton3} style={active3 ? styles.activeOption : styles.option}>
                <Text style={active3 ? styles.activeText : styles.text}>Invoices</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TransactionTab

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:12,
        marginHorizontal:20,
    },
    activeOption:{
        paddingHorizontal:22,
        paddingVertical:10,
        backgroundColor:colors.primary,
        borderWidth:1,
        borderColor:colors.primary
    },
    option:{
        paddingHorizontal:22,
        paddingVertical:10,
        backgroundColor:colors.secondary,
        borderWidth:1,
        borderColor:colors.borderColor
    },
    activeText:{
        color:"#FEFEFE",
         fontSize:fontSize.h5,
         fontWeight:"400"
    },
    text:{
        fontSize:fontSize.h5,
        color: "#1A1A1A",
        fontWeight:"400"
    }
})
