<template>
  <div class="main">

    <div class="sort-item" v-for="item in demo" :key="item">
      <div class="sort-title">
        {{ item.title }}
      </div>
      <div class="sort-icon">
        <div class="icon-img" v-for="i in item.subject" :key="i" v-lazy:background-image="i.icon">
          <div class="icon-title">
            {{ i.title }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>

const demo = [
  {
    title: '时令食材',
    subject: [
      {
        icon: 'https://i2.chuimg.com/a1cb7a48a56011e6947d0242ac110002_200w_200h.jpg',
        title: '家常菜'
      },
      {
        icon: 'https://s.chuimg.com/catpic-20150327-%E6%B1%A4%E7%B2%A5%E4%B8%BB%E9%A3%9F.jpg',
        title: '汤粥主食'
      },
      {
        icon: 'https://i2.chuimg.com/a1c1f180a56011e6947d0242ac110002_200w_200h.jpg',
        title: '烘焙'
      },
      {
        icon: 'https://i2.chuimg.com/e7a64ec1ba714236b8fb787670a90b68_200w_200h.jpg',
        title: '松下轻厨房'
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .sort-item {
    width: 350px;

    .sort-title {
      font-size: 19px;
      margin-bottom: 18px;
    }

    .sort-icon {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      margin-bottom: 36px;

      .icon-img {
        height: 80px;
        width: 80px;
        border-radius: 10px;
        position: relative;
      }

      .icon-title {
        position: absolute;
        bottom: 9px;
        left: 0;
        width: 100%;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>