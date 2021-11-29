import {combineReducers} from 'redux';
import axios from "axios";

import {AXIOS_BASE_URL} from '@env'
import networkFailureReducer, { transactionState } from './networkFailureReducer'
import authReducer from './authReducer';

axios.defaults.baseURL = AXIOS_BASE_URL;

export default combineReducers ({
    networkFailure : networkFailureReducer,
    userInfo       : authReducer,
    transaction    : transactionState
})