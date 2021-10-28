//networkReducer
export const NETWORKFAILURE = 'NETWORKFAILURE'
export const TRANSACTION_STATE = "TRANSACTION_STATE"

export const addTransactionState=(transaction)=>{
    return{
        type: TRANSACTION_STATE,
        payload: transaction
    }
}