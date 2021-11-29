import axios from "axios"

export const loginApi = (email,password,cancelToken,callback) => {
    const CancelToken = axios.CancelToken
    axios.post('user/signin',{userName:email,password:password},{
        cancelToken : new CancelToken(c => {
            cancelToken = c
        }),
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        callback({'success':JSON.stringify(response.data)})
    })
    .catch(err => {
        err.response.status === 401 ? 
            callback({'error': 'Incorrect password'}) 
        :
            err.response && err.response.data && err.response.data.message ? callback({'error':err.response.data.message}) : callback(-1)
    })
}

export const signUpApi = (email,name,password,cancelToken,callback) => {
    const CancelToken = axios.CancelToken
    axios.post('user/signup',{userName:email,fullName:name,password:password,role:["dealmanager","associate"]},{
        cancelToken : new CancelToken(c => {
            cancelToken = c
        }),
        headers : {
            'Content-Type': 'application/json'
        }})
    .then(response => {
        loginApi(email,password,cancelToken,callback)
    })
    .catch(err => {
        err.response && err.response.data && err.response.data.message ? callback({'error':err.response.data.message}) : callback(-1)
    })
}
