import {
    createStore
} from "vuex";

export default createStore({
    state: {
        areaCode: "", // 区号
        phone: "", // 手机号
        time: "", // 验证码倒计时,
        timer: null, // 计时器开关
        info: {}, // 用户信息
        code_id: "", // 短信ID
    },
    mutations: {
        // 保存区号、手机号
        setPhone(state, data) {
            state.areaCode = data.areaCode;
            state.phone = data.phone;
        },
        // 设置验证码定时器
        setTime(state) {
            if (!state.timer) {
                state.time = 60;
                state.timer = setInterval(() => {
                    if (state.time === 0) {
                        clearInterval(state.timer);
                        state.timer = null;
                    } else {
                        state.time--;
                    }
                }, 1000);
            }
        },
        // 保存短信ID
        setCodeid(state, data) {
            state.code_id = data;
        },
        // 保存用户信息
        setInfo(state, data) {
            state.info = data
            localStorage.setItem('info', JSON.stringify(data))
        },
        // 读取store中用户信息
        resetInfo(state) {
            state.info = JSON.parse(localStorage.getItem('info'))
        },
        // 重置state
        resetStore(state) {
            localStorage.removeItem('info')
            for (let key in state) {
                state.key = ''
                if (key === 'info') {
                    state.info = {}
                }
            }
        },
        // 清空定时器
        clearTimer(state) {
            state.timer = clearInterval(state.timer)
            state.timer = null
        }
    },
    actions: {
        setTime(context) {
            context.commit("setTime");
        },
    },
    modules: {},
});