<template>
  <div class="setting">
    <van-nav-bar
        title="设置"
        @click-left="onClickLeft"
        fixed
        placeholder
        :border="false"
    >
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
    </van-nav-bar>
    <div class="content">
      <span class="quit" @click="logout">退出当前账号</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import {useRouter, useRoute} from "vue-router";
import { removeToken } from '@/utils/auth'

const router = useRouter();
const route = useRoute();
const store = useStore()

// 退出
function logout () {
  removeToken()
  store.commit('resetStore')
  router.replace('/mine')
}

function onClickLeft() {
  router.back()
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.setting {
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  .quit {
    margin-top: 30px;
    font-size: 14px;
    color: $theme-color;
  }
}
</style>