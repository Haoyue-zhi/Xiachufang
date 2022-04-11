<template>
    <div class="empty" v-if="true">
      <div class="title">你还未浏览过菜谱</div>
      <div class="subtitle">
        你可以方便的看到此前了浏览过的菜谱，让对比不同菜谱<br />更加简便。
      </div>
      <button>寻找高人气菜谱</button>
    </div>

    <div class="full" v-else>
      123abc
    </div>
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
</style>