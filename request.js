import axios from 'axios'


export function request(config) {

    // return new Promise((resolve,reject) => {
        const instance = axios.create({
            baseURL: 'http://106.54.54.237:8000/api/v1',
            // baseURL: 'http://123.207.32.32:8000/api/vip',
            timeout: 5000
        })

        // instance.interceptors.request.use(config => {//请求拦截
          
        //     return config
        // },err => {
        //     // console.log(err);
        // })

        // instance.interceptors.response.use(res => {//响应拦截
        //     return res.data
        // },err => {
        //     console.log(err);
            
        // })
            
        return instance(config)
        // .then(res => {
        // resolve(res)
        // }).catch(err => {
        // reject(err)
        // })
    
    // })
    
}