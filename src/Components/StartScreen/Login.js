import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export class Login extends Component {
    render() {
        return (
            <View style={{width:'100%',marginTop:levels.l7}}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                    keyboardType="email-address"
                    placeholder="Enter email address"
                    style={[{marginBottom:levels.l4},styles.inputs]}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter password"
                    style={[{marginBottom:levels.l3},styles.inputs]}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotTxt}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryBtn}>
                    <Text style={styles.btnTxt}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.createAcc}>
                        New to WorldRef?
                        <Text style={{color:colors.primary}}> Create an account</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label : {
        fontFamily : fontFamily.tertiarySemi,
        marginBottom:levels.l3
    },
    inputs : {
        borderWidth : 1,
        borderRadius : 8,
        borderColor : colors.textFaint,
        padding:levels.l3
    },
    forgotTxt : {
        color:colors.textLight,
        alignSelf:'flex-end',
        fontFamily:fontFamily.tertiaryMd,
        fontSize : fontSize.h4
    },
    primaryBtn: {
        backgroundColor:colors.primary,
        borderRadius : 5,
        borderColor : colors.primary,
        padding : levels.l3,
        paddingLeft:levels.l7,
        paddingRight:levels.l7,
        alignSelf:'center',
        marginTop : levels.l7,
    },
    btnTxt : {
        color:colors.secondary,
        fontSize:fontSize.h1,
        fontFamily:fontFamily.primaryBold
    },
    createAcc : {
        color:colors.textLight,
        fontSize:fontSize.h5,
        alignSelf:'center',
        marginTop:levels.l4,
        fontFamily : fontFamily.tertiaryMd
    }
})

export default Login
