//networkReducer
export const NETWORKFAILURE = 'NETWORKFAILURE'
export const TRANSACTION_STATE = "TRANSACTION_STATE"

//AUTHREDUCER
export const LOGIN  = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const addTransactionState=(transaction)=>{
    return{
        type: TRANSACTION_STATE,
        payload: transaction
    }
}