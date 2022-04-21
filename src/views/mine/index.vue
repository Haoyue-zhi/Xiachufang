<template>
  <!-- 导航栏 -->
  <navbar></navbar>
  <!-- 主要内容 -->
  <div class="content">
    <!-- 未登录页面 -->
    <def v-if="info === 0 && loading === false"></def>
    <!--骨架屏-->
    <van-skeleton title :row="10" :loading="loading" v-else-if="info === 0 && loading === true"/>
    <!-- 已登录页面 -->
    <done v-else></done>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import def from './components/default.vue'
import done from './components/done.vue'
import {computed} from 'vue'
import {useStore} from '@/store'

const store = useStore()

const loading = computed(() => store.showSkeleton)

const info = computed(() => Object.keys(store.info).length)
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
</style>