import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

import { AddBtn, PrimaryBtn } from '../../Atoms/CompUtils';
import { newStyle } from '../newStyle';
import { colors, levels } from '../../../commonStyle';

export default class AddPurchaseOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputItems : [
                'Select Deal',
                'Select Seller',
                'Purchase Order Amount',
                'Purchase Order Number',
            ]
        }
    }
    render() {
        return(
            <ScrollView style={{padding:levels.l5,backgroundColor:colors.secondary}}>
                <SafeAreaView>
                    {this.state.inputItems.map((item,index) => {
                        return(
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                <TextInput
                                placeholder={index ===0 ? 'Search Deals' : index ===1 ? 'Search Sellers' : index === 2 ? '$' : ''} 
                                style={newStyle.input} />
                            </View>
                        )
                    })}
                    <View style={{marginTop:levels.l7}}>
                        <AddBtn text="Upload Purchase Order" />
                        <PrimaryBtn text="Submit Purchase Order" />
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
