<template>
  <div class="box">
    <div class="header">
      <icon-svg class="add" name="icon-add"></icon-svg>
      <div class="title">我</div>
      <van-search v-model="value" v-show="false" placeholder="搜索我的菜谱" background="#ffffff"/>
      <icon-svg class="adduser" v-show="false" name="icon-adduser"></icon-svg>
      <icon-svg class="set" name="icon-set"></icon-svg>
    </div>
    <div class="content">
      <div class="default">
        <div class="tips">开始准备好好吃饭</div>
        <van-checkbox :class="{ 'shake-horizontal': horizontal }" v-model="checked" checked-color="#FA8C7C">我已阅读并同意下厨房的<a>《用户协议》</a>和<a>《隐私政策》</a>
        </van-checkbox>
        <van-button type="default" @click="login" color="#EEEEEE">手机登录</van-button>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {createApp} from 'vue';
import {Toast} from 'vant';
const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()

const value = ref('');
const checked = ref(false);
const horizontal = ref(false);


function login() {
  if (checked.value === false) {
    horizontal.value = true
    setTimeout(()=>{
      horizontal.value = false
    },500)
    Toast({message:'登录/注册前请先阅读并同意相关协议',duration:1000});
  } else {
    router.push('/mine/verification')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.box {

  .header {
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    padding-top: 8px;

    .add {
      position: absolute;
      left: 20px;
      width: 22px;
      height: 22px;
    }

    .title {
      position: absolute;
      left: 178px;
      font-size: 17px;
    }

    .set {
      position: absolute;
      left: 342px;
      width: 28px;
      height: 26px;
      transform: rotate(30deg);
    }

    .van-search {
      padding: 0;
      position: absolute;
      width: 234px;
      height: 36px;
      left: 56px;

      :deep(.van-search__content) {
        border-radius: 10px !important;
      }
    }

    .adduser {
      position: absolute;
      left: 309px;
      width: 20px;
      height: 20px;
    }

  }

  .content {

    .default {
      .tips {
        margin-top: 55px;
        padding-left: 20px;
        width: 232px;
        height: 28px;
        font-weight: bold;
        font-size: 26.5px;
        color: $font-dark;
      }

      .van-checkbox {
        margin-top: 10.5px;
        padding-left: 20px;

        a {
          color: #FA8C7C;
        }

        :deep(.van-checkbox__icon) {
          font-size: 16px;
        }

        :deep(.van-checkbox__label) {
          font-size: 12px;
        }
      }

      .van-button {
        width: 330px;
        height: 50.5px;
        border-radius: 10px;
        font-size: 17px;
        color: #434343 !important;
        font-weight: bold;
        margin: 39px 30px 0;
      }
    }


  }
}
</style>