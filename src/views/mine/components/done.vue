<template>
  <van-pull-refresh class="main" v-model="loading" @refresh="onRefresh">
    <div class="info">
      <div class="top">
        <div class="name">{{ info.userName }}</div>
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
</template>

<script setup>
import { createApp, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from "vuex";
import { getInfo } from "@/api/mine";
import { Toast } from 'vant';
const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()
const store = useStore()

const info = computed({
  get () {
    return store.state.info
  },
  set (val) {
    store.commit('setInfo', val)
  }
})

// 下拉刷新
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    getUserInfo()
    loading.value = false;
  }, 1000);
};

// 获取用户信息
async function getUserInfo () {
  const res = await getInfo()
  if (res.code) {
    info.value = res.data
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.main {
  .info {
    height: 170px;
    position: relative;
    border-bottom: 0.5px solid #e5e5e3;

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

      .follow,
      .fans {
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
    border-bottom: 0.5px solid #e5e5e3;
  }
}
</style>