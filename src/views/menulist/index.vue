<template>
  <div class="menulist">
    <van-nav-bar @click-left="back" fixed placeholder :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
    </van-nav-bar>

    <div class="main">
      <div class="cover">
        <img :src="fengmian">
      </div>
      <div class="tit van-hairline--bottom">
        虎皮可乐鸡蛋
      </div>
      <div class="info">
        <div class="info-item">
          <img class="avatar"
               :src="info.userAvatar">
          <div class="name">
            {{ info.userName }}
          </div>
        </div>
        <van-button color="#E86F58">关注</van-button>
      </div>
      <van-cell title-class="title" title="用料" :border="false"/>
      <ul class="materials">
        <li v-for="item in items">
          <div class="left">{{item.left}}</div>
          <div class="right">{{item.right}}</div>
        </li>
      </ul>

      <ul class="setup">
        <li>
          <div class="title">步骤 1</div>
          <img :src="buzhou1">
          <div class="miaoshu">
            <p>1.鸡蛋冷水下锅煮8分钟捞出过凉剥壳备用</p>
            <p>2.锅里少许油放入鸡蛋煎至金黄虎皮状，下
              蒜末爆香</p>
            <p>3.加入一小碗可乐加1勺生抽和1勾蚝油煮几
              分钟</p>
            <p>4.大火收汁至汤汁浓稠即可关火</p>
          </div>
        </li>
        <li>
          <div class="title">步骤 2</div>
          <img :src="buzhou2">
          <div class="miaoshu">
            <p>超级好吃的虎皮鸡蛋就做好了，你一定要试
              试，不好吃你来打我今</p>
          </div>
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
import fengmian from '@/assets/img/fengmian.jpg'
import buzhou1 from '@/assets/img/buzhou1.jpg'
import buzhou2 from '@/assets/img/buzhou2.jpg'

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

const items = [
  {left:'鸡蛋',right:'8个'},
  {left:'蒜末',right:'2瓣'},
  {left:'可乐',right:'一小碗'},
  {left:'生抽',right:'一勺'},
  {left:'蚝油',right:'一勺'},
]

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

        .miaoshu{
          font-size: 16px;
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