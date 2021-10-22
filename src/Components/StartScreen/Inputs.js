import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native'
import { connect } from 'react-redux';

import { loginApi } from './api';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export class Inputs extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email : '',
            password : '',
            password1 : '',
            invalidEmail : false,
            invalidPassword : false,
            error : '',
            scaleAnim : new Animated.Value(0)
        }
        this.register      = this.register.bind(this)
        this._onChangeText = this._onChangeText.bind(this)
        this.callbackLogin = this.callbackLogin.bind(this)
        this.scaleInputs   = this.scaleInputs.bind(this)

        // api cancel tokens
        this.loginToken;
    }

    register(){
        //reset network failure state
        this.props.onNetworkFailure('reset');

        //validating inputs
        //validation inputs on signup section
        if(!this.props.loginSection){
            if(!this.state.name){
                this.setState(prevState => {
                    return{
                        ...prevState,
                        error:'Name required',
                    }
                })
                return;
            }
            if(!/^[A-Za-z]+$/.test(this.state.name) || this.state.name.length > 50){
                this.setState(prevState => {
                    return{
                        ...prevState,
                        error:'Invalid name.Only letters(A-z,a-z) are allowed.(Max. length=50 chars)',
                    }
                })
                return;
            }
        }
        if(!this.state.email){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Email required',
                    invalidEmail : true
                }
            })
        }
        else if(!/^\S+@\S+\.\S+$/i.test(this.state.email) || this.state.email.length > 255){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Invalid email',
                    invalidEmail : true
                }
            })
        }
        else if(!this.state.password){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Password required',
                    invalidPassword : true
                }
            })
        }
        else if(!this.props.loginSection && (this.state.password !== this.state.password1)){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Passwords do not match.',
                }
            })
        }
        else{
            this.setState(prevState => {
                return{
                    ...prevState,
                    loading : true,
                    error:''
                }
            })
            //calling API
            loginApi(this.state.email,this.state.password,this.loginToken,this.callbackLogin)
        }
    }

    _onChangeText(val,type){
        this.setState(prevState => {
            return{
                ...prevState,
                [type]: val,
                error:'',
                invalidEmail : false,
                invalidPassword : false,  
            }
        })
    }

    callbackLogin(data){
        if(data !== -1){
            console.log(data)
        }
        else{
            this.props.onNetworkFailure();
            setTimeout(() => {
                //reset network
                this.props.onNetworkFailure('reset');
            }, 3000);
        }
    }

    scaleInputs(){
        this.setState(prevState => {
            return{
                ...prevState,
                error : ''
            }
        })
        Animated.timing(this.state.scaleAnim, {
            toValue : 1 - (!this.props.loginSection ? 1 : 0),
            duration : 400,
            useNativeDriver : true
        }).start()
    }

    render() {
        return (
            <View style={{width:'100%',marginTop:levels.l7}}> 
                    <Animated.View 
                        style={{
                            height:this.props.loginSection ? 0 : null,
                            transform:[{scale:this.state.scaleAnim}]
                        }}
                    >
                        <Text style={styles.label}>Name Address</Text>
                        <TextInput 
                            placeholder="Enter your name"
                            autoCapitalize="none"
                            onChangeText={(val) => this._onChangeText(val,'name')}
                            style={[{marginBottom:levels.l4},styles.inputs]}
                        />
                    </Animated.View>
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                    keyboardType="email-address"
                    placeholder="Enter email address"
                    autoCapitalize="none"
                    onChangeText={(val) => this._onChangeText(val,'email')}
                    style={[{marginBottom:levels.l4},styles.inputs]}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter password"
                    onChangeText={(val) => this._onChangeText(val,'password')}
                    style={[{marginBottom:levels.l3},styles.inputs]}
                />
                    <Animated.View 
                        style={{
                            height:this.props.loginSection ? 0 : null,
                            transform:[{scale:this.state.scaleAnim}],
                        }}
                    >
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="Confirm your password"
                            onChangeText={(val) => this._onChangeText(val,'password1')}
                            style={[{marginBottom:levels.l4},styles.inputs]}
                        />
                    </Animated.View>
                {this.props.loginSection ? 
                    <TouchableOpacity>
                        <Text style={styles.forgotTxt}>Forgot Password?</Text>
                    </TouchableOpacity>
                : 
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontFamily:fontFamily.primaryRegular,marginRight:levels.l1}}>
                            I agree to the
                        </Text> 
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Text style={{textDecorationLine:'underline',color:colors.primary}}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View>
                    {this.state.error ? 
                        <Text style={styles.error}>{this.state.error}</Text> 
                    : null}
                    <TouchableOpacity style={styles.primaryBtn} onPress={this.register}>
                        <Text style={styles.btnTxt}>
                            {this.props.loginSection ? 'Log In' : 'Sign Up'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.toggleSection(this.scaleInputs)}>
                    <Text style={styles.createAcc}>
                        {this.props.loginSection ? 'New to WorldRef?' : 'Already have an account?'}
                        <Text style={{color:colors.primary}}>
                        {this.props.loginSection ? ' Create an account' : ' Login'}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label : {
        fontFamily : fontFamily.tertiarySemi,
        marginBottom:levels.l3
    },
    inputs : {
        borderWidth : 1,
        borderRadius : 8,
        borderColor : colors.textFaint,
        padding:levels.l3,
        fontFamily : fontFamily.tertiaryMd
    },
    forgotTxt : {
        color:colors.textLight,
        alignSelf:'flex-end',
        fontFamily:fontFamily.tertiaryMd,
        fontSize : fontSize.h4
    },
    error : {
        fontSize:fontSize.h4,
        color:colors.alert,
        alignSelf:'center',
        position:'absolute',
        bottom:56,
        fontFamily:fontFamily.tertiaryLt
    },
    primaryBtn: {
        backgroundColor:colors.primary,
        borderRadius : 5,
        borderColor : colors.primary,
        padding : levels.l3,
        paddingLeft:levels.l7,
        paddingRight:levels.l7,
        alignSelf:'center',
        marginTop : 48,
    },
    btnTxt : {
        color:colors.secondary,
        fontSize:fontSize.h1,
        fontFamily:fontFamily.primaryBold
    },
    createAcc : {
        color:colors.textLight,
        fontSize:fontSize.h5,
        alignSelf:'center',
        marginTop:levels.l4,
        fontFamily : fontFamily.tertiaryMd
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onNetworkFailure : (reset) => dispatch({type:'NETWORKFAILURE',reset:reset}),
    }
}

export default connect(null,mapDispatchToProps)(Inputs)
