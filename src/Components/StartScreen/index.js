import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenCount : 0
        }
    }
    render() {
        return (
            <LinearGradient colors={['#FFF4F5', '#F8F5F9', '#F0F6FF']} style={styles.linearGradient}>
                <View style={{flex:.2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:56,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../../assets/logo.png')} style={{width:48,height:48}}/>
                        <View style={{height:'100%',paddingLeft:levels.l2}}>
                            <Text style={styles.title}>worldref</Text>
                            <Text style={{alignItems:'center',fontSize:fontSize.h7,marginTop:-4,textAlign:'center'}}>Globalisation, Simplified</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:.5}}>
                    <Image source={require('../../assets/business-3d-0.png')} style={{width:'80%',height:'70%'}} />
                </View>
                <View style={{flex:.3,alignItems:'center'}}>
                    <Text style={styles.heading}>Monetise Your Network</Text>
                    <Text style={{padding:levels.l5,textAlign:'center',lineHeight:20}}>Refer Deals, Buyers or Sellers in your network. Earn assured success fee upon conversion of business.</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:.25}}></View>
                        <View style={{flex:.5,flexDirection:'row',justifyContent:'space-evenly'}}>
                            {Array.from(Array(6).keys()).map((item,index) => {
                                return (
                                    <View style={[index === this.state.screenCount ? {backgroundColor:colors.textPrimary} : null,styles.dot]}>
                                        {console.log(index)}
                                    </View>
                                )
                            })}
                            {/* <View style={[styles.dot]}>
                            </View> */}
                        </View>
                        <View style={{flex:.25}}>
                            <TouchableOpacity style={styles.secondaryBtn}>
                                <Text style={{color:colors.primary,textAlign:'center'}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    linearGradient: {
      flex         : 1,
      paddingLeft  : 16,
      paddingRight : 16,
    },
    title: {
        fontSize   : 32,
        color      : colors.textPrimary,
        fontFamily : fontFamily.primaryBold,
        fontWeight : 'bold'
    },
    heading        : {
        fontSize   : fontSize.title,
        fontWeight :'bold',
        letterSpacing : 1
    },
    secondaryBtn: {
        borderRadius : 5,
        borderColor  : colors.primary,
        borderWidth  : 1,
        padding : 4
    },
    dot : {
        height          : 12,
        width           : 12,
        borderRadius    : 6,
        backgroundColor : colors.textFaint
    }
  });