import axios from "@/utils/axios";

// 测试
export function test(params) {
    return axios({
        url: `/users/test`,
        method: "get",
        // otherURL:'java', 调用java接口
        params,
    });
}

// 发送验证码
export function sendSms(data) {
    return axios({
        url: `/users/sendSms`,
        method: "post",
        data,
    });
}

// 验证码注册/登录
export function register(data) {
    return axios({
        url: `/users/register`,
        method: "post",
        data,
    });
}

// 登录
export function login(data) {
    return axios({
        url: `/users/login`,
        method: "post",
        data,
    });
}

// 获取用户信息
export function getInfo(params) {
    return axios({
        url: "/usve/user/simple",
        method: "get",
        otherURL: "java",
        params,
    });
}

// 编辑用户信息
export function editInfo(data) {
    return axios({
        url: "/usve/user/simple",
        method: "post",
        otherURL: "java",
        data,
    });
}

// 修改密码
export function editPas(data) {
    return axios({
        url: "/users/editPas",
        method: "post",
        data,
    });
}

// 展示收货地址、查看单个地址
export function showAddress(id) {
    return axios({
        url: id ? `/usve/address/simple/${id}` : `/usve/address/simple`,
        method: "get",
        otherURL: "java"
    });
}

// 新增/修改收货地址、设置默认地址
export function addAddress(id, data) {
    return axios({
        url: id ? `/usve/address/simple/${id}` : `/usve/address/simple`,
        method: "post",
        otherURL: "java",
        data
    });
}

// 删除收货地址
export function delAddress(id) {
    return axios({
        url: `/usve/address/simple/${id}`,
        method: "delete",
        otherURL: "java",
    });
}