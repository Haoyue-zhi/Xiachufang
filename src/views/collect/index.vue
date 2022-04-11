<template>
  <!-- 导航栏 -->
  <navbar></navbar>
  <!-- 主要内容 -->
  <div class="content">

    <van-tabs v-model:active="active" swipeable shrink sticky offset-top="52px" line-width="20px" color="#E86F58">
      <van-tab title="菜单">
        <v-menu></v-menu>
      </van-tab>
      <van-tab title="浏览历史">
        <v-history></v-history>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script setup>
import navbar from './components/navbar.vue'
import vMenu from './components/menu.vue'
import vHistory from './components/history.vue'
import { ref } from 'vue'

const active = ref(0)
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
</style>