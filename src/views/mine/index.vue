<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 主要内容 -->
    <div class="content">
      <!-- 未登录页面 -->
      <def v-if="info"></def>
      <!-- 已登录页面 -->
      <done v-else></done>
    </div>
  </div>

</template>

<script setup>
import navbar from './components/navbar.vue'
import def from './components/default.vue'
import done from './components/done.vue'
import {computed} from 'vue'
import {useStore} from "vuex";

const store = useStore()

const info = computed(() => {
  return Object.keys(store.state.info).length === 0
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

</style>