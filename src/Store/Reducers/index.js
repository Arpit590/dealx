import {combineReducers} from 'redux';
import axios from "axios";

import {AXIOS_BASE_URL} from '@env'
import networkFailureReducer from './networkFailureReducer'

axios.defaults.baseURL = AXIOS_BASE_URL;

export default combineReducers ({
    networkFailure : networkFailureReducer,
})