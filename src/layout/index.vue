<template>
  <div>
    <content></content>
    <tab></tab>
  </div>
</template>

<script setup>
import tab from './components/tabbar.vue'
import content from './components/content.vue'
import {createApp, computed, ref} from 'vue';
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";
import {getInfo} from "@/api/mine";
import {getToken} from '@/utils/auth';
import {Toast} from 'vant';
const app = createApp();
app.use(Toast);

const store = useStore()
const router = useRouter()
const route = useRoute()

// 获取用户信息
getUserInfo()
const info = computed({
  get() {
    return store.state.info
  },
  set(val) {
    store.commit('setInfo', val)
  }
})
async function getUserInfo() {
  const hasToken = getToken()
  if (hasToken) {
    if (!localStorage.getItem('info')) {
      const res = await getInfo()
      if (res.code) {
        info.value = res.data || {}
      }
    } else {
      store.commit('resetInfo')
    }
  }
}

// 双击返回桌面
const nowRoute = computed(() => route.path)
const first = ref(null)
if (window.plus) {
  plus.key.addEventListener("backbutton", function () {
    if (['/home', '/store', '/collect', '/mine'].includes(nowRoute.value)) {
      if (!first.value) {
        first.value = new Date().getTime();
        Toast({message: '再按一次退出应用', duration: 1000});
        setTimeout(function () {
          first.value = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first.value < 1500) {
          plus.runtime.quit();
        }
      }
    } else {
      router.go(-1);
    }
  })
}

</script>