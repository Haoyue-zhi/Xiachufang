<template>
  <div class="list">
    <div class="title">
      {{title || ''}}
    </div>
    <div class="column">
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
const props = defineProps(['title','items'])
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.list {
  padding-top: 17px;
  .title {
    padding-left: 20px;
    padding-bottom: 16px;
    font-size: 23px;
    font-weight: bold;
  }

  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0 17px;
    grid-row-gap: 65px;
    .commodity {
      img {
        display: block;
        width: 170px;
        height: 170px;
        object-fit: cover;
        border-radius: 10px;
      }
      .name {
        margin-top: 12px;
        font-size: 14px;
        letter-spacing: 0.02em;
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