<template>
  <div>
    <content></content>
    <tab></tab>
  </div>
</template>

<script setup>
import tab from './components/tabbar.vue'
import content from './components/content.vue'
import { computed } from 'vue';
import { useStore } from "vuex";
import { getInfo } from "@/api/mine";
import { getToken } from '@/utils/auth';

const store = useStore()

getUserInfo()

const info = computed({
  get () {
    return store.state.info
  },
  set (val) {
    store.commit('setInfo', val)
  }
})

// 获取用户信息
async function getUserInfo () {
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

</script>