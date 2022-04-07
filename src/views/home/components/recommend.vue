<template>
  <van-pull-refresh>
    <div class="title">
      为你推荐
    </div>
    <div class="column">
      <div class="item" v-for="item in imageList" :key="item">
        <img class="photo" v-lazy="item.img">
        <div class="item-title">
          {{ item.title }}
        </div>
        <div class="subtitle">
          {{ item.subtitle }}
        </div>
        <div class="author">
          <img :src="item.portrait">
          <span>{{ item.author }}</span>
        </div>
      </div>
    </div>


  </van-pull-refresh>
</template>

<script setup>
import {ref} from 'vue'

const imageList = ref([
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  }
])
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.title {
  font-size: 19px;
  font-weight: bold;
  margin-top: 19px;
  margin-left: 19px;
  margin-bottom: 25px;
}

.column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;

  .item {
    width: 181px;
    height: 256px;
    margin: 0 5px 32px 5px;

    .photo {
      display: block;
      width: 181px;
      height: 181px;
      object-fit: cover;
      border-radius: 11px;
    }

    .item-title {
      font-size: 14px;
      font-weight: bold;
      padding: 8px 14px 3px 14px;
      padding-left: 14px;
      white-space: nowrap;
    }

    .subtitle {
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 0.03em;
      padding-left: 14px;
      padding-bottom: 8px;
    }

    .author {
      display: flex;
      align-items: center;
      padding-left: 10px;

      img {
        width: 19px;
        height: 19px;
        object-fit: cover;
        border-radius: 50%;
      }

      span {
        padding-left: 4px;
        font-size: 11px;
        color: #c3c3c3;
      }
    }
  }
}
</style>