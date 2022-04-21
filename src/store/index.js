import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            areaCode: "", // 区号
            phone: "", // 手机号
            time: "", // 验证码倒计时,
            timer: null, // 计时器开关
            info: {}, // 用户信息
            code_id: "", // 短信ID
            showSkeleton: false, // 骨架屏开关
            works: "", // 作品
        }
    },
    actions: {
        // 保存区号、手机号
        setPhone(data) {
            this.areaCode = data.areaCode
            this.phone = data.phone
        },
        // 设置验证码定时器
        async setTime() {
            if (!this.timer) {
                this.time = 60;
                this.timer = setInterval(() => {
                    if (this.time === 0) {
                        clearInterval(this.timer);
                        this.timer = null;
                    } else {
                        this.time--;
                    }
                }, 1000);
            }
        },
        // 保存短信ID
        setCodeid(data) {
            this.code_id = data;
        },
        // 保存用户信息
        async setInfo(data) {
            this.info = data
            localStorage.setItem('info', JSON.stringify(data))
        },
        // 读取store中用户信息
        readInfo() {
            this.info = JSON.parse(localStorage.getItem('info'))
        },
        // 重置state
        async resetStore() {
            this.$reset()
            localStorage.removeItem('info')
            // for (let key in state) {
            //     state.key = ''
            //     if (key === 'info') {
            //         state.info = {}
            //     }
            // }
        },
        // 清空定时器
        clearTimer() {
            this.timer = clearInterval(this.timer)
            this.timer = null
        },
        // 设置骨架屏
        setSkeleton(data) {
            this.showSkeleton = data
        },
        // 添加作品
        setWorks(data) {
            this.works = data
        }
    }
})