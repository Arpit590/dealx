import * as actionTypes from '../actions';

const initialState = {
    networkFailureState : false
}

const networkFailureReducer = (state=initialState,action) => {
    if(action.type==actionTypes.NETWORKFAILURE){
        if(action.reset){
            return{
                ...state,
                networkFailureState : false
            } 
        }
        else{
            return{
                ...state,
                networkFailureState : true
            }
        }
    }
    return state;
}

export const transactionState = (state={transaction: []}, action)=>{
    switch(action.type){
        case actionTypes.TRANSACTION_STATE:
            return {transaction : [action.payload]}
        default:
            return state;
    }
}


export default networkFailureReducer;