<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">

    <div class="empty" v-if="true">
      <div class="title">你好像还未收藏过</div>
      <div class="subtitle">
        如果你喜欢某个菜谱，只需要将它收藏，以后就可以在<br />这里找到。
      </div>
      <button>寻找高人气菜谱</button>
    </div>

    <div class="full" v-else>
      123abc
    </div> 

  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'

// 下拉刷新
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
.van-pull-refresh {
  min-height: calc(100vh - 164px);
  .empty {
    min-height: calc(100vh - 164px);
    text-align: center;

    .title {
      font-size: 28px;
      padding-top: 155px;
      margin-bottom: 37px;
    }

    .subtitle {
      font-size: 14px;
      font-weight: normal;
      text-align: center;
      margin-bottom: 41px;
    }

    button {
      color: $theme-color;
      font-size: 16px;
      font-weight: bold;
      background: none;
      border: none;
    }
  }
}
</style>