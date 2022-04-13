<template>
  <!-- 导航栏 -->
  <navbar :address="address"></navbar>
  <!-- 主要内容 -->
  <div class="content">

    <div class="top">
      <div class="btn">
        我的订单
      </div>
      <div class="btn">
        我的优惠券
      </div>
    </div>
    <transverse title="新品" :items="test"></transverse>
    <list title="冻品" :items="test2"></list>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import transverse from './components/transverse.vue'
import list from './components/list.vue'
import { ref } from 'vue'
import { map } from '@/api/store'

getMap()

// 获取定位
const address = ref('')
async function getMap () {
  const params = {
    key: '765497128df15f589daa56c0c79b35a5',
  }
  const res = await map(params)
  if (res && res.infocode === "10000") {
    address.value = res.city
  }
}

const test = [
  {
    img: 'https://i2.chuimg.com/541c647fb8b848f0bf57e5a664868f6b_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '野珍菌汤调味料 100g/袋',
    price: '12.9',
    sales: '254'
  },
  {
    img: 'https://i2.chuimg.com/fa333d354f5949769ae58ebce6b2c44b_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '法式油封鸭腿 540g/盒',
    price: '62.9',
    sales: '162'
  },
  {
    img: 'https://i2.chuimg.com/e7ca23f7a2024037bb56d901d25786b8_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '海鲜捞汁 200g/包（100g*2袋）',
    price: '9.9',
    sales: '241'
  },
  {
    img: 'https://i2.chuimg.com/a5ac50af8f8b42578559fe236f3ad06b_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '和牛牛肉饼 130g/片',
    price: '21.9',
    sales: '982'
  },
  {
    img: 'https://i2.chuimg.com/d1c065808a6b40bbacc54a1792b8d90a_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '卤料 100g-112g/包',
    price: '9.9',
    sales: '184'
  },
  {
    img: 'https://i2.chuimg.com/b254b97822244caf92510dc1701512f5_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '鲅鱼馅&黄鱼馅 200g/盒',
    price: '21.9',
    sales: '329'
  },
  {
    img: 'https://i2.chuimg.com/a309a6d815924da587bc643970c5b3ff_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '蒜蓉酱 80g/包',
    price: '6.9',
    sales: '147'
  }
]

const test2 = [
  {
    img: 'https://i2.chuimg.com/89063c71d5dc40fbafdfbf76a0835c05_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '扑扑虾滑 150g/盒',
    price: '27.9',
    sales: '1434'
  },
  {
    img: 'https://i2.chuimg.com/a5ac50af8f8b42578559fe236f3ad06b_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '和牛牛肉饼 130g/片',
    price: '21.9',
    sales: '982'
  },
  {
    img: 'https://i2.chuimg.com/33551ff3f6524f92a73da58007d66f66_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '蹦蹦牛肉丸&牛筋丸 150g/袋',
    price: '21.9',
    sales: '352'
  },
  {
    img: 'https://i2.chuimg.com/360b9882da45492982268d03aec3bd26_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '朵朵云吞 232g-260g/袋',
    price: '25.9',
    sales: '314'
  },
  {
    img: 'https://i2.chuimg.com/77022b7df8214cc0b5191aa196c2826c_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '蹦蹦鱿鱼丸 150g/袋',
    price: '22.9',
    sales: '120'
  },
  {
    img: 'https://i2.chuimg.com/1e14a4e6839f4a588b4ce127af518577_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '爆爆鱼籽福袋 150g/袋',
    price: '24.9',
    sales: '151'
  },
  {
    img: 'https://i2.chuimg.com/e1496d673ee64be7bd6e9a80507538a0_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '蹦蹦墨鱼丸 150g/袋',
    price: '22.9',
    sales: '94'
  },
  {
    img: 'https://i2.chuimg.com/bb17b473cb4d4850833b2f965a42446a_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '骨付香肠 275g/盒',
    price: '34.5',
    sales: '100'
  },
  {
    img: 'https://i2.chuimg.com/c9fcc80c3003408bad4f864b294a3092_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: 'M鳗-日式蒲烧风味 504g/盒',
    price: '138',
    sales: '177'
  },
  {
    img: 'https://i2.chuimg.com/b254b97822244caf92510dc1701512f5_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '鲅鱼馅&黄鱼馅 200g/盒',
    price: '21.9起',
    sales: '329'
  },
  {
    img: 'https://i2.chuimg.com/fa333d354f5949769ae58ebce6b2c44b_800w_800h.jpg?imageView2/1/w/250/h/250/q/90/format/webp',
    name: '法式油封鸭腿 540g/盒',
    price: '62.9',
    sales: '162'
  },
]

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.top {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  .btn {
    width: 168px;
    height: 49px;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: -0.06em;
    line-height: 49px;
    text-align: center;
    border-radius: 11px;
    background-color: #f2f2f2;
  }
}
</style>