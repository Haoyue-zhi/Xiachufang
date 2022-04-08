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

const imageList = [
  {
    img: 'https://i2.chuimg.com/2e036493e7d040b4a65d39ec4a53b3cf_1065w_1421h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/aca2053b275b4c558f5f1c00ea3d68fc_1061w_1596h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://i2.chuimg.com/6e1b8da5d7bc45e5a94618ed6d9edad6_3000w_4000h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/7af58dea5cfc42ada298f9db21d6d769_4032w_3024h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://i2.chuimg.com/ce907e5370c441e08efd6205ba1e9aec_960w_1280h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/04043b4c81b6455da16fdaa662f212ec_1440w_892h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://i2.chuimg.com/d361d0aadffd441b8860f89ab4c503b2_1280w_1706h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/e7cb0bc9bf014c9f96e1e9cb9295dbb6_960w_1280h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'zx'
  },
  {
    img: 'https://i2.chuimg.com/cc126a45ed4e43acbb655381f71aca95_960w_1280h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/be55cfbbbf9f412a80e2fcb9958ae0f3_1429w_1905h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/efdac3d0f1754daf9004ac249278dbd2_1125w_1125h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/cd68db5a769d4fa6bf903db9af7c03ef_960w_1280h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/626cc0f407cc11e7bc9d0242ac110002_860w_576h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/622becc6b6394b39bc58050c8d681f6e_1701w_1361h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/15a396be64f445ae8a560810d7702f21_853w_1280h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  },
  {
    img: 'https://i2.chuimg.com/4fd2274df8044c96bb04d8782d803e4e_1080w_864h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90',
    title: '救......这一盘我真的能连',
    subtitle: '3人做过',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: 'wo'
  }
]
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