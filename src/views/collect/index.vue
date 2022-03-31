<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 主要内容 -->
    <div class="content">

      <van-tabs v-model:active="active" swipeable shrink sticky offset-top="52px" line-width="20px" color="#E86F58">
        <van-tab title="菜单">
          <h1 v-for="item in 20">菜单</h1>
        </van-tab>
        <van-tab title="分类">浏览历史</van-tab>
      </van-tabs>
    </div>


  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import {ref} from 'vue'

const active = ref(0)
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";


</style>