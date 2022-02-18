import axios from '@/utils/axios'

// 注册
export function register(data) {
    return axios({
        url: `/users/register`,
        method: 'post',
        data
    })
}

// 登录
export function login(data) {
    return axios({
        url: `/users/login`,
        method: 'post',
        data
    })
}

// 获取用户token信息
export function info(query) {
    return axios({
        url: `/users/info`,
        method: 'get',
        query
    })
}