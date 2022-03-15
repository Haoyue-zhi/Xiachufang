import { createStore } from "vuex";

export default createStore({
  state: {
    areaCode: '', // 区号
    phone: '', // 手机号
    time: '', // 验证码倒计时,
    timer: null, // 计时器开关
    info:{}, // 用户信息
    code_id:'' // 短信ID
  },
  mutations: {
    // 保存区号、手机号
    setPhone(state,data) {
      state.areaCode = data.areaCode;
      state.phone = data.phone;
    },
    // 设置验证码定时器
    setTime(state){
      if(!state.timer){
        state.time = 60
        state.timer = setInterval(() => {
          if (state.time === 0) {
            clearInterval(state.timer);
            state.timer = null
          } else {
            state.time--
          }
        }, 1000);
      }
    }
  },
  actions: {
    setTime(context){
      context.commit('setTime')
    }
  },
  modules: {},
});
