import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

import { AddBtn, PrimaryBtn } from '../Atoms/CompUtils';
import { newStyle } from './newStyle';
import { levels } from '../../commonStyle';

export default class AddOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputItems : [
                'Select Deal',
                'Select Seller',
                `${props.route.params.type} Amount`,
                `${props.route.params.type} Number`,
            ]
        }
    }
    render() {
        return(
            <ScrollView style={{padding:levels.l5}}>
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
                        <AddBtn text={`Upload ${this.props.route.params.type}`} />
                        <PrimaryBtn text={`Submit ${this.props.route.params.type}`} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
