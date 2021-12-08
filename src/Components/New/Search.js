import React, { useEffect,useRef,useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux';
import axios from 'axios';

import { SelectBox } from '../Atoms/CompUtils';

import { newStyle } from './newStyle';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

const Search = props => {
    const [buyers, setBuyers] = useState([]);
    const [buyerApiCalled, setBuyerApiCalled] = useState(false)
    const [selectedBuyers, setSelectedBuyers] = useState({})
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
            setBuyers(prev => prev.concat(fetchedBuyers))
        }
        setSearching(prev => !prev)
        setBuyerApiCalled(prev => !prev)
    }

    //selected buyer obj
    // { buyerId : 
    //       {
    //          buyerId : buyerId
    //          buyerName : name       
    //           ...buyer details
    //       }
    // }
    const selectBuyer = (buyerId,buyer) => {
        //buyer selection toggling
        setSelectedBuyers(prev => { 
            if(prev && prev[buyerId]){
                const key = buyerId
                const { [key]: value, ...withoutBuyerId } = prev;
                return withoutBuyerId;
            }
            else{
                return {
                    ...prev,
                    [buyerId] : buyer
                }
            }
        })
    }

    return(
        <>
            <View style={{paddingLeft:levels.l5,justifyContent:'center',borderColor:colors.textFaint,borderWidth:1,marginBottom:levels.l3}}>
                <TouchableOpacity 
                onPress={!buyerApiCalled ? startSearch : null}
                style={[newStyle.input,{borderColor:colors.secondary}]}
                >
                    <Text style={{fontFamily:fontFamily.primary,color:colors.textLight}}>{`Search ${props.type}`}</Text>
                </TouchableOpacity>
                <MaterialCommunityIcons name="magnify" size={22} color={colors.textLight} style={{position:'absolute',left:levels.l2}} />
            </View>
            <View>
                {buyerApiCalled > 0 ?
                    buyers.length > 0 ?
                        buyers.map((item,index) => {
                            return(
                            <TouchableOpacity 
                            style={[
                                newStyle.input,
                                {
                                    flexDirection:'row',justifyContent:'space-between',
                                    marginBottom:levels.l2
                                }
                            ]}
                            key={item.buyerid}
                            activeOpacity={1}
                            onPress={() => selectBuyer(item.buyerid,item)}
                            >
                                <Text style={{fontFamily:fontFamily.primaryRegular}}>{item.buyername}</Text>
                                <SelectBox 
                                acceptedTerms={selectedBuyers.hasOwnProperty(item.buyerid) ? true : false}
                                onPress={() => selectBuyer(item.buyerid,item)}/>
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
            onPress={Object.keys(selectedBuyers).length > 0 ? () => props.actionAfterSearchAndSelect(selectedBuyers) : null}
            style={[
                Object.keys(selectedBuyers).length > 0 ? newStyle.primaryBtn : newStyle.disabledBtn,
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