import React, { Component } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';

import NetworkFailurePopup from './Atoms/networkFailurePopup';
import { colors, fontFamily, fontSize, levels } from '../commonStyle';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            translateAnim: new Animated.Value(0)
        }
    }
    componentDidMount(){
        if(this.props.screenName === 'register'){
            // animation for logo
            Animated.timing(this.state.translateAnim, {
                toValue: 100,
                duration: 300,
                useNativeDriver:true
            }).start();
        }
    }

    render() {
        const logoView = (
            <View style={styles.iconView}>
                <Image source={require('../../assets/logo.png')} style={styles.imgAttr}/>
                <View style={{height:'100%',paddingLeft:levels.l2}}>
                    <Text style={styles.title}>worldref</Text>
                    <Text style={styles.tagline}>Globalisation, Simplified</Text>
                </View>
            </View>
        )
        return (
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <SafeAreaView style={{backgroundColor:'#FFF4F5',flex:0}}/>
                <SafeAreaView style={{flex:1,backgroundColor:'#F0F6FF'}}>
                    <LinearGradient colors={['#FFF4F5', '#F8F5F9', '#F0F6FF']} style={styles.linearGradient}>
                        {this.props.screenName === 'splash' && this.props.screenCount !== 5 ? 
                        <TouchableOpacity style={styles.skipBtn} onPress={this.props.skip}>
                            <Text style={{color:colors.primary,textDecorationLine:'underline'}}>Skip</Text>
                        </TouchableOpacity>
                        : null }
                        {this.props.screenName === 'register' ?
                            <Animated.View style={[
                                {transform:[{translateY:this.state.translateAnim}]},
                                styles.view1
                            ]}>
                                {logoView}
                            </Animated.View>
                        :
                            <View style={styles.view1}>
                                {logoView}
                            </View>
                        }
                        {this.props.children}
                    </LinearGradient>
                    {this.props.networkFailure ?
                        <NetworkFailurePopup />
                    : null}
                </SafeAreaView>
            </ScrollView>
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

const mapStateToProps = state => {
    return {
        networkFailure : state.networkFailure.networkFailureState
    }
}

export default connect(mapStateToProps,null)(Index)