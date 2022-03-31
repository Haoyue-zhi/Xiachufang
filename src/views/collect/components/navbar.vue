<template>
  <div class="nav">
    <icon-svg class="add" name="icon-add"></icon-svg>
    <van-search placeholder="搜索我的收藏" background="#ffffff"/>
    <icon-svg class="adduser" name="icon-adduser"></icon-svg>
    <icon-svg class="set" name="icon-set"></icon-svg>
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
    left: 56px;
    right: 100px;
    padding: 0;
    width: 234px;
    height: 36px;

    :deep(.van-search__content) {
      border-radius: 10px !important;
    }
  }

  .add {
    position: absolute;
    left: 20px;
    width: 26px;
    height: 26px;
  }

  .adduser {
    position: absolute;
    right: 60px;
    width: 20px;
    height: 20px;
  }

  .set {
    position: absolute;
    right: 20px;
    width: 28px;
    height: 26px;
    transform: rotate(30deg);
  }
}
</style>