import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Index from '../Index'
import Navigation from '../Navigation/Navigation'
import { colors, fontFamily, fontSize, levels } from '../../commonStyle'

export default class New extends Component {
    render() {
        return (
            <Index>
                <View style={{padding:levels.l4}}>
                    <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('New Deal')}>
                        <MaterialCommunityIcons name="handshake" size={32}/>
                        <Text style={styles.text}>
                            Refer New Deal
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <MaterialCommunityIcons name="account-plus" size={32}/>
                        <Text style={styles.text}>
                            Refer New Buyer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <MaterialCommunityIcons name="note-text-outline" size={32}/>
                        <Text style={styles.text}>
                            Submit Purchase Order
                        </Text>
                    </TouchableOpacity>
                </View>
                <Navigation routeName={this.props.route.name} />
            </Index>
        )
    }
}

const styles = StyleSheet.create({
    options : {
        borderColor:colors.textFaint,
        backgroundColor:colors.secondary,
        borderWidth : 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:levels.l4,
        margin:levels.l2
    },
    text : {
        fontFamily : fontFamily.primaryBold,
        fontSize : fontSize.text,
        paddingLeft:levels.l3
    }
})
