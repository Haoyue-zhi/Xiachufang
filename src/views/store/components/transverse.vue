<template>
  <div class="transverse">
    <div class="title">
      {{title || ''}}
    </div>
    <div class="swipe">
      <div class="commodity" v-for="item in items" :key="item">
        <img v-lazy="item.img">
        <div class="name">
          {{item.name || ''}}
        </div>
        <div class="num">
          <div class="price">
            ￥{{item.price || ''}}
          </div>
          <div class="sales">
            月销 {{item.sales || ''}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'items'])
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
.transverse {
  padding-top: 17px;
  padding-bottom: 80px;
  .title {
    padding-left: 20px;
    padding-bottom: 11px;
    font-size: 23px;
    font-weight: bold;
  }
  .swipe {
    width: 100%;
    display: flex;
    overflow-x: auto;
    .commodity {
      &:nth-child(1) {
        margin-left: 20px;
      }
      display: flex;
      flex-direction: column;
      padding-right: 9px;

      img {
        display: block;
        width: 164px;
        height: 164px;
        object-fit: cover;
        border-radius: 10px;
      }
      .name {
        margin-top: 13px;
        font-size: 14px;
      }
      .num {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        .price {
          color: $theme-color;
          font-size: 12px;
        }
        .sales {
          color: #9e9e99;
          font-size: 11px;
        }
      }
    }
  }
}
</style>