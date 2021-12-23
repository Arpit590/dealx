import React, { useEffect,useRef,useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux';
import axios from 'axios';

import { SelectBox } from '../Atoms/CompUtils';

import { newStyle } from './newStyle';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

const Search = props => {
    const [results, setResults]               = useState([]);
    const [apiCalled, setApiCalled]           = useState(false)
    const [selected, setSelected]             = useState({})
    const [searching, setSearching]           = useState(false)
    
    let cancelToken = useRef()

    useEffect(() => {
        return () => {
            cancelToken.current && cancelToken.current()
        }
    }, [])

    const startSearch = () => {
        setSearching(prev => !prev)
        searchApi(finishSearch,props.type.toLowerCase())
    }

    //type parameter:
     // Search:
      // Deal
      // Buyers
      // Sellers
    const searchApi = (callback,type) => {
        const CancelToken = axios.CancelToken
        axios.get(`${type}/search`,{
            cancelToken : new CancelToken(c => {
                cancelToken.current = c
            }),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            callback(response.data)
        })
        .catch(err => {
            !axios.isCancel(err) ? callback(-1) : null
        })
    }

    const finishSearch = (fetchedBuyers) => {
        if(fetchedBuyers === -1){
            props.onNetworkFailure()
            setTimeout(() => {
                props.onNetworkFailure('reset')
            }, 2000)
        }
        else{
            setResults(prev => prev.concat(fetchedBuyers))
        }
        setSearching(prev => !prev)
        setApiCalled(prev => !prev)
    }

    //selected obj
    // { id : 
    //       {
    //          id : id
    //          name : name       
    //           ...details
    //       }
    // }
    const selectResults = (id,result) => {
        //result selection toggling
        setSelected(prev => { 
            if(prev && prev[id]){
                const key = id
                const { [key]: value, ...withoutId } = prev;
                return withoutId;
            }
            else{
                return {
                    ...prev,
                    [id] : result
                }
            }
        })
    }

    return(
        <>
            <View style={{paddingLeft:levels.l5,justifyContent:'center',borderColor:colors.textFaint,borderWidth:1,marginBottom:levels.l3}}>
                <TouchableOpacity 
                onPress={!apiCalled ? startSearch : null}
                style={[newStyle.input,{borderColor:colors.secondary}]}
                >
                    <Text style={{fontFamily:fontFamily.primary,color:colors.textLight}}>{`Search ${props.type}`}</Text>
                </TouchableOpacity>
                <MaterialCommunityIcons name="magnify" size={22} color={colors.textLight} style={{position:'absolute',left:levels.l2}} />
            </View>
            <View>
                {apiCalled > 0 ?
                    results.length > 0 ?
                        results.map((item,index) => {
                            return(
                            <TouchableOpacity 
                            style={[
                                newStyle.input,
                                {
                                    flexDirection:'row',justifyContent:'space-between',
                                    marginBottom:levels.l2
                                }
                            ]}
                            key={item[props.type.toLowerCase()+'id']}
                            activeOpacity={1}
                            onPress={() => selectResults(item[props.type.toLowerCase()+'id'],item)}
                            >
                                <Text style={{fontFamily:fontFamily.primaryRegular}}>{item[props.type.toLowerCase()+'name']}</Text>
                                <SelectBox 
                                acceptedTerms={selected.hasOwnProperty(item[props.type.toLowerCase()+'id']) ? true : false}
                                onPress={() => selectResults(item[props.type.toLowerCase()+'id'],item)}/>
                            </TouchableOpacity>
                            )
                        })
                    :
                        <Text style={{fontFamily:fontFamily.primary,color:colors.primaryLight}}></Text>
                :
                    null
                }
                {searching ? <ActivityIndicator/> : null}
            </View>
            {/* for new quotation screen */}
            {!props.newQuotation ?
            <TouchableOpacity 
                onPress={props.convertToAddNewUserModal}
                style={newStyle.add}
            > 
                <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
                <Text style={newStyle.addTxt}>Add New {props.type}</Text> 
            </TouchableOpacity>
            : null }
            <TouchableOpacity 
            onPress={Object.keys(selected).length > 0 ? () => props.actionAfterSearchAndSelect(selected) : null}
            style={[
                Object.keys(selected).length > 0 ? newStyle.primaryBtn : newStyle.disabledBtn,
                {marginTop:'auto',alignSelf:'center'}
            ]}>
                <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>{props.newQuotation ? 'Submit Quotaion' : 'Add ' + props.type}</Text>
            </TouchableOpacity>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onNetworkFailure : (reset) => dispatch({type:'NETWORKFAILURE',reset:reset}),
    }
}

export default connect(null,mapDispatchToProps)(Search)