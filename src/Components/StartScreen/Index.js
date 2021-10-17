import React, { Component } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export class Index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <SafeAreaView style={{backgroundColor:'#FFF4F5',flex:0}}/>
                <SafeAreaView style={{flex:1,backgroundColor:'#F0F6FF'}}>
                    <LinearGradient colors={['#FFF4F5', '#F8F5F9', '#F0F6FF']} style={styles.linearGradient}>
                        {this.props.screenName === 'splash' ? 
                        <TouchableOpacity style={styles.skipBtn} onPress={this.props.skip}>
                            <Text style={{color:colors.primary,textDecorationLine:'underline'}}>Skip</Text>
                        </TouchableOpacity>
                        : null }
                        <View style={styles.view1}>
                            <View style={styles.iconView}>
                                <Image source={require('../../assets/logo.png')} style={styles.imgAttr}/>
                                <View style={{height:'100%',paddingLeft:levels.l2}}>
                                    <Text style={styles.title}>worldref</Text>
                                    <Text style={styles.tagline}>Globalisation, Simplified</Text>
                                </View>
                            </View>
                        </View>
                        {this.props.children}
                    </LinearGradient>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex         : 1,
        paddingLeft  : 16,
        paddingRight : 16,
    },
    skipBtn:{
        flex:.05,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:16
    },
    view1 :{
        flex           :.15,
        flexDirection  :'row',
        alignItems     :'center',
        justifyContent :'center'
    },
    iconView :{
        height         :56,
        width          :'100%',
        flexDirection  :'row',
        alignItems     :'center',
        justifyContent :'center'
    },
    tagline : {
        alignItems :'center',
        fontSize   :fontSize.h7,
        marginTop  :-4,
        textAlign  :'center'
    },
    imgAttr : {
        width:48,
        height:48
    },
    title: {
        fontSize   : 32,
        color      : colors.textPrimary,
        fontFamily : fontFamily.primaryBold,
    },
})
