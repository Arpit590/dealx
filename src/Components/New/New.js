import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Index from '../Index'
import Navigation from '../Navigation/Navigation'
import Briefcase from '../../../assets/icons/icons8-deals.svg'
import { colors, fontFamily, fontSize, levels } from '../../commonStyle'
import TransactionTab from '../TransactionScreens/TransactionTab'


export default class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            buyingView : true
        }
    }

    render() {
        return (
            <Index>
                <View style={{backgroundColor:colors.secondary,paddingLeft:levels.l4,paddingBottom:levels.l4}}>
                    <TransactionTab
                        text1="Buying"
                        Tab1="TransactionBuying"
                        text2="Selling"
                        Tab2="TransactionSelling"
                        toggleTab = {() => this.setState(prevState => {
                            return{
                                ...prevState,
                                buyingView : !prevState.buyingView
                            }
                        })}
                    />
                </View>
                <View style={{padding:levels.l4}}>
                    {this.state.buyingView ?
                        <>
                            <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('New Deal')}>
                                <Briefcase height={28}/>
                                <Text style={styles.text}>
                                    New Quotation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options}>
                                <MaterialCommunityIcons name="account-plus-outline" size={32}/>
                                <Text style={styles.text}>
                                    Refer Sellers
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options}>
                                <MaterialCommunityIcons name="note-text-outline" size={32}/>
                                <Text style={styles.text}>
                                    Submit Invoices
                                </Text>
                            </TouchableOpacity>
                        </>
                    :
                        <>
                            <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('New Deal')}>
                                <Briefcase height={28}/>
                                <Text style={styles.text}>
                                    Refer New Deal
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options}>
                                <MaterialCommunityIcons name="account-plus-outline" size={32}/>
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
                        </>
                    }
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
