<template>
  <van-pull-refresh class="main" v-model="loading" @refresh="onRefresh">
    <!-- 个人信息 -->
    <div class="info van-hairline--bottom">
      <div class="top">
        <div class="name">{{ info.userName }}</div>
        <img :src="info.userAvatar">
      </div>
      <div class="bottom">
        <div class="follow">
          <div class="num">{{info.userFollow}}</div>
          <div class="item">关注</div>
        </div>
        <div class="fans">
          <div class="num">{{info.userFans}}</div>
          <div class="item">粉丝</div>
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <van-cell-group>
      <van-cell :border="false">
        {{ info.userSex }} · {{ info.createTime.slice(0, 4) }}年 加入
      </van-cell>
      <van-cell>
        {{ info.userText || '添加个人简介，让厨友更了解你' }}
      </van-cell>
    </van-cell-group>
    <!-- 宫格 -->
    <div class="van-hairline--bottom">
      <van-grid :border="false" :column-num="5" icon-size="22px">
        <van-grid-item icon="clock-o" text="浏览历史" @click="tips" />
        <van-grid-item icon="diamond-o" text="会员" @click="tips" />
        <van-grid-item icon="tv-o" text="课程" @click="tips" />
        <van-grid-item icon="orders-o" text="订单" @click="tips" />
        <van-grid-item icon="cash-o" text="钱包" @click="tips" />
      </van-grid>
    </div>
    <!-- 标签页 -->
    <div class="tabs">
      <van-tabs v-model:active="active" swipeable sticky offset-top="52" line-width="20px" color="#E86F58">
        <van-tab title="菜谱 0">
          <div class="menu">
            创建菜谱的人是厨房里的天使
            <button>开始创建第一道菜谱</button>
          </div>
        </van-tab>
        <van-tab title="作品 0">
          <div class="works">
            记录美食，味道因回忆而美丽
            <button>分享我的美食作品</button>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </van-pull-refresh>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from "vuex";
import { getInfo } from "@/api/mine";
import { Toast } from 'vant';

const router = useRouter()
const route = useRoute()
const store = useStore()

const active = ref(0);

// 下拉刷新
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    getUserInfo()
    loading.value = false;
  }, 1000);
};

// 获取用户信息
const info = computed({
  get () {
    return store.state.info
  },
  set (val) {
    store.commit('setInfo', val)
  }
})

async function getUserInfo () {
  const res = await getInfo()
  if (res.code && res.code === '00000') {
    info.value = res.data
    console.log(info.value)
  }
}

function tips () {
  Toast({ message: '功能暂未开通', duration: 1000 });
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.main {
  min-height: calc(100vh - 105px);
  .info {
    height: 170px;
    position: relative;

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
        border-radius: 50%;
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

  .tabs {
    .van-tabs {
      :deep(.van-tabs__nav--line) {
        padding-left: 100px;
        padding-right: 100px;
      }
    }

    .menu,
    .works {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 365px;
      font-size: 19px;
      font-weight: 900;
      letter-spacing: 0.01em;
      color: #3d3d3d;

      button {
        border: none;
        background: none;
        margin-top: 35px;
        font-size: 17px;
        color: $theme-color;
      }
    }
  }
}
</style>