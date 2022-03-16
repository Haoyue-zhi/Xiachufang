import axios from "axios";
import { getToken } from "./auth";

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
    config.headers["Authorization"] = getToken(); // 请求头带上token
    return config;
  },
  function (error) {
    error.data = {};
    error.data.msg = "服务器异常，请联系管理员！";
    return Promise.reject(error);
  }
);

const showStatus = (status) => {
  let message = "";
  // 这一坨代码可以使用策略模式进行优化
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

// 添加响应拦截器
_axios.interceptors.response.use(
  function (response) {
    const status = response.status;
    let msg = "";
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status);
      if (typeof response.data === "string") {
        response.data = { msg };
      } else {
        response.data.msg = msg;
      }
    }
    return response.data;
  },
  function (error) {
    error.data = {};
    error.data.msg = "请求超时或服务器异常，请检查网络或联系管理员！";
    return Promise.reject(error);
  }
);

export default _axios;
