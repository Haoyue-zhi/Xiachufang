<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 主要内容 -->
    <div class="content">

      <van-tabs v-model:active="active" swipeable sticky offset-top="52px" line-width="20px" color="#E86F58">
        <van-tab title="关注">关注</van-tab>
        <van-tab title="推荐">
          <recommend></recommend>
        </van-tab>
        <van-tab title="分类">
          <sort></sort>
        </van-tab>
      </van-tabs>

    </div>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import sort from './components/sort.vue'
import recommend from './components/recommend.vue'
import {ref} from 'vue'

const active = ref(1);
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";


.van-tabs {
  :deep .van-tabs__nav--line {
    padding-left: 80px;
    padding-right: 80px;
  }
}

</style>
