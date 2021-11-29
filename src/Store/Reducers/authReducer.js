import axios from 'axios';

import * as actionTypes from '../actions';

const initialState = {
    username : null,
    fullName : null
}

const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return{
                ...state,
                username : action.username,
                fullName : action.fullName,
            }
        case actionTypes.LOGOUT:
            axios.defaults.headers.common['Authorization'] = "";
            return {
                state : null,
            }
    }
    return state;
}

export default authReducer;