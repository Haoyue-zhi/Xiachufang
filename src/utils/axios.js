import axios from "axios"

let config = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// 添加请求拦截器
_axios.interceptors.request.use(function (config) {
        config.headers['Authorization'] = localStorage.getItem('token') // 请求头带上token
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
_axios.interceptors.response.use(function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        if (response.data && response.data.code === (401 || 403)) { // 401,token失效;403,token无效.
            console.log(response.data)
        }
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default _axios
