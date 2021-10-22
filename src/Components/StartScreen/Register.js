import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet } from 'react-native';

import Index  from './Index'
import Login from './Login';

import { fontFamily } from '../../commonStyle';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            translateAnim: new Animated.Value(0),
            loginSection : true
        }
    }

    render() {
        return (
            <Index screenName="register">
                <View style={styles.container}>
                    <Text style={styles.title}>Log In</Text>
                    <Login navigation={this.props.navigation}/>
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
        alignItems:'center'
    },
    title : {
        fontFamily : fontFamily.tertiaryMd,
        fontSize : 24,
    }
})

export default Register
