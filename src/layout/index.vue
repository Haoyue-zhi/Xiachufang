<template>
  <div>
    <content></content>
    <tab></tab>
  </div>
</template>

<script setup>
import tab from './components/tabbar.vue'
import content from './components/content.vue'
import {onMounted} from 'vue'
import {useStore, mapMutations} from "vuex";
import {getInfo} from "@/api/mine";

const store = useStore()

onMounted(() => {
  getUserInfo()
})

// 获取用户信息
async function getUserInfo() {
  const res = await getInfo()
  // && res.code === '00000'
  if (res.code) {
    store.commit('setInfo', res.data)
    // console.log(res)
  }
}

</script>