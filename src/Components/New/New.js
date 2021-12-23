import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Index from '../Index'
import Navigation from '../Navigation/Navigation'
import SearchModal from './SearchModal'
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
            type : 'Seller',
            newQuotation: false,
            iconSize : 28,
            deal : {}
        }
        this.addDeals = this.addDeals.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        //navigate to Add Order{Invoice} when deal added through New Quotation
        prevState.deal !== this.state.deal && prevState.modalVisible !== this.state.modalVisible ? this.props.navigation.navigate('New Quotation',{deal : this.state.deal}) : null
    }
    

    addDeals(deal){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                deal : {
                    ...prevState.deal,
                    ...deal,
                }
            }
        })
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
                            <TouchableOpacity style={styles.options} onPress={() => this.setState(prevState => {
                                return{
                                    ...prevState,
                                    modalVisible : !prevState.modalVisible,
                                    type: 'Deals',
                                    newQuotation : true,
                                }
                            })}>
                                <Quotation height={this.state.iconSize} />
                                <Text style={styles.text}>
                                    New Quotation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options} onPress={() => this.setState(prevState => {
                                return{
                                    ...prevState,
                                    modalVisible : !prevState.modalVisible,
                                    type: 'Sellers',
                                    newQuotation : false,
                                }
                            })}>
                                <ReferBuyer height={this.state.iconSize} />
                                <Text style={styles.text}>
                                    Refer Sellers
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.options}
                            onPress={() => this.props.navigation.navigate('Add Order',{type:'Invoice'})}
                            >
                                <AddPurchase height={this.state.iconSize} />
                                <Text style={styles.text}>
                                    Submit Invoices
                                </Text>
                            </TouchableOpacity>
                        </>
                    :
                        <>
                            <TouchableOpacity style={styles.options} onPress={() => this.props.navigation.navigate('New Deal')}>
                                <ReferNewDeal height={this.state.iconSize}/>
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
                                    type: 'Buyer',
                                    newQuotation : false,
                                }
                            })}>
                                <ReferBuyer height={this.state.iconSize} />
                                <Text style={styles.text}>
                                    Refer New Buyer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.options} 
                            onPress={() => this.props.navigation.navigate('Add Order',{type:'Purchase Order'})}
                            >
                                <AddPurchase height={this.state.iconSize} />
                                <Text style={styles.text}>
                                    Submit Purchase Order
                                </Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>
                <SearchModal 
                    navigation={this.props.navigation} 
                    modalVisible={this.state.modalVisible} 
                    type={this.state.type} 
                    noSearch={true}
                    newQuotation={this.state.newQuotation ? 'Choose Deals' : false}
                    actionAfterSearchAndSelect={(deal) => this.addDeals(deal)}
                    type="Deal" 
                />
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
