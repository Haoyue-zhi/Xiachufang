<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 主要内容 -->
    <div class="content">
      <div class="tabs">
        <van-tabs v-model:active="active" sticky offset-top="52px" line-width="20px" color="#E86F58">
          <van-tab title="菜单">
            <h1 v-for="item in 20">菜单</h1>
          </van-tab>
          <van-tab title="分类">浏览历史</van-tab>
        </van-tabs>
      </div>
    </div>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.tabs {
  .van-tabs {

    :deep .van-tabs__wrap {
      padding-left: 15px;
      padding-right: 270px;
      background: #fff;
    }

    :deep .van-tabs__content, .van-tab__panel {
      height: 100% !important;
    }
  }
}
</style>