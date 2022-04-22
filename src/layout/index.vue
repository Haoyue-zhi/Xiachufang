<template>
  <div>
    <content></content>
    <tab></tab>
  </div>
</template>

<script setup>
import tab from './components/tabbar.vue'
import content from './components/content.vue'
import {useStore} from '@/store'
import {useRouter, useRoute} from "vue-router";
import {getInfo} from "@/api/mine";
import {getToken} from '@/utils/auth';

const store = useStore()
const router = useRouter()
const route = useRoute()

// 获取用户信息
getUserInfo()

async function getUserInfo() {
  const hasToken = getToken()
  if (hasToken) {
    if (localStorage.getItem('info')) {
      // 先读缓存
      store.readInfo()
    }
    // 从后台获取
    const res = await getInfo()
    if (res.code && res.code === '00000') {
      store.setInfo(res.data)
    }
  }
}
</script>