<template>
  <div class="nav">
    <van-search placeholder="搜索商品" background="#ffffff"/>
    <icon-svg class="add" name="icon-add"></icon-svg>
    <icon-svg class="bag" name="icon-bag"></icon-svg>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();


</script>

<style scoped lang="scss">
.nav {

  .van-search {
    position: absolute;
    left: 11px;
    padding: 0;
    width: 281px;
    height: 36px;

    :deep(.van-search__content) {
      border-radius: 10px !important;
    }
  }

  .add {
    position: absolute;
    right: 65px;
    width: 26px;
    height: 26px;
  }

  .bag {
    position: absolute;
    right: 15px;
    width: 28px;
    height: 26px;
  }
}
</style>