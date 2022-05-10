<template>
  <div class="menulist">
    <van-nav-bar @click-left="back" fixed placeholder :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
    </van-nav-bar>

    <div class="main">
      <div class="cover">
        <img src="https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF">
      </div>
      <div class="tit van-hairline--bottom">
        测试
      </div>
      <div class="info">
        <div class="info-item">
          <img class="avatar"
               src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654757295&t=e5cb32c645e3ba9d281fc5c066080779">
          <div class="name">
            阿斯顿发送到发是
          </div>
        </div>
        <van-button color="#E86F58">关注</van-button>
      </div>
      <van-cell title-class="title" title="用料" :border="false"/>
      <ul class="materials">
        <li v-for="item in 10">
          <div class="left">盐</div>
          <div class="right">1克</div>
        </li>
      </ul>

      <ul class="setup">
        <li v-for="item in 10">
          <div class="title">步骤</div>
          <img src="https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF">
        </li>
      </ul>
    </div>

    <div class="bottom">
      <div class="grid">
        <van-grid direction="horizontal" :column-num="4" :border="false" :icon-size="16">
          <van-grid-item text="收藏">
            <template #icon>
              <icon-svg class="icon" name="icon-star" color="#E86F58"></icon-svg>
            </template>
          </van-grid-item>
          <van-grid-item text="0">
            <template #icon>
              <icon-svg class="icon" name="icon-comment"></icon-svg>
            </template>
          </van-grid-item>
          <van-grid-item text="传作品" @click="upload('/works')">
            <template #icon>
              <icon-svg class="icon" name="icon-camera"></icon-svg>
            </template>
          </van-grid-item>
          <van-grid-item/>
        </van-grid>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from '@/store'
import {details} from '@/api/menulist'

const router = useRouter();
const route = useRoute();
const store = useStore()

// 用户信息
const info = computed(() => store.info)

function back() {
  router.back()
}

const ID = ref(route.params.id)
getDetails()

async function getDetails() {
  console.log(ID.value)
  const res = await details(ID.value)
  if (res.code && res.code === '00000') {
    console.log(res)
  }
}

function upload(path) {
  if (Object.keys(info.value).length === 0) {
    router.push('/mine')
  } else {
    router.push(path)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.menulist {

  .main {
    .cover, img {
      width: 100%;
      height: 488px;
      object-fit: cover;
    }

    .tit {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      font-weight: 600;
      height: 106px;
      padding: 0 21px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      padding: 0 21px;

      .info-item {
        display: flex;
        align-items: center;

        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
        }

        .name {
          margin-left: 22px;
          font-size: 18px;
          font-weight: normal;
        }
      }

      .van-button {
        width: 67px;
        height: 31px;
      }
    }

    .van-cell {
      :deep(.title) {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .materials {
      padding: 10px 21px;

      li {
        display: flex;
        align-items: center;
        font-size: 18px;
        padding: 10px 0;
        position: relative;

        &:not(:last-child) {
          border-bottom: 1px dotted #ebedf0;
        }

        .right {
          position: absolute;
          right: 120px;
        }
      }
    }

    .setup {
      padding: 10px 21px;

      li {
        .title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        img {
          width: 350px;
          height: 280px;
          object-fit: cover;
          border-radius: 13px;
        }
      }

    }
  }

  .bottom {
    height: 83px;

    .grid {
      width: 100%;
      height: 83px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: #ffffff;

      .van-grid {
        .van-grid-item {
          &:first-child {
            :deep(.van-grid-item__content) {
              .van-grid-item__text {
                color: $theme-color;
              }
            }
          }

          :deep(.van-badge__wrapper) {
            display: flex;
            align-items: center;

            .icon-svg {
              width: 26px;
              height: 26px;
            }
          }

        }
      }
    }
  }
}
</style>