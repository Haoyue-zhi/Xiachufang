<template>
  <div class="default">
    <div class="tips">开始准备好好吃饭</div>
    <van-checkbox v-model="checked" :class="horizontal ? 'shake-horizontal' : '' " checked-color="#FA8C7C">
      我已阅读并同意下厨房的<a>《用户协议》</a>和<a>《隐私政策》</a>
    </van-checkbox>
    <div class="btn">
      <van-button type="default" @click="login" color="#EEEEEE">手机登录</van-button>
    </div>
  </div>
</template>

<script setup>
import {createApp, ref} from "vue";
import {useRouter, useRoute} from 'vue-router'
import {Toast} from 'vant';

const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()

const checked = ref(false);
const horizontal = ref(false)

// 登录
function login() {
  if (checked.value === false) {
    horizontal.value = true
    Toast({message: '登录/注册前请先阅读并同意相关协议', duration: 1000});
  } else {
    router.push('/mine/verification')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";


.default {
  height: 100%;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

  .tips {
    position: relative;
    top: 91px;
    font-weight: bold;
    font-size: 26.5px;
    color: $font-dark;
  }

  .van-checkbox {
    position: relative;
    top: 103px;

    a {
      color: $theme-color;
    }

    :deep(.van-checkbox__icon) {
      font-size: 16px;
    }

    :deep(.van-checkbox__label) {
      font-size: 12px;
    }
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 157px;

    .van-button {
      width: 330px;
      height: 50.5px;
      border-radius: 10px;
      font-size: 17px;
      color: #434343 !important;
      font-weight: bold;
    }
  }
}
</style>