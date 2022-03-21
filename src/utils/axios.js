import axios from "axios";
import { getToken } from "./auth";
import { Toast } from "vant";
import { createApp } from "vue";
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
    if(config.otherURL === 'java'){
      config.baseURL = import.meta.env.VITE_BASE_URL2
    }
    config.headers["Authorization"] = getToken() || ''; // 请求头带上token
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
    Toast({ message: error.response.data.msg, duration: 1000 });
    return Promise.reject(error.response);
  }
);

export default _axios;
