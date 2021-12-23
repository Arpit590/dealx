import React, { Component } from 'react'
import { Keyboard, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

import { AddBtn, PrimaryBtn } from '../Atoms/CompUtils';
import { newStyle } from './newStyle';
import {DealSummary} from '../Atoms/DealSummary';
import SearchModal from './SearchModal'

import { levels } from '../../commonStyle';

export default class AddOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputItems : [
                'Select Deal',
                props.route.params.type === 'Purchase Order' ? 'Select Seller' : 'Description',
                `${props.route.params.type} Amount`,
                `${props.route.params.type} Number`,
            ],
            sellers : {},
            deals : {},
            modalVisible : false,
            type : 'Deal'
        }

        this.addItems         = this.addItems.bind(this);
        this.callModalOnFocus = this.callModalOnFocus.bind(this);
    }

    //type=deals||sellers
    addItems(type,items){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                [type] : {
                    ...prevState[type],
                    ...items,
                }
            }
        })
    }

    callModalOnFocus(index){
        //Keyboard.dismiss() to avoid calling search deals/sellers modal recursively
        Keyboard.dismiss()
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                type         : index===0 ? 'Deal' : 'Seller'
            }
        })
    }

    render() {
        return(
            <ScrollView style={{padding:levels.l5}}>
                <SafeAreaView>
                    {/* show deal summary if deal is selected */}
                    {Object.keys(this.state.deals).length > 0 ?
                        Object.keys(this.state.deals).map((key,index) => (
                            <DealSummary deal={this.state.deals[key]}/>
                        ))
                    : null }
                    {this.state.inputItems.map((item,index) => {
                        return(
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                <TextInput
                                //ref to focus after search sellers is complete
                                placeholder={index ===0 ? 'Search Deals' : index === 1 ? (this.props.route.params.type === 'Purchase Order' ?'Search Sellers' : 'Seller Description') : index === 2 ? '$' : ''}
                                //modal visible on focus for only add Purchsae Order screen
                                onFocus={() => index===0 || (index===1 && this.props.route.params.type === 'Purchase Order') ? this.callModalOnFocus(index) : null}
                                style={newStyle.input} />
                            </View>
                        )
                    })}
                    <View style={{marginTop:levels.l7}}>
                        <AddBtn text={`Upload ${this.props.route.params.type}`} />
                        <PrimaryBtn text={`Submit ${this.props.route.params.type}`} />
                    </View>
                    <SearchModal
                        navigation                 = {this.props.navigation} 
                        modalVisible               = {this.state.modalVisible} 
                        type                       = {this.state.type} 
                        actionAfterSearchAndSelect = {(items) => this.addItems(this.state.type==='Deal' ? 'deals' : 'sellers',items)}
                        noSearch                   = {this.state.type==='Deal' ? true : false}
                        newQuotation               = {this.state.type==='Deal' ? 'Choose Deals' : false}
                    />
                </SafeAreaView>
            </ScrollView>
        )
    }
}
