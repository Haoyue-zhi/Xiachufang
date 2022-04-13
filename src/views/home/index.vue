<template>
  <!-- 导航栏 -->
  <navbar></navbar>
  <!-- 主要内容 -->
  <div class="content">

    <van-tabs v-model:active="active" swipeable sticky offset-top="52px" line-width="20px" color="#E86F58">
      <van-tab title="关注">
        <follow></follow>
      </van-tab>
      <van-tab title="推荐">
        <recommend :imageList="imageList"></recommend>
      </van-tab>
      <van-tab title="分类">
        <sort></sort>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import sort from './components/sort.vue'
import recommend from './components/recommend.vue'
import follow from './components/follow.vue'
import { ref } from 'vue'

const active = ref(1);

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

.van-tabs {
  :deep(.van-tabs__nav--line ) {
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>
