<template>
  <div class="nav">
    <icon-svg class="add" name="icon-add"></icon-svg>
    <van-search placeholder="搜索菜谱、食材" background="#ffffff"/>
    <icon-svg class="bell" name="icon-bell"></icon-svg>
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
    width: 274px;
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

  .bell {
    position: absolute;
    right: 20px;
    width: 22px;
    height: 22px;
  }

}
</style>