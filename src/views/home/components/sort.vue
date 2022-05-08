<template>
  <div class="main">
    <div class="sort-item" v-for="item in sort" :key="item">
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
import sort from '@/assets/json/sort.json'
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 148px);
  overflow: auto;

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
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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