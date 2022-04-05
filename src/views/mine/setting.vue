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

    <div class="main">
      <div class="edit" @click="edit">
        <img :src="info.userAvatar">
        <div class="info">
          <span class="name">{{ info.userName }}</span>
          <span class="num">手机号码登录: {{ info.userPhone.slice(3) }}</span>
        </div>
        <icon-svg class="right" name="icon-right"></icon-svg>
      </div>
      <div :class="item.class" v-for="item in items" :key="item">
        {{ item.name }}
      </div>
      <span class="quit" @click="logout">退出当前账号</span>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";
import {removeToken} from '@/utils/auth'

const router = useRouter();
const route = useRoute();
const store = useStore()

// 用户信息
const info = computed(() => store.state.info)

const items = ref([
  {name: '密码', class: 'psw'},
  {name: '收货地址', class: 'address'}
])

function edit(){
  router.push('/mine/setting/edit')
}

// 退出
function logout() {
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

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .edit {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    margin-top: 12px;
    position: relative;

    img {
      margin-left: 19px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .info {
      margin-left: 18px;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 20px;
        font-weight: bold;
      }

      .num {
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0.02em;
      }
    }

    .right {
      position: absolute;
      right: 19px;
      width: 20px;
      height: 13px;
    }
  }

  .psw, .address {
    align-self: flex-start;
    width: 100%;
    font-size: 17px;
    padding-left: 20px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .quit {
    margin-top: 30px;
    font-size: 14px;
    color: $theme-color;
  }
}
</style>