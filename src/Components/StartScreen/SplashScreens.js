import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';

import Index from './Index'
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export default class SplashScreens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenCount : 0,
            data : {
                images : [
                    require('../../assets/business-3d-0.png'),
                    require('../../assets/business-3d-1.png'),
                    require('../../assets/business-3d-2.png'),
                    require('../../assets/business-3d-3.png'),
                    require('../../assets/business-3d-4.png'),
                    require('../../assets/business-3d-5.png')
                ],
                heading : [
                    'Monetise Your Network',
                    'Earn Upto 80% Success Fee',
                    'Sell Whatever Buyer Needs',
                    'Help Us Deal With Sellers',
                    'Retain Your Referrals',
                    'Safe, Secure, & Confidential'
                ],
                text : [
                    'Refer Deals, Buyers or Sellers in your network. Earn assured success fee upon conversion of business. ',
                    'Get upto 80% of success fee made in any transaction made from deal, buyer or seller referred by you.',
                    'Get best quotations from verified sellers for anything that your network wants to buy. 100% assured by WorldRef.',
                    'Help buyers source products and services from sellers in your network. You refer the sellers, or play a larger role, your choice!',
                    'Deals, Buyers and Sellers first referred by you shall be exclusive. Continue earning referral fee from all the transactions. ',
                    ''
                ]
            },
            translateXAnim : new Animated.Value(0),
        }
        this.skip     = this.skip.bind(this);
        this.showNext = this.showNext.bind(this);
    }

    skip(){
        this.setState(prevState => {
            return{
                ...prevState,
                screenCount : 5
            }
        })
    }

    showNext(){
        this.setState(prevState => {
            return{
                ...prevState,
                screenCount: prevState.screenCount+1,
                leftPos:-100
            }
        })
        Animated.sequence([
            Animated.timing(this.state.translateXAnim,{
                toValue : -10,
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(this.state.translateXAnim,{
                toValue : 0,
                duration:300,
                useNativeDriver:true
            })
        ]).start()
    }

    render() {
        return (
            <Index 
                screenName='splash' 
                skip={this.skip} 
                screenCount={this.state.screenCount}
            >
                <Animated.View 
                    style={[
                        styles.view2,
                        {transform:[{translateX:this.state.translateXAnim}]}
                    ]}
                >
                    <Image source={this.state.data.images[this.state.screenCount]} style={styles.imgPoster} key={this.state.data.heading[this.state.screenCount]} />
                </Animated.View>
                <View style={styles.view3}>
                    <Text style={styles.heading}>{this.state.data.heading[this.state.screenCount]}</Text>
                    {this.state.screenCount === 5 ? 
                        <TouchableOpacity style={styles.primaryBtn} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{color:'#ffffff'}}>Join Now</Text>
                        </TouchableOpacity> 
                    :
                        <Text style={styles.txt}>{this.state.data.text[this.state.screenCount]}</Text> 
                    }
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:.20}}></View>
                        <View style={{flex:.6,alignItems:'center'}}>
                            <View style={styles.dotView}>
                                {Array.from(Array(6).keys()).map((item,index) => {
                                    return (
                                        <View key={this.state.data.heading[index]} style={[index === this.state.screenCount ? {backgroundColor:colors.textPrimary} : {backgroundColor : colors.textFaint},styles.dot]}>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={{flex:.20}}>
                            {this.state.screenCount !== 5 ?
                                <TouchableOpacity style={styles.secondaryBtn} onPress={this.showNext}>
                                    <Text style={{color:colors.primary,textAlign:'center'}}>Next</Text>
                                </TouchableOpacity>
                            : null}
                        </View>
                    </View>
                </View>
            </Index>
        )
    }
}


const styles = StyleSheet.create({
    heading        : {
        fontSize      : fontSize.title,
        letterSpacing : 1,
        fontFamily    : fontFamily.primaryBold
    },
    view2:{
        flex           :.45,
        alignItems     :'center',
        justifyContent :'center'
    },
    imgPoster:{
        width:300,
        height:276
    },
    view3 : {
        flex:.3,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    txt : {
        padding    :levels.l5,
        textAlign  :'center',
        lineHeight :20,
        fontFamily : fontFamily.primaryRegular
    },
    secondaryBtn: {
        borderRadius : 5,
        borderColor  : colors.primary,
        borderWidth  : 1,
        padding      : 4
    },
    dotView : {
        width          :'80%',
        flexDirection  :'row',
        justifyContent :'space-evenly'
    },
    dot : {
        height          : 10,
        width           : 10,
        borderRadius    : 5,
    },
    primaryBtn: {
        backgroundColor:colors.primary,
        borderRadius : 5,
        padding      : levels.l2,
        paddingLeft:levels.l7,
        paddingRight:levels.l7
    },
});