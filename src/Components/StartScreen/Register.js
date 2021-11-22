import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet } from 'react-native';

import Index  from '../Index'
import Inputs from './Inputs';

import { fontFamily } from '../../commonStyle';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            translateAnim: new Animated.Value(0),
            loginSection : true
        }

        this.toggleSection = this.toggleSection.bind(this)
    }

    toggleSection(animationCallback){
        this.setState(prevState => {
            return{
                ...prevState,
                loginSection : !prevState.loginSection
            }
        })
        animationCallback()
    }

    render() {
        return (
            <Index screenName="register">
                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.loginSection ?  'Log In' : 'Sign Up'}</Text>
                    <Inputs 
                    navigation={this.props.navigation} 
                    loginSection={this.state.loginSection}
                    toggleSection={this.toggleSection}
                    />
                </View>
                {this.props.networkFailure ?
                    <NetworkFailurePopup />
                : null}
            </Index>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:150,
        paddingBottom:50,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center'
    },
    title : {
        fontFamily : fontFamily.tertiaryMd,
        fontSize : 24,
    }
})

export default Register
