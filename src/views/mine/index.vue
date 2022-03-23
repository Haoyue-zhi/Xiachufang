<template>
  <div class="box">
    <navbar></navbar>

    <div class="content">
      <!-- 未登录页面 -->
      <div class="default" v-if="!info">
        <div class="tips">开始准备好好吃饭</div>
        <van-checkbox :class="{ 'shake-horizontal': horizontal }" v-model="checked" checked-color="#FA8C7C">
          我已阅读并同意下厨房的<a>《用户协议》</a>和<a>《隐私政策》</a>
        </van-checkbox>
        <div class="btn">
          <van-button type="default" @click="login" color="#EEEEEE">手机登录</van-button>
        </div>
      </div>

      <van-pull-refresh class="main" v-else>
        <div class="info">
          <div class="top">
            <div class="name">{{info.userName}}</div>
            <img :src="info.userAvatar">
          </div>
          <div class="bottom">
            <div class="follow">
              <div class="num">0</div>
              <div class="item">关注</div>
            </div>
            <div class="fans">
              <div class="num">0</div>
              <div class="item">粉丝</div>
            </div>
          </div>

        </div>
        <div class="introduce">

        </div>
      </van-pull-refresh>
    </div>
  </div>

</template>

<script setup>
import navbar from './components/navbar.vue'
import {computed, ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {createApp} from 'vue';
import {Toast} from 'vant';
import {useStore} from "vuex";

const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()
const store = useStore()

const value = ref('');
const checked = ref(false);
const horizontal = ref(false);

// 登录
function login() {
  if (checked.value === false) {
    horizontal.value = true
    setTimeout(() => {
      horizontal.value = false
    }, 500)
    Toast({message: '登录/注册前请先阅读并同意相关协议', duration: 1000});
  } else {
    router.push('/mine/verification')
  }
}

const info = computed(()=> store.state.info)
console.log(info.value)
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.box {
  height: 100%;

  .content {
    height: calc(100% - 55px);
    position: relative;
    top: 55px;

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

    .main {

      .info {
        height: 170px;
        position: relative;
        border: 0.5px solid #E5E5E3;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 21px;
          padding-left: 20px;
          padding-right: 20px;

          .name {
            font-size: 29px;
            font-weight: bold;
          }

          img {
            height: 80px;
            width: 80px;
            border-radius: 50px;
            object-fit: cover;
          }
        }

        .bottom {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;

          .follow, .fans {
            display: flex;
            flex-direction: column;
            align-items: center;

            .num {
              font-size: 14px;
            }

            .item {
              font-size: 12px;
            }
          }

          .follow {
            margin-left: 20px;
          }

          .fans {
            margin-left: 40px;
          }
        }
      }

      .introduce {
        min-height: 122px;
        width: 100%;
        border: 0.5px solid #E5E5E3;
      }

    }
  }
}
</style>