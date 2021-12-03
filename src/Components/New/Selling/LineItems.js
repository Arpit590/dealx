import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { PrimaryBtn } from '../../Atoms/CompUtils'

import { colors, levels } from '../../../commonStyle'
import { newStyle } from '../newStyle'

const LineItems = (props) => {
    return (
        <ScrollView style={{padding:levels.l5,backgroundColor:colors.secondary}}>
            {['Item Name','Item Description'].map((item,index) => {
            return (
                <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                    <Text style={newStyle.text}>{item}</Text>
                    <TextInput style={newStyle.input} />
                </View>
            )
        })}
            <View style={{marginTop:levels.l2,marginBottom:levels.l2}}>
                <Text style={newStyle.text}>Quantity</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={[newStyle.input,{width:'50%',marginRight:levels.l4}]} />
                    <TouchableOpacity style={[newStyle.add,{marginBottom:0}]}> 
                        <Text style={[newStyle.addTxt,{marginRight:4}]}>UOM</Text>
                        <AntDesign name="down" size={18} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop:levels.l2,marginBottom:levels.l2}}>
                <Text style={newStyle.text}>Attachments</Text>
                <TouchableOpacity style={[newStyle.add,{alignSelf:'flex-start'}]}> 
                    <AntDesign name="upload" size={18} color={colors.primary} />
                    <Text style={newStyle.addTxt}>Upload files</Text> 
                </TouchableOpacity>
            </View>
            <TextInput style={[newStyle.input,{marginBottom:levels.l6}]} placeholder="Additional notes"/>
            <PrimaryBtn text="Add Deal" />
        </ScrollView>
    )
}

export default LineItems
