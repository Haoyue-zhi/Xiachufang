<template>
  <div class="nav">
    <van-search placeholder="搜索我的收藏" background="#ffffff"/>
    <icon-svg class="add" name="icon-add"></icon-svg>
    <icon-svg class="bag" name="icon-bag"></icon-svg>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from '@/store'
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
    right: 100px;
    width: 268px;
  }

  .add {
    position: absolute;
    right: 65px;
    width: 26px;
    height: 26px;
  }

  .adduser {
    position: absolute;
    right: 60px;
    width: 20px;
    height: 20px;
  }

  .bag {
    position: absolute;
    right: 20px;
    width: 28px;
    height: 26px;
  }
}
</style>