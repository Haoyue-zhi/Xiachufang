<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 主要内容 -->
    <div class="content">

      <div class="tabs">
        <van-tabs v-model:active="active" sticky offset-top="52px" line-width="20px" color="#E86F58">
          <van-tab title="关注">关注</van-tab>
          <van-tab title="推荐">
            <h1 v-for="item in 20">推荐</h1>
          </van-tab>
          <van-tab title="分类">分类</van-tab>
        </van-tabs>
      </div>

    </div>
  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import {ref} from 'vue'

const active = ref(1);
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.tabs {
  .van-tabs {

    :deep .van-tabs__wrap {
      padding: 0 80px;
      background: #fff;
    }

    :deep .van-tabs__content, .van-tab__panel {
      height: 100% !important;
    }
  }
}
</style>
