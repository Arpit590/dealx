import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import Arrow from '../../../assets/icons/arrow-right.svg'
import { colors, fontFamily, levels } from '../../commonStyle'

export const DealSummary = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Text style={styles.date}>Date</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.type}>
                        <Text style={{color:colors.primary}}>Active</Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={{color:colors.secondary}}>Live</Text>
                    </View>
                </View>
            </View>
            <BoldText>
            Supply of Boiler for Coal Fired Power Plant in Indonesia for paper plant project
            </BoldText>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.date}>GH34GH343G4H3</Text>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.action}>View Deal</Text>
                    <Arrow/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Text = styled.Text`
    font-family : ${fontFamily.primary}
`;

const BoldText = styled.Text`
    font-family : ${fontFamily.primaryBold};
    padding-bottom : 16px
`;

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.secondary,
        padding : levels.l4,
        marginBottom : levels.l4
    },
    sec1: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingBottom:levels.l4
    },
    date : {
        fontFamily : fontFamily.primary
    },
    type : {
        borderColor : colors.primary,
        borderWidth : 1,
        borderRadius : levels.l6,
        paddingLeft:levels.l5,
        paddingRight : levels.l5,
        padding : levels.l1,
        marginRight:levels.l2
    },
    status:  {
        backgroundColor : colors.success,
        borderRadius : levels.l5,
        paddingLeft:levels.l5,
        paddingRight : levels.l5,
        padding : levels.l1
    },
    action : {
        marginRight:6,
        color:colors.primary,
        fontFamily:fontFamily.primaryRegular
    }
})

