import axios from "axios";
import {getToken, removeToken} from "./auth";
import {Toast} from "vant";
import {createApp} from "vue";
import store from '@/store'

const app = createApp();
app.use(Toast);

let config = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 60 * 1000, // Timeout
    headers: {
        get: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        post: {
            "Content-Type": "application/json;charset=utf-8",
        },
    },
};

const _axios = axios.create(config);

// 添加请求拦截器
_axios.interceptors.request.use(
    function (config) {
        if (config.otherURL === 'java') {
            config.baseURL = import.meta.env.VITE_BASE_URL2
        } else if (config.otherURL === 'map') {
            config.baseURL = import.meta.env.VITE_BASE_URL3
        }
        config.otherURL !== 'map' ? config.headers["Authorization"] = getToken() : ''; // 除定位接口外请求头带上token
        console.log(config);
        return config;
    },
    function (error) {
        error.data = {};
        error.data.msg = "服务器异常，请联系管理员！";
        return Promise.reject(error);
    }
);

// 添加响应拦截器
_axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error.response === undefined) { // 服务器连接超时
            Toast({message: '服务器连接超时！', duration: 1000});
        } else if (error.response.data.code === '20100' || error.response.data.code === '20101') { // token过期或无效
            removeToken()
            store.dispatch('resetStore')
        } else {
            Toast({message: error.response.data.msg, duration: 1000});
        }
        return Promise.reject(error.response || 'Error');
    }
);

export default _axios;
