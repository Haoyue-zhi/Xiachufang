<template>
  <!-- 导航栏 -->
  <navbar></navbar>
  <!-- 主要内容 -->
  <div class="content">

    <van-tabs v-model:active="active" swipeable line-width="20px" color="#E86F58">
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
    img: 'https://i2.chuimg.com/522d4c069fb4485daf206d55f2a4902d_1280w_853h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '不用揉面的日式软面包',
    subtitle: '314',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '玲铛铛sz'
  },
  {
    img: 'https://i2.chuimg.com/cfcbe03cbac04504b30cd504d93b0e56_960w_1280h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '厚毛毯”｜咖啡蛋糕卷',
    subtitle: '53',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '赟赟_'
  },
  {
    img: 'https://i2.chuimg.com/663aa3d6798441fda9169739596b639b_1280w_850h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '烤玉米片、健康低卡零食、追剧标配😄',
    subtitle: '98',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '开心小煮厨'
  },
  {
    img: 'https://i2.chuimg.com/0631cb65d0ed48ac892accfbbd72e3a1_960w_1280h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '㊙️ 新手简易版❗️零失败的红糖红枣糕，家人都爱',
    subtitle: '48',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '蕾宝的烟味生活'
  },
  {
    img: 'https://i2.chuimg.com/eca3da252de548c08964eabf1a60489b_608w_608h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '奶香蜜豆饼无泡打粉外皮酥脆 内里超暄软附细节视频',
    subtitle: '27',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '幸福的面点师'
  },
  {
    img: 'https://i2.chuimg.com/18d1135b6c8f4d90975f5aee1942eb6e_1536w_2046h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '一口沦陷‼️复刻山姆牛肉卷㊙️皮薄馅足爆好吃',
    subtitle: '87',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '是梦梦呀丶'
  },
  {
    img: 'https://i2.chuimg.com/bf80f1aeeac44bf3a44f1d2f5f53f451_1280w_1008h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '痘痘消得快，我妈就煲这款汤，绿豆土茯苓鸽子汤',
    subtitle: '3',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '最爱花心思'
  },
  {
    img: 'https://i2.chuimg.com/a85c599c47954abf8af45f1be1665cfb_960w_1280h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '广式经典“养胃”汤，专克幽门螺杆菌，简直好喝到扶墙~',
    subtitle: '27',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '蓝天与海相连'
  },
  {
    img: 'https://i2.chuimg.com/d09ad296775a4642b7197ee2ea230c1e_960w_1280h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '花生黑芝麻馅(流沙)万能馅',
    subtitle: '87',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '小虎牙c'
  },
  {
    img: 'https://i2.chuimg.com/1204eeee86244bce810e803e698bc372_853w_853h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '⭐️蜂蜜苹果烤鸡⭐️',
    subtitle: '',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '菊子美食料理'
  },
  {
    img: 'https://i2.chuimg.com/dd532f86b6ce48678f98fd5db6a210ec_1921w_2560h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '正宗水塔糕',
    subtitle: '',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '青栀4363'
  },
  {
    img: 'https://i2.chuimg.com/ea7b8250470e49b08531492b9a1d9a5d_522w_294h.gif?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '茄子焖面',
    subtitle: '7',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '阿白和猫'
  },
  {
    img: 'https://i2.chuimg.com/9f72379a353e40fdadf53e49ebc2b30b_960w_1280h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '从营养师那学来的杂粮饭配方',
    subtitle: '5',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '妆点晴天'
  },
  {
    img: 'https://i2.chuimg.com/b691a5e8d6bb4b0fa398f1a21e6bf1ef_577w_1080h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '黑糖葡萄干mini小吐司',
    subtitle: '7',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '天然气小姐—Ariel'
  },
  {
    img: 'https://i2.chuimg.com/8bed4eeb4b4a4824856b9ec500975722_1080w_1072h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '越吃越掉称的减脂餐',
    subtitle: '22',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '可盐可甜的美食厨房'
  },
  {
    img: 'https://i2.chuimg.com/790523da21fe4d999bfc6fe4eb5ec055_1032w_776h.jpg?imageView2/1/w/540/h/360/q/90/format/webp',
    title: '10 分钟搞定‼️蒜香片片鱼，让孩子爱上吃鱼',
    subtitle: '26',
    portrait: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    author: '空肉完rouwan'
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
