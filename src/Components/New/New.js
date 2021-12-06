import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Index from '../Index'
import Navigation from '../Navigation/Navigation'
import AddUser from './AddUser'
import ReferBuyer from '../../../assets/icons/icons8-ReferBuyer.svg'
import ReferNewDeal from '../../../assets/icons/icons8-refer-new-deal.svg'
import AddPurchase from '../../../assets/icons/icons8-add-purchase order.svg'
import Quotation from '../../../assets/icons/icons8-quoation.svg'

import { colors, fontFamily, fontSize, levels } from '../../commonStyle'
import TransactionTab from '../TransactionScreens/TransactionTab'


export default class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            buyingView : true,
            modalVisible : false,
            type : 'Seller'
        }
        this.iconSize = 28
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
                                <Quotation height={this.iconSize} />
                                <Text style={styles.text}>
                                    New Quotation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options} onPress={() => this.setState(prevState => {
                                return{
                                    ...prevState,
                                    modalVisible : !prevState.modalVisible,
                                    type: 'Sellers'
                                }
                            })}>
                                <ReferBuyer height={this.iconSize} />
                                <Text style={styles.text}>
                                    Refer Sellers
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options}>
                                <AddPurchase height={this.iconSize} />
                                <Text style={styles.text}>
                                    Submit Invoices
                                </Text>
                            </TouchableOpacity>
                        </>
                    :
                        <>
                            <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('New Deal')}>
                                <ReferNewDeal height={this.iconSize}/>
                                <Text style={styles.text}>
                                    Refer New Deal
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.options} 
                            onPress={() => this.setState(prevState => {
                                return{
                                    ...prevState,
                                    modalVisible : !prevState.modalVisible,
                                    type: 'Buyer'
                                }
                            })}>
                                <ReferBuyer height={this.iconSize} />
                                <Text style={styles.text}>
                                    Refer New Buyer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('Add Purchase Order')}>
                                <AddPurchase height={this.iconSize} />
                                <Text style={styles.text}>
                                    Submit Purchase Order
                                </Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>
                <AddUser navigation={this.props.navigation} modalVisible={this.state.modalVisible} type={this.state.type} noSearch={true} />
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
