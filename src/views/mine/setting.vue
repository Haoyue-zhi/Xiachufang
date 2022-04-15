<template>
  <div class="setting">
    <van-nav-bar title="设置" @click-left="onClickLeft" fixed placeholder :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000" />
      </template>
    </van-nav-bar>

    <div class="main">

      <div class="edit" @click="edit">
        <img :src="info.userAvatar">
        <div class="info">
          <span class="name">{{ info.userName }}</span>
          <span class="num">手机号码登录: {{ info.userPhone ? info.userPhone.slice(3) : null}}</span>
        </div>
        <icon-svg class="right" name="icon-right"></icon-svg>
      </div>

      <van-cell-group :border="false">
        <van-cell value="密码" @click="editPas" />
        <van-cell value="收货地址" @click="router.push('/mine/setting/address')"/>
      </van-cell-group>

      <div class="quit">
        <span @click="logout">退出当前账号</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { removeToken } from '@/utils/auth'
import { Dialog } from 'vant';

const router = useRouter();
const route = useRoute();
const store = useStore()

// 用户信息
const info = computed(() => store.state.info)

function edit () {
  router.push('/mine/setting/edit')
}

const timer = computed(() => store.state.timer)
function editPas () {
  Dialog.confirm({
    message: '修改密码需要\n手机号码验证，是否继续',
    width: 270,
    confirmButtonText: '好的',
    confirmButtonColor: '#3478F6',
    cancelButtonColor: '#3478F6'
  })
    .then(() => {
      if (timer.value === null) {
        router.push('/mine/setting/editPassword')
      } else {
        Dialog({ message: '你获取验证码太快了，等一分钟再试试吧', confirmButtonColor: '#3478F6' });
      }
    })
    .catch(() => {
    });
}

// 退出
function logout () {
  removeToken()
  store.commit('resetStore')
  store.commit('setSkeleton', false)
  router.replace('/mine')
}

function onClickLeft () {
  router.back()
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.main {
  .edit {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    margin-top: 12px;
    margin-bottom: 13px;
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

  .quit {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: $theme-color;
  }
}
</style>