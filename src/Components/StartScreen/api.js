import axios from "axios"

export const loginApi = (email,password,cancelToken,callback) => {
    const CancelToken = axios.CancelToken
    axios.post('login',{email:'eve.holt@reqres.in',password:password},{
        cancelToken : new CancelToken(c => {
            cancelToken = c
        })
    })
    .then(response => {
        callback(response.data)
    })
    .catch(err => {
        return 0
    })
}
