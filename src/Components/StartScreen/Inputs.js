import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native'
import { connect } from 'react-redux';
import {Feather} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

import { loginApi, signUpApi } from './api';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';
import { SelectBox } from '../Atoms/CompUtils';

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
            scaleAnim : new Animated.Value(0),
            acceptedTerms : false
        }
        this.register         = this.register.bind(this)
        this._onChangeText    = this._onChangeText.bind(this)
        this.callbackRegister = this.callbackRegister.bind(this)
        this.scaleInputs      = this.scaleInputs.bind(this)
        this.acceptTerms      = this.acceptTerms.bind(this)

        // api cancel tokens
        this.cancelToken;
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
            if(!/^[A-Za-z ]+$/.test(this.state.name) || this.state.name.length > 50 || this.state.name.length < 3){
                this.setState(prevState => {
                    return{
                        ...prevState,
                        error:'Invalid name.Only letters(A-z,a-z) are allowed.(Min. length=3 chars)',
                    }
                })
                return;
            }
            if(this.state.password.length < 6){
                this.setState(prevState => {
                    return{
                        ...prevState,
                        error:'Password is too short(6 characters atleast)'
                    }
                })
                return;
            }
            if(!this.state.acceptedTerms){
                this.setState(prevState => {
                    return{
                        ...prevState,
                        error:'Please accept Terms and Conditions'
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
        else if(!this.props.loginSection && !this.state.acceptedTerms){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Please accept terms and conditions.',
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
            this.props.loginSection ? loginApi(this.state.email,this.state.password,this.cancelToken,this.callbackRegister) : signUpApi(this.state.email,this.state.name,this.state.password,this.cancelToken,this.callbackRegister) 
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

    async callbackRegister(data){
        if(data.error){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error : data.error
                }
            })
        }
        else if(data.success){
            //saving confidential data into mobile secure database
            await SecureStore.setItemAsync('token', data.success.tokenType + ' ' + data.success.accessToken);
            await SecureStore.setItemAsync('username', data.success.userName);
            await AsyncStorage.setItem('@fullName', data.success.fullName)

            axios.defaults.headers.common['Authorization'] = data.success.tokenType + ' ' + data.success.accessToken;
            this.props.onAuth(data.success.userName,data.success.fullName);
            this.props.navigation.navigate('New')
        }
        else{
            this.props.onNetworkFailure()
            setTimeout(() => {
                this.props.onNetworkFailure('reset')
            }, 2500);
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

    acceptTerms(){
        this.setState(prevState => {
            return{
                ...prevState,
                acceptedTerms : !prevState.acceptedTerms
            }
        })
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
                        <Text style={styles.label}>Name</Text>
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
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <SelectBox 
                        onPress={this.acceptTerms} 
                        acceptedTerms={this.state.acceptedTerms} />
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
        onAuth : (username,fullName) => dispatch({type:'LOGIN',username:username,fullName:fullName}),
    }
}

export default connect(null,mapDispatchToProps)(Inputs)
