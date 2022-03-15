// 获取token
export function getToken() {
  localStorage.getItem("token");
}

// 设置token
export function setToken() {
  localStorage.setItem("token", `Bearer ${data.data.token}`);
}

// 删除token
export function delToken() {
  localStorage.removeItem("token");
}
