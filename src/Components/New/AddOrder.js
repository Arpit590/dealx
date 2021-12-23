import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

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
            modalVisible : false,
        }
        this.ref = React.createRef()
        this.addSellers = this.addSellers.bind(this);
        this.callModalOnFocus = this.callModalOnFocus.bind(this);
    }

    addSellers(sellers){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                sellers : {
                    ...prevState.sellers,
                    ...sellers,
                }
            }
        })
    }

    callModalOnFocus(){
        //unfocus text input for search sellers to avoid calling search sellers modal recursively
        this.ref.current.focus()
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
            }
        })
    }

    render() {
        return(
            <ScrollView style={{padding:levels.l5}}>
                <SafeAreaView>
                    <DealSummary/>
                    {this.state.inputItems.map((item,index) => {
                        return(
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                <TextInput
                                //ref to focus after search sellers is complete
                                ref={index===2 && this.props.route.params.type === 'Purchase Order' ? this.ref:null }
                                placeholder={index ===0 ? 'Search Deals' : index === 1 ? (this.props.route.params.type === 'Purchase Order' ?'Search Sellers' : 'Seller Description') : index === 2 ? '$' : ''}
                                //modal visible on focus for only add Purchsae Order screen
                                onFocus={index===1 && this.props.route.params.type === 'Purchase Order' ? this.callModalOnFocus : null} 
                                style={newStyle.input} />
                            </View>
                        )
                    })}
                    <View style={{marginTop:levels.l7}}>
                        <AddBtn text={`Upload ${this.props.route.params.type}`} />
                        <PrimaryBtn text={`Submit ${this.props.route.params.type}`} />
                    </View>
                    <SearchModal
                        navigation={this.props.navigation} 
                        modalVisible={this.state.modalVisible} type="Seller" 
                        actionAfterSearchAndSelect={(sellers) => this.addSellers(sellers)}
                    />
                </SafeAreaView>
            </ScrollView>
        )
    }
}
