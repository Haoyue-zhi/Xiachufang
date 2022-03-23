// 获取token
export function getToken() {
  return localStorage.getItem("token");
}

// 设置token
export function setToken(token) {
  return localStorage.setItem("token", `Bearer ${token}`);
}

// 删除token
export function delToken() {
  return localStorage.removeItem("token");
}
