<template>
  <div class="nav">
    <icon-svg v-show="info" class="add" name="icon-add"></icon-svg>
    <div v-show="!info" class="title">我</div>
    <van-search v-show="info" placeholder="搜索我的菜谱" background="#ffffff"/>
    <icon-svg v-show="info" class="adduser" name="icon-adduser"></icon-svg>
    <icon-svg v-show="info" class="set" name="icon-set" @click="router.push('/mine/setting')"></icon-svg>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const info = computed(() => {
  return Object.keys(store.state.info).length !== 0
})

</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  margin-top: 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  .title {
    font-size: 17px;
  }

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
    width: 22px;
    height: 22px;
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