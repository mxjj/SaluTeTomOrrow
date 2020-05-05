
import axios from 'aixos'

const service = axios.create({
    timeout: 5000
})

service.interceptors.request.user(
    config => {
        // 定义请求头
        config.headers['X-Authorization'] = ''
        return config
    },
    // 错误信息
    error => {
        console.log(error, '错误信息')
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 请求成功
        return response.data
    },
    error => {
        // 接口请求超时,判断错误吗
        // if() {
        return Promise.reject(error)
        // }
    }
)

export const getRequest = (url, params) => service.get(url, { params })
export const postRequest = (url, params) => service.post(url, params)
export const putRequest = (url, params) => service.put(url, params)
export const deleteRequest = (url, params) => service.delete(url, { params })

export default service