import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'

const ElectricSpareBody = ({buttonTitle, heading1, text1, heading2, text2, heading3, text3, heading4, text4, noButton}) => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.row}>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontWeight:"bold", fontSize: fontSize.h3, color: "#1A1A1A"}}>{heading1}</Text>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h3, color: "#1A1A1A", maxWidth:270}}>{text1}</Text>
                </View>
                {heading2 && 
                <View style={styles.row}>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontWeight:"bold", fontSize: fontSize.h3, color: "#1A1A1A"}}>{heading2}</Text>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h3, color: "#1A1A1A", maxWidth:270}}>{text2}</Text>
                </View>
                }
                {heading3 && 
                <View style={styles.row}>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontWeight:"bold", fontSize: fontSize.h3, color: "#1A1A1A"}}>{heading3}</Text>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h3, color: "#1A1A1A", maxWidth:270}}>{text3}</Text>
                </View>
                }
                {heading4 &&
                <View style={styles.row}>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontWeight:"bold", fontSize: fontSize.h3, color: "#1A1A1A"}}>{heading4}</Text>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h3, color: "#1A1A1A", maxWidth:270}}
                    numberOfLines={2}
                    >{text4}</Text>
                </View>
                }
            </View>
            {!noButton &&
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={{textAlign:"center", fontFamily: fontFamily.primaryRegular, color: colors.primary, fontSize: fontSize.h2}}>{buttonTitle}</Text>
            </TouchableOpacity>
            }
        </View>
    )
}

export default ElectricSpareBody

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:colors.secondary,
        borderBottomColor: colors.borderColor,
        borderBottomWidth:1,
        alignItems:"flex-start"
    },
    row:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        marginVertical:10,
    },
    button:{
        marginVertical:20,
        borderColor: colors.primary,
        borderRadius:3,
        borderWidth:1,
        paddingVertical:10,
        alignSelf:"center",
        width:"85%"
    }
})
