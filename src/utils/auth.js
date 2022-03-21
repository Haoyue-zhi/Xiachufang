// 获取token
export function getToken() {
  localStorage.getItem("token");
}

// 设置token
export function setToken(token) {
  localStorage.setItem("token", `Bearer ${token}`);
}

// 删除token
export function delToken() {
  localStorage.removeItem("token");
}
