import React from 'react';
import { Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export const ModalView = props => (
    <View style={{flex:.7,backgroundColor:colors.secondary,margin:levels.l5,marginTop:64,padding:levels.l5,borderRadius:levels.l1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:levels.l4}}>
            <Text style={{fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>{props.topTxt}</Text>
            <AntDesign name="close" color={colors.textLight} onPress={props.close} size={24} />
        </View>
        {props.children}
    </View>
)